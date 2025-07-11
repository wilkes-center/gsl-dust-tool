// Map configuration constants
export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';
export const MAPBOX_CONFIG = { styleUrl: 'mapbox://styles/pkulandh/cm9iyi6qq00jo01rce7xjcfay' };

// Import available lake levels from dataUtils
import { AVAILABLE_LAKE_LEVELS, getPM25Color, metersToFeet } from '../../utils/dataUtils';
export { AVAILABLE_LAKE_LEVELS, getPM25Color, metersToFeet };

// Bathymetry color scale for different elevations
export const BATHYMETRY_COLORS: Record<number, string> = {
  1271: '#051b35', // Darkest navy blue (deepest)
  1272: '#072a4f',
  1273: '#093969',
  1274: '#0b4883',
  1275: '#0d579d',
  1276: '#0f66b7',
  1277: '#1175d1',
  1278: '#1384eb',
  1279: '#1593d6', // Slight teal tone
  1280: '#17a2c1', // Mid-depth teal
  1281: '#19b1ac', // Light teal
  1282: '#1bc0f7'  // Lightest cerulean blue (shallowest)
};

// Helper for erodibility color mapping
export const getErodibilityColor = (value: number): string => {
  if (value <= 0.3) return '#ff6666'; // Light red
  if (value <= 0.6) return '#ff3333'; // Medium red
  if (value <= 0.94) return '#cc0000'; // Dark red
  return '#800000'; // Very dark red (maroon)
}; 