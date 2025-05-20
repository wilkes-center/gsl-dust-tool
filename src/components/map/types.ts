import { LayerProps } from 'react-map-gl';

// Popup info type definitions
export type PopupInfo =
  | { longitude: number; latitude: number; type: 'bathymetry'; depth: number; }
  | { longitude: number; latitude: number; type: 'censusTract'; INTPTLAT20: string; INTPTLON20: string; GEOID20: string; hasPM10Data: boolean; }
  | { longitude: number; latitude: number; type: 'pm10'; centroidName: string; pm10Value: number; geoid?: string; }
  | { longitude: number; latitude: number; type: 'erodibility'; erodibilityValue: number; };

// Map view state
export interface MapViewState {
  longitude: number;
  latitude: number;
  zoom: number;
}

// Available map layers
export interface MapLayers {
  satellite: boolean;
  bathymetry: boolean;
  censusTracts: boolean;
  pm10Data: boolean;
  erodibility: boolean;
}

// Bathymetry layer props
export interface BathymetryLayerProps {
  selectedElevation: number;
  getBathymetryLayer: () => LayerProps;
}

// PM10 point for rendering
export interface PM10Point {
  centroid_name: string;
  longitude: number;
  latitude: number;
  geoid?: string;
  pm10: number;
  color: string;
}

// Props for map components
export interface MapComponentProps {
  layers: MapLayers;
  toggleLayer: (layerName: keyof MapLayers) => void;
  selectedLakeLevel: number;
  selectedElevation: number;
  selectedTimestampIndex: number;
  setSelectedTimestampIndex: (index: number) => void;
  centroidLocations: any[];
  pm10Data: any[];
  loading: boolean;
  error: any;
} 