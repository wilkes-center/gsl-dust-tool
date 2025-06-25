// src/components/map/DustMap.tsx
import { useState, useRef, useCallback, useEffect } from 'react';
import Map, { ViewStateChangeEvent, MapLayerMouseEvent, NavigationControl } from 'react-map-gl';
import type { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePM25Data, aggregatePM25Data, getAggregatedPM25Color, loadDustContributions, DustContribution } from '../../utils/dataUtils';
import { HelpCircle, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react';

import { MAPBOX_TOKEN, MAPBOX_CONFIG, AVAILABLE_LAKE_LEVELS, getPM25Color } from './constants';
import { MapViewState, PopupInfo, PM25Point, MapLayers as MapLayersType } from './types';
import { MapLayers } from './MapLayers';
import { InfoSidebar } from './InfoSidebar';
import { LakeLevelControl } from './LakeLevelControl';
import styled from 'styled-components';

// Styled components
const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  flex: 1;
  padding-top: 60px;
`;

const MapArea = styled.div<{ $sidebarOpen: boolean }>`
  flex: 1;
  position: relative;
  transition: margin-right 0.3s ease;
  margin-right: ${props => props.$sidebarOpen ? '400px' : '0'};
`;

const HelpButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
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

const MinimizedControls = styled.button<{ $expanded: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.moabMahogany};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(117, 29, 12, 0.05);
    transform: scale(1.02);
  }
  
  svg {
    transition: transform 0.2s ease;
    transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const ExpandedControls = styled.div`
  position: absolute;
  top: calc(${({ theme }) => theme.spacing.md} + 50px);
  right: ${({ theme }) => theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  max-width: 250px;
  max-height: 60vh;
  overflow-y: auto;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  
  h3 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    font-family: ${({ theme }) => theme.typography.displayFont};
    letter-spacing: 0.5px;
    padding-bottom: ${({ theme }) => theme.spacing.xs};
    border-bottom: 1px solid rgba(117, 29, 12, 0.2);
  }
`;

const LayerToggle = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  padding: 4px 0;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.moabMahogany};
  }
  
  input {
    margin-right: ${({ theme }) => theme.spacing.xs};
    cursor: pointer;
    accent-color: ${({ theme }) => theme.colors.moabMahogany};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xs};
  right: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.moabMahogany};
    transform: scale(1.1);
  }
`;

interface DustMapProps {
  onElevationChange?: (elevation: number) => void;
  onTimestampChange?: (timestamp: string) => void;
  onBackToIntro?: () => void;
  onMapLoad?: () => void;
}

function DustMap({ onElevationChange, onTimestampChange, onBackToIntro, onMapLoad }: DustMapProps) {
  const mapRef = useRef<MapRef>(null);
  const [viewState, setViewState] = useState<MapViewState>({
    longitude: -112.3297,
    latitude: 40.9121,
    zoom: 8
  });
  
  const [mapStyleLoaded, setMapStyleLoaded] = useState(false);
  const [controlsExpanded, setControlsExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarInfo, setSidebarInfo] = useState<PopupInfo | null>(null);
  
  const [layers, setLayers] = useState<MapLayersType>({
    satellite: false,
    bathymetry: true,
    censusTracts: true,
    pm25Data: false,
    erodibility: true,
  });
  
  const [selectedLakeLevel, setSelectedLakeLevel] = useState<number>(AVAILABLE_LAKE_LEVELS[0]);
  const [selectedElevation, setSelectedElevation] = useState<number>(AVAILABLE_LAKE_LEVELS[0]);
  const [selectedTimestampIndex, setSelectedTimestampIndex] = useState<number>(0);
  const [selectedCensusTractId, setSelectedCensusTractId] = useState<string | null>(null);
  
  const { centroidLocations, pm25Data, loading } = usePM25Data(selectedLakeLevel);
  const [averagedPM25Data, setAveragedPM25Data] = useState<Record<string, number>>({});
  const [dustContributions, setDustContributions] = useState<Record<string, DustContribution>>({});

  // Calculate averaged PM2.5 data
  useEffect(() => {
    if (pm25Data && pm25Data.length > 0 && !loading) {
      console.log('🔍 Processing PM2.5 data:', {
        dataLength: pm25Data.length,
        sampleData: pm25Data.slice(0, 2),
        loading
      });
      const averaged = aggregatePM25Data(pm25Data);
      console.log('📊 Averaged PM2.5 data:', {
        keys: Object.keys(averaged),
        sampleValues: Object.entries(averaged).slice(0, 5)
      });
      setAveragedPM25Data(averaged);
    } else {
      console.log('⚠️ PM2.5 data not ready:', {
        hasData: !!pm25Data,
        dataLength: pm25Data?.length || 0,
        loading
      });
    }
  }, [pm25Data, loading]);

  // Load dust contributions
  useEffect(() => {
    const loadContributions = async () => {
      console.log('🌪️ Loading dust contributions for lake level:', selectedLakeLevel);
      const contributions = await loadDustContributions(selectedLakeLevel);
      console.log('✅ Dust contributions loaded:', {
        count: Object.keys(contributions).length,
        sampleKeys: Object.keys(contributions).slice(0, 5)
      });
      setDustContributions(contributions);
    };
    loadContributions();
  }, [selectedLakeLevel]);

  // Debug centroid locations
  useEffect(() => {
    console.log('📍 Centroid locations update:', {
      count: centroidLocations?.length || 0,
      sampleData: centroidLocations?.slice(0, 3),
      loading
    });
  }, [centroidLocations, loading]);

  // Debug averaged PM2.5 data
  useEffect(() => {
    console.log('🎯 Averaged PM2.5 data update:', {
      count: Object.keys(averagedPM25Data).length,
      sampleData: Object.entries(averagedPM25Data).slice(0, 3)
    });
  }, [averagedPM25Data]);

  // Update timestamp when PM2.5 data loads
  useEffect(() => {
    if (pm25Data && pm25Data.length > 0 && onTimestampChange) {
      onTimestampChange(pm25Data[0].timestamp);
    }
  }, [pm25Data, onTimestampChange]);
  
  // Handle map load
  const onMapLoadHandler = useCallback(() => {
    if (mapRef.current) {
      setMapStyleLoaded(true);
      if (onMapLoad) {
        onMapLoad();
      }
    }
  }, [onMapLoad]);
  
  // Toggle layer visibility
  const toggleLayer = useCallback((layerName: keyof MapLayersType) => {
    setLayers(prev => ({
      ...prev,
      [layerName]: !prev[layerName]
    }));
  }, []);
  
  // Get PM2.5 points
  const getPM25Points = useCallback((): PM25Point[] => {
    if (!centroidLocations || Object.keys(averagedPM25Data).length === 0) {
      return [];
    }

    return centroidLocations.map(centroid => {
      const pm25Value = averagedPM25Data[centroid.centroid_name] || 0;
      
      return {
        centroid_name: centroid.centroid_name,
        longitude: centroid.lon,
        latitude: centroid.lat,
        geoid: centroid.geoid,
        pm25: pm25Value,
        color: getAggregatedPM25Color(pm25Value)
      };
    });
  }, [centroidLocations, averagedPM25Data]);
  
  // Handle map clicks
  const handleMapClick = useCallback((event: any) => {
    const features = event.features;

    if (features && features.length > 0) {
      const feature = features[0];
      const layerId = feature.layer?.id;
      
      let newSidebarInfo: PopupInfo | null = null;

      if (layerId === 'census-tracts-all-fill' || layerId === 'census-tracts-outline') {
        const centroid = centroidLocations.find(c => c.geoid === feature.properties?.GEOID20);
        const geoid = feature.properties?.GEOID20 || '';
        
        // Set the selected census tract ID for highlighting
        setSelectedCensusTractId(geoid);
        
        newSidebarInfo = {
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
          type: 'censusTract',
          INTPTLAT20: feature.properties?.INTPTLAT20 || '',
          INTPTLON20: feature.properties?.INTPTLON20 || '',
          GEOID20: geoid,
          hasPM25Data: !!centroid
        };
      } else if (layerId === 'pm25-point-layer') {
        // When clicking on a centroid, show census tract information
        const centroidGeoid = feature.properties?.geoid;
        if (centroidGeoid) {
          // Set the selected census tract ID for highlighting
          setSelectedCensusTractId(centroidGeoid);
          
          // Find the centroid to get its coordinates
          const centroid = centroidLocations.find(c => c.geoid === centroidGeoid);
          
          newSidebarInfo = {
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
            type: 'censusTract',
            INTPTLAT20: centroid?.lat.toString() || '',
            INTPTLON20: centroid?.lon.toString() || '',
            GEOID20: centroidGeoid,
            hasPM25Data: true
          };
        } else {
          // Fallback to original PM2.5 info if no geoid
          setSelectedCensusTractId(null);
          
          newSidebarInfo = {
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
            type: 'pm25',
            centroidName: feature.properties?.centroid_name || '',
            pm25Value: feature.properties?.pm25 || 0,
            geoid: feature.properties?.geoid
          };
        }
      } else if (layerId === 'bathymetry-point-layer') {
        // Clear census tract selection when clicking on other features
        setSelectedCensusTractId(null);
        
        newSidebarInfo = {
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
          type: 'bathymetry',
          depth: feature.properties?.bathymetry || 0
        };
      } else if (layerId === 'erodibility-fill' || layerId === 'erodibility-shadow' || layerId === 'erodibility-feather') {
        // Clear census tract selection when clicking on other features
        setSelectedCensusTractId(null);
        
        newSidebarInfo = {
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
          type: 'erodibility',
          erodibilityValue: feature.properties?.erodibility || 0
        };
      }
      
      if (newSidebarInfo) {
        setSidebarInfo(newSidebarInfo);
        setSidebarOpen(true);
      }
    } else {
      // Clear selection when clicking on empty map area
      setSelectedCensusTractId(null);
    }
  }, [centroidLocations]);
  
  // Handle elevation change
  const handleElevationChange = useCallback((elevation: number) => {
    setSelectedElevation(elevation);
    if (onElevationChange) {
      onElevationChange(elevation);
    }
  }, [onElevationChange]);
  
  // Handle lake level change
  const handleLakeLevelChange = useCallback((level: number) => {
    const nearestLevel = AVAILABLE_LAKE_LEVELS.reduce((prev, curr) => 
      Math.abs(curr - level) < Math.abs(prev - level) ? curr : prev
    );
    setSelectedLakeLevel(nearestLevel);
    setSelectedElevation(nearestLevel);
    if (onElevationChange) {
      onElevationChange(nearestLevel);
    }
  }, [onElevationChange]);
  
  const initialViewState = {
    longitude: -112.3297,
    latitude: 40.9121,
    zoom: 8
  };

  return (
    <MapWrapper>
      <MapArea $sidebarOpen={sidebarOpen}>
        <Map
          ref={mapRef}
          {...viewState}
          onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
          mapStyle={MAPBOX_CONFIG.styleUrl}
          mapboxAccessToken={MAPBOX_TOKEN}
          minZoom={8}
          onLoad={onMapLoadHandler}
          onClick={handleMapClick}
          interactiveLayerIds={[
            layers.pm25Data ? 'pm25-point-layer' : null,
            layers.bathymetry ? 'bathymetry-point-layer' : null,
            layers.censusTracts ? 'census-tracts-all-fill' : null,
            layers.censusTracts ? 'census-tracts-outline' : null,
            layers.erodibility ? 'erodibility-fill' : null,
            layers.erodibility ? 'erodibility-shadow' : null,
            layers.erodibility ? 'erodibility-feather' : null,
          ].filter(Boolean) as string[]}
        >
          <NavigationControl position="bottom-left" />
          
          {/* Lake Level Control (bottom left) */}
          <LakeLevelControl
            selectedLevel={selectedLakeLevel}
            onLevelChange={handleLakeLevelChange}
          />
          
          {/* Minimized/Expanded controls (top right) */}
          <MinimizedControls 
            onClick={() => setControlsExpanded(!controlsExpanded)}
            $expanded={controlsExpanded}
          >
            <Layers size={18} />
            Map Layers
            <ChevronRight size={16} />
          </MinimizedControls>
          
          {controlsExpanded && (
            <ExpandedControls>
              <CloseButton onClick={() => setControlsExpanded(false)}>
                <X size={16} />
              </CloseButton>
              <h3>DATA LAYERS</h3>
              
              <LayerToggle>
                <input
                  type="checkbox"
                  checked={layers.censusTracts}
                  onChange={() => toggleLayer('censusTracts')}
                />
                Census Tracts
              </LayerToggle>
              
              <LayerToggle>
                <input
                  type="checkbox"
                  checked={layers.bathymetry}
                  onChange={() => toggleLayer('bathymetry')}
                />
                Lake Bathymetry
              </LayerToggle>
              
              <LayerToggle>
                <input
                  type="checkbox"
                  checked={layers.erodibility}
                  onChange={() => toggleLayer('erodibility')}
                />
                Soil Erodibility
              </LayerToggle>
              
              <LayerToggle>
                <input
                  type="checkbox"
                  checked={layers.pm25Data}
                  onChange={() => toggleLayer('pm25Data')}
                />
                PM2.5 Concentrations
              </LayerToggle>
              
              <LayerToggle>
                <input
                  type="checkbox"
                  checked={layers.satellite}
                  onChange={() => toggleLayer('satellite')}
                />
                Satellite Imagery
              </LayerToggle>
            </ExpandedControls>
          )}
          
          {/* Map layers */}
          {mapStyleLoaded && (
            <MapLayers
              layers={layers}
              selectedElevation={selectedElevation}
              averagedPM25Data={averagedPM25Data}
              centroidLocations={centroidLocations}
              loading={loading}
              getPM25Points={getPM25Points}
              selectedCensusTractId={selectedCensusTractId}
            />
          )}
          
          {/* Help button */}
          <HelpButton onClick={onBackToIntro}>
            <HelpCircle size={24} />
          </HelpButton>
        </Map>
      </MapArea>
      
      {/* Info sidebar (right side) */}
      <InfoSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        popupInfo={sidebarInfo}
        centroidLocations={centroidLocations}
        averagedPM25Data={averagedPM25Data}
        dustContributions={dustContributions}
        lakeLevel={selectedLakeLevel}
        pm25Data={pm25Data}
        selectedTimestampIndex={selectedTimestampIndex}
      />
    </MapWrapper>
  );
}

export default DustMap;