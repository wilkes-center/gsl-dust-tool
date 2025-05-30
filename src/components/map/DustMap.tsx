// src/components/map/DustMap.tsx
import { useState, useRef, useCallback, useEffect } from 'react';
import Map, { ViewStateChangeEvent, MapLayerMouseEvent } from 'react-map-gl';
import type { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePM10Data, aggregatePM10Data, getAggregatedPM10Color } from '../../utils/dataUtils';
import { HelpCircle } from 'lucide-react';

import { MapContainer } from '../MapStyled';
import { MAPBOX_TOKEN, MAPBOX_CONFIG, AVAILABLE_LAKE_LEVELS, getPM10Color } from './constants';
import { MapViewState, PopupInfo, PM10Point, MapLayers } from './types';
import { MapSidebarComponent } from './MapSidebar';
import MapControlsComponent from './MapControls';
import { MapLayersComponent } from './MapLayers';
import { MapPopupComponent } from './MapPopup';
import { TimeSliderComponent } from './TimeSlider';
import styled from 'styled-components';

interface DustMapProps {
  onElevationChange?: (elevation: number) => void;
  onTimestampChange?: (timestamp: string) => void;
  onBackToIntro?: () => void;
}

const HelpButton = styled.button`
  position: absolute;
  bottom: 160px;
  right: 10px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.moabMahogany};
  color: ${({ theme }) => theme.colors.snowbirdWhite};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(117, 29, 12, 0.8);
    transform: scale(1.05);
  }
`;

function DustMap({ onElevationChange, onTimestampChange, onBackToIntro }: DustMapProps) {
  const mapRef = useRef<MapRef>(null);
  const [viewState, setViewState] = useState<MapViewState>({
    longitude: -112.3297,
    latitude: 40.9121,
    zoom: 8
  });
  
  // Add state to track when map style has loaded
  const [mapStyleLoaded, setMapStyleLoaded] = useState(false);
  
  const [layers, setLayers] = useState<MapLayers>({
    satellite: false,
    bathymetry: true,
    censusTracts: true,
    pm10Data: false,
    erodibility: true
  });
  
  // State for lake level selection (for both slider and PM10 data)
  const [selectedLakeLevel, setSelectedLakeLevel] = useState<number>(AVAILABLE_LAKE_LEVELS[0]);
  
  // Use the selected lake level for the elevation highlight too
  const [selectedElevation, setSelectedElevation] = useState<number>(AVAILABLE_LAKE_LEVELS[0]);
  
  // Load PM10 data based on selected lake level
  const { centroidLocations, pm10Data, loading } = usePM10Data(selectedLakeLevel);
  
  // Store averaged PM10 data (time-independent)
  const [averagedPM10Data, setAveragedPM10Data] = useState<Record<string, number>>({});

  // Update averaged data whenever new data is successfully loaded
  useEffect(() => {
    if (pm10Data && pm10Data.length > 0 && !loading) {
      // Calculate averaged data across all timestamps
      const averaged = aggregatePM10Data(pm10Data);
      setAveragedPM10Data(averaged);
    }
  }, [pm10Data, loading]);

  // Call parent component when data changes (use first timestamp as representative)
  useEffect(() => {
    if (pm10Data && pm10Data.length > 0 && onTimestampChange) {
      onTimestampChange(pm10Data[0].timestamp);
    }
  }, [pm10Data, onTimestampChange]);
  
  // State for popup information
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);
  
  // Function to create water noise pattern
  const createWaterNoisePattern = useCallback(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 128;
    canvas.width = size;
    canvas.height = size;

    if (ctx) {
      // Fill with transparent background
      ctx.fillStyle = 'rgba(255, 255, 255, 0)';
      ctx.fillRect(0, 0, size, size);

      // Create noise pattern
      for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
          const value = Math.random();
          if (value > 0.995) { // Very sparse noise
            const alpha = Math.random() * 0.04; // Very low opacity
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }

      // Convert canvas to ImageData
      return ctx.getImageData(0, 0, size, size);
    }

    return null;
  }, []);

  // Handle map load
  const onMapLoad = useCallback(() => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      
      // Create and add the water noise pattern
      const noisePattern = createWaterNoisePattern();
      if (noisePattern) {
        map.addImage('water-noise', noisePattern, { sdf: true });
      }
      
      setMapStyleLoaded(true);
    }
  }, [createWaterNoisePattern]);
  
  // Toggle layer visibility
  const toggleLayer = useCallback((layerName: keyof MapLayers) => {
    const newValue = !layers[layerName];
    setLayers({
      ...layers,
      [layerName]: newValue
    });
  }, [layers]);
  
  // Get PM10 data for rendering (now using averaged data)
  const getPM10Points = useCallback((): PM10Point[] => {
    if (!centroidLocations || Object.keys(averagedPM10Data).length === 0) {
      return [];
    }
    
    return centroidLocations.map(centroid => {
      const pm10Value = averagedPM10Data[centroid.centroid_name] || 0;
      return {
        centroid_name: centroid.centroid_name,
        longitude: centroid.lon,
        latitude: centroid.lat,
        geoid: centroid.geoid,
        pm10: pm10Value,
        color: getAggregatedPM10Color(pm10Value)
      };
    });
  }, [centroidLocations, averagedPM10Data]);
  
  // Handle map click for all features
  const onClick = useCallback((event: MapLayerMouseEvent) => {
    // Only query for layers that are currently enabled
    const enabledLayers = [
      layers.censusTracts ? 'census-tracts-all-fill' : null,
      layers.bathymetry ? 'bathymetry-point-layer' : null,
      layers.pm10Data ? 'pm10-point-layer' : null,
      layers.erodibility ? 'erodibility-fill' : null
    ].filter(Boolean) as string[];

    const features = mapRef.current?.queryRenderedFeatures(event.point, {
      layers: enabledLayers
    });

    if (features && features.length > 0) {
      const feature = features[0];
      const layerId = feature.layer?.id ?? '';

      if (layerId === 'bathymetry-point-layer') {
        setPopupInfo({
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
          type: 'bathymetry',
          depth: feature.properties?.bathymetry || 0
        });
      } else if (layerId === 'census-tracts-all-fill') {
        const geoid = feature.properties?.GEOID20;
        const centroid = centroidLocations.find(c => c.geoid === geoid);
        
        setPopupInfo({
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
          type: 'censusTract',
          INTPTLAT20: feature.properties?.INTPTLAT20,
          INTPTLON20: feature.properties?.INTPTLON20,
          GEOID20: geoid,
          hasPM10Data: !!centroid
        });
      } else if (layerId === 'pm10-point-layer') {
        setPopupInfo({
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
          type: 'pm10',
          centroidName: feature.properties?.centroid_name,
          pm10Value: feature.properties?.pm10 || 0,
          geoid: feature.properties?.geoid
        });
      } else if (layerId === 'erodibility-fill') {
        setPopupInfo({
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
          type: 'erodibility',
          erodibilityValue: feature.properties?.erodibility || 0
        });
      }
    } else {
      setPopupInfo(null);
    }
  }, [layers, centroidLocations, averagedPM10Data]);
  
  // Find the nearest available lake level for a given elevation
  const findNearestLakeLevel = (value: number): number => {
    return AVAILABLE_LAKE_LEVELS.reduce((prev, curr) => 
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
  };
  
  // Handle elevation slider change
  const handleElevationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sliderValue = parseFloat(event.target.value);
    
    // Find the nearest available lake level
    const nearestLevel = findNearestLakeLevel(sliderValue);
    
    // Update both the elevation and lake level
    setSelectedElevation(nearestLevel);
    setSelectedLakeLevel(nearestLevel);
    
    // Call parent component's handler if provided
    if (onElevationChange) {
      onElevationChange(nearestLevel);
    }
  };
  
  const onMapMove = useCallback((evt: ViewStateChangeEvent) => {
    // Ensure zoom doesn't go below 8
    const newViewState = {
      ...evt.viewState,
      zoom: Math.max(8, evt.viewState.zoom)
    };
    setViewState(newViewState);
  }, []);

  const [initialViewState] = useState<MapViewState>({
    longitude: -112.3297,
    latitude: 40.9121,
    zoom: 8
  });

  return (
    <MapContainer>
      {onBackToIntro && (
        <HelpButton 
          onClick={onBackToIntro}
          title="Help & Information"
        >
          <HelpCircle size={36} />
        </HelpButton>
      )}
      
      <MapSidebarComponent 
        selectedLakeLevel={selectedLakeLevel}
        handleElevationChange={handleElevationChange}
        showBathymetry={layers.bathymetry}
      />
      
      <MapControlsComponent
        layers={layers}
        toggleLayer={toggleLayer}
      />
      
      {/* Time slider for census tract layer - HIDDEN FOR TIME-INDEPENDENT VIEW */}
      {/* TimeSlider component completely removed for averaged data display */}
      
      <Map
        {...viewState}
        ref={mapRef}
        onMove={onMapMove}
        minZoom={8}
        mapStyle={layers.satellite
          ? 'mapbox://styles/mapbox/satellite-v9'
          : MAPBOX_CONFIG.styleUrl
        }
        mapboxAccessToken={MAPBOX_TOKEN}
        onLoad={onMapLoad}
        onClick={onClick}
        interactiveLayerIds={[
          layers.censusTracts ? 'census-tracts-all-fill' : null,
          layers.bathymetry ? 'bathymetry-point-layer' : null,
          layers.pm10Data ? 'pm10-point-layer' : null,
          layers.erodibility ? 'erodibility-fill' : null
        ].filter(Boolean) as string[]}
      >
        <div className="mapboxgl-ctrl-group mapboxgl-ctrl map-controls-container" 
          style={{ position: 'absolute', bottom: '30px', right: '10px' }}>
          <button 
            className="zoom-control"
            onClick={() => setViewState(prev => ({ ...prev, zoom: Math.min(prev.zoom + 1, 22) }))}
            title="Zoom In"
          >
            <span className="mapboxgl-ctrl-icon">+</span>
          </button>
          <button 
            className="zoom-control"
            onClick={() => setViewState(prev => ({ ...prev, zoom: Math.max(prev.zoom - 1, 8) }))}
            title="Zoom Out"
          >
            <span className="mapboxgl-ctrl-icon">−</span>
          </button>
          <button 
            className="reset-view-btn"
            onClick={() => setViewState(initialViewState)}
            title="Reset View"
          >
            <span className="mapboxgl-ctrl-icon">⤧</span>
          </button>
        </div>
        
        {/* Only render sources and layers when map style has fully loaded */}
        {mapStyleLoaded && (
          <MapLayersComponent
            layers={layers}
            selectedElevation={selectedElevation}
            averagedPM10Data={averagedPM10Data}
            centroidLocations={centroidLocations}
            getPM10Points={getPM10Points}
            loading={loading}
          />
        )}
        
        <MapPopupComponent
          popupInfo={popupInfo}
          onClose={() => setPopupInfo(null)}
          averagedPM10Data={averagedPM10Data}
          centroidLocations={centroidLocations}
        />
      </Map>
    </MapContainer>
  );
}

export default DustMap;