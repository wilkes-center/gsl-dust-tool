import { useState, useEffect } from 'react';

export interface CentroidLocation {
  centroid_name: string;
  lon: number;
  lat: number;
  geoid?: string; // GEOID for the census tract this centroid belongs to
}

export interface PM10Data {
  timestamp: string;
  [key: string]: number | string; // For each centroid
}

export interface BathymetryPoint {
  longitude: number;
  latitude: number;
  elevation: number;
}

/**
 * Parse the centroid locations CSV including GEOID from tracts data
 */
export async function getCentroidLocations(): Promise<CentroidLocation[]> {
  try {
    // Load from public directory to avoid Vite's asset handling
    const filepath = `${import.meta.env.BASE_URL}assets/points_with_tracts.csv?v=${Date.now()}`;
    console.log(`Loading centroid locations from: ${filepath}`);
    
    const response = await fetch(filepath, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch centroid locations: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    console.log('First few lines of loaded data:', text.split('\n').slice(0, 5).join('\n'));
    
    // Parse CSV
    const lines = text.split('\n');
    
    const centroidLocations: CentroidLocation[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      
      const values = lines[i].split(',').map(v => v.replace(/"/g, ''));
      // Process GEOID to handle potential format differences
      const geoid = normalizeGeoid(values[3].trim());
      
      centroidLocations.push({
        centroid_name: values[0],
        lon: parseFloat(values[1]),
        lat: parseFloat(values[2]),
        geoid: geoid, // Add the normalized GEOID
      });
    }
    
    // Log specific centroid for debugging
    const centroid503 = centroidLocations.find(c => c.centroid_name === 'centroid_503');
    if (centroid503) {
      console.log('Centroid 503 data:', centroid503);
    }
    
    return centroidLocations;
  } catch (error) {
    console.error('Error loading centroid locations with tract data:', error);
    return [];
  }
}

/**
 * Load PM10 data for a specific lake level
 */
export async function getPM10Data(lakeLevel: number): Promise<PM10Data[]> {
  try {
    // Use BASE_URL to ensure paths work correctly in production
    const filepath = `${import.meta.env.BASE_URL}src/assets/gsl_${lakeLevel.toFixed(1)}_mASL_centroid_results.csv`;
    console.log(`Attempting to load PM10 data from: ${filepath}`);
    
    const response = await fetch(filepath);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch PM10 data: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    
    // Check if we have valid data
    if (!text || text.trim().length === 0) {
      console.error(`Empty or invalid PM10 data file for lake level ${lakeLevel}`);
      return [];
    }
    
    // Parse CSV
    const lines = text.split('\n');
    
    if (lines.length <= 1) {
      console.error(`PM10 data file for lake level ${lakeLevel} has insufficient data`);
      return [];
    }
    
    const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
    
    const pm10Data: PM10Data[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      
      const values = lines[i].split(',').map(v => v.replace(/"/g, ''));
      const dataPoint: PM10Data = {
        timestamp: values[0],
      };
      
      // Add all centroid values
      for (let j = 1; j < headers.length; j++) {
        dataPoint[headers[j]] = parseFloat(values[j]);
      }
      
      pm10Data.push(dataPoint);
    }
    
    console.log(`Successfully loaded ${pm10Data.length} PM10 data points for lake level ${lakeLevel}`);
    return pm10Data;
  } catch (error) {
    console.error(`Error loading PM10 data for lake level ${lakeLevel}:`, error);
    return [];
  }
}

/**
 * Custom hook to get PM10 data for a specific lake level
 */
export function usePM10Data(lakeLevel: number) {
  const [centroidLocations, setCentroidLocations] = useState<CentroidLocation[]>([]);
  const [pm10Data, setPM10Data] = useState<PM10Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  
  useEffect(() => {
    let isMounted = true;
    const maxRetries = 2;
    
    async function loadData() {
      setLoading(true);
      setError(null);
      
      try {
        // Load centroid locations first
        const locations = await getCentroidLocations();
        
        if (!isMounted) return;
        
        // Check if we have valid centroid locations
        if (locations.length === 0) {
          throw new Error('Failed to load centroid locations');
        }
        
        setCentroidLocations(locations);
        
        // Then load PM10 data for the selected lake level
        const data = await getPM10Data(lakeLevel);
        
        if (!isMounted) return;
        
        if (data.length === 0) {
          throw new Error(`No PM10 data available for lake level ${lakeLevel}`);
        }
        
        setPM10Data(data);
        setLoading(false);
        setRetryCount(0); // Reset retry count on success
      } catch (err) {
        if (!isMounted) return;
        
        const errorMessage = err instanceof Error ? err.message : 'Failed to load PM10 data';
        console.error(errorMessage);
        
        // Only retry a limited number of times
        if (retryCount < maxRetries) {
          console.log(`Retrying PM10 data load (attempt ${retryCount + 1}/${maxRetries})`);
          setRetryCount(prev => prev + 1);
          
          // Wait briefly before retrying
          setTimeout(() => {
            if (isMounted) loadData();
          }, 1000);
        } else {
          setError(errorMessage);
          setLoading(false);
        }
      }
    }
    
    loadData();
    
    return () => {
      isMounted = false;
    };
  }, [lakeLevel, retryCount]);
  
  return { centroidLocations, pm10Data, loading, error };
}

/**
 * Convert meters to feet
 */
export function metersToFeet(meters: number): number {
  return meters * 3.28084;
}

/**
 * Get available lake levels based on file naming pattern
 */
export const AVAILABLE_LAKE_LEVELS = [1275.0, 1276.0, 1277.0, 1278.0, 1279.0, 1280.0, 1281.0, 1282.0];

/**
 * Get PM10 color based on value
 */
export function getPM10Color(value: number): string {
  if (value < 5) return '#7cbf6f';      // Muted green (low PM10)
  if (value < 10) return '#e8db5b';     // Muted yellow (moderate PM10)
  if (value < 15) return '#e8a64d';     // Muted orange (high PM10)
  if (value < 20) return '#d46457';     // Muted red (very high PM10)
  return '#a63c3c';                     // Deeper red (extremely high PM10)
}

/**
 * Generate a color based on a string hash (for census tracts)
 * This ensures each tract gets a unique but consistent color
 */
export function getHashColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Use HSL to get nicely distributed colors with controlled saturation and lightness
  const h = Math.abs(hash) % 360; // Hue (0-360)
  const s = 70; // Saturation (0-100)
  const l = 60; // Lightness (0-100)
  
  return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Format a GEOID to ensure consistent matching between different sources
 * This handles potential differences in formatting (leading zeros, etc.)
 */
export function normalizeGeoid(geoid: string | undefined | null): string {
  if (!geoid) return '';
  
  // Remove any whitespace and non-numeric characters
  const cleanedGeoid = geoid.replace(/\D/g, '');
  
  // Ensure it's consistent by returning at most 11 digits (GEOID20 format)
  return cleanedGeoid.slice(-11);
}

/**
 * Generate a shoreline polygon for a specific elevation
 * This creates a polygon that approximates the lake's shoreline at a given elevation
 */
export function generateShoreline(bathymetryData: BathymetryPoint[], elevation: number): GeoJSON.Feature {
  // Filter points at or below the specified elevation
  const pointsUnderwater = bathymetryData.filter(point => point.elevation <= elevation);
  
  if (pointsUnderwater.length === 0) {
    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[]] // Empty polygon if no points underwater
      }
    };
  }
  
  // Create a basic convex hull around all underwater points to approximate the shoreline
  // This is a simplified approach - in a real app, you'd use a more sophisticated algorithm
  // or have actual shoreline data for each elevation
  
  // First, find the center point
  const center = pointsUnderwater.reduce(
    (acc, point) => {
      acc.longitude += point.longitude;
      acc.latitude += point.latitude;
      return acc;
    },
    { longitude: 0, latitude: 0 }
  );
  
  center.longitude /= pointsUnderwater.length;
  center.latitude /= pointsUnderwater.length;
  
  // Sort points by angle from center
  const sortedPoints = [...pointsUnderwater].sort((a, b) => {
    const angleA = Math.atan2(a.latitude - center.latitude, a.longitude - center.longitude);
    const angleB = Math.atan2(b.latitude - center.latitude, b.longitude - center.longitude);
    return angleA - angleB;
  });
  
  // Take a subset of points to form the polygon (for performance)
  const numPoints = Math.min(sortedPoints.length, 100);
  const step = Math.max(1, Math.floor(sortedPoints.length / numPoints));
  
  const coordinates = [];
  for (let i = 0; i < sortedPoints.length; i += step) {
    coordinates.push([sortedPoints[i].longitude, sortedPoints[i].latitude]);
  }
  
  // Close the polygon
  if (coordinates.length > 0) {
    coordinates.push(coordinates[0]);
  }
  
  return {
    type: 'Feature',
    properties: {
      elevation
    },
    geometry: {
      type: 'Polygon',
      coordinates: [coordinates]
    }
  };
}