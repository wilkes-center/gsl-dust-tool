// src/components/map/DustMap.tsx
import { useState, useRef, useCallback, useEffect } from 'react';
import Map, { ViewStateChangeEvent, MapLayerMouseEvent } from 'react-map-gl';
import type { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePM10Data } from '../../utils/dataUtils';

import { MapContainer } from '../MapStyled';
import { MAPBOX_TOKEN, MAPBOX_CONFIG, AVAILABLE_LAKE_LEVELS, getPM10Color } from './constants';
import { MapViewState, PopupInfo, PM10Point, MapLayers } from './types';
import { MapSidebarComponent } from './MapSidebar';
import MapControlsComponent from './MapControls';
import { MapLayersComponent } from './MapLayers';
import { MapPopupComponent } from './MapPopup';
import { TimeSliderComponent } from './TimeSlider';

interface DustMapProps {
  onElevationChange?: (elevation: number) => void;
  onTimestampChange?: (timestamp: string) => void;
}

function DustMap({ onElevationChange, onTimestampChange }: DustMapProps) {
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
  
  // State for PM10 data timestamp selection
  const [selectedTimestampIndex, setSelectedTimestampIndex] = useState<number>(0);
  
  // Load PM10 data based on selected lake level
  const { centroidLocations, pm10Data, loading } = usePM10Data(selectedLakeLevel);
  
  // Store the latest successfully loaded PM10 data to prevent UI flicker during loading
  const [cachedPM10Data, setCachedPM10Data] = useState<any[]>([]);

  // Update cached data whenever new data is successfully loaded
  useEffect(() => {
    if (pm10Data && pm10Data.length > 0 && !loading) {
      setCachedPM10Data(pm10Data);
      
      // If the selected index is now out of bounds with the new data, reset it
      if (selectedTimestampIndex >= pm10Data.length) {
        setSelectedTimestampIndex(0);
      }
    }
  }, [pm10Data, loading]);
  
  // Use cached data for UI rendering to prevent disappearing components
  const timestampsForUI: string[] = cachedPM10Data.length > 0 
    ? cachedPM10Data.map(data => data.timestamp)
    : [];
  
  // Call parent component when timestamp changes
  useEffect(() => {
    if (timestampsForUI.length > 0 && onTimestampChange) {
      onTimestampChange(timestampsForUI[selectedTimestampIndex]);
    }
  }, [selectedTimestampIndex, timestampsForUI, onTimestampChange]);
  
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
  
  // Get PM10 data for rendering
  const getPM10Points = useCallback((): PM10Point[] => {
    if (!pm10Data || pm10Data.length === 0 || !centroidLocations || selectedTimestampIndex >= pm10Data.length) {
      return [];
    }

    const currentTimestampData = pm10Data[selectedTimestampIndex];
    
    return centroidLocations.map(centroid => {
      const pm10Value = currentTimestampData[centroid.centroid_name] as number;
      return {
        centroid_name: centroid.centroid_name,
        longitude: centroid.lon,
        latitude: centroid.lat,
        geoid: centroid.geoid,
        pm10: pm10Value,
        color: getPM10Color(pm10Value)
      };
    });
  }, [pm10Data, centroidLocations, selectedTimestampIndex]);
  
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
  }, [layers, centroidLocations]);
  
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
      <MapSidebarComponent 
        selectedLakeLevel={selectedLakeLevel}
        handleElevationChange={handleElevationChange}
        showBathymetry={layers.bathymetry}
      />
      
      <MapControlsComponent
        layers={layers}
        toggleLayer={toggleLayer}
      />
      
      {/* Time slider for census tract layer */}
      {layers.censusTracts && timestampsForUI.length > 0 && (
        <TimeSliderComponent
          timestamps={timestampsForUI}
          selectedIndex={Math.min(selectedTimestampIndex, timestampsForUI.length - 1)}
          onChange={setSelectedTimestampIndex}
        />
      )}
      
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
            selectedTimestampIndex={selectedTimestampIndex}
            pm10Data={pm10Data}
            centroidLocations={centroidLocations}
            getPM10Points={getPM10Points}
            loading={loading}
          />
        )}
        
        <MapPopupComponent
          popupInfo={popupInfo}
          onClose={() => setPopupInfo(null)}
          pm10Data={pm10Data}
          selectedTimestampIndex={selectedTimestampIndex}
          centroidLocations={centroidLocations}
        />
      </Map>
    </MapContainer>
  );
}

export default DustMap;