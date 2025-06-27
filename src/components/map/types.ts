import { LayerProps } from 'react-map-gl';

// Popup info type definitions
export type PopupInfo =
  | { longitude: number; latitude: number; type: 'bathymetry'; depth: number; }
  | { longitude: number; latitude: number; type: 'censusTract'; INTPTLAT20: string; INTPTLON20: string; GEOID20: string; hasPM25Data: boolean; }
  | { longitude: number; latitude: number; type: 'pm25'; centroidName: string; pm25Value: number; geoid?: string; }
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
  pm25Data: boolean;
  erodibility: boolean;
}

// Bathymetry layer props
export interface BathymetryLayerProps {
  selectedElevation: number;
  getBathymetryLayer: () => LayerProps;
}

// PM₂.₅ point for rendering
export interface PM25Point {
  centroid_name: string;
  longitude: number;
  latitude: number;
  geoid?: string;
  pm25: number;
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
  pm25Data: any[];
  loading: boolean;
  error: any;
  selectedCensusTractId?: string | null;
} 