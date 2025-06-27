import { useState, useEffect } from 'react';
import Papa from 'papaparse';

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

export interface PM25Data {
  timestamp: string;
  [key: string]: number | string; // For each centroid
}

export interface BathymetryPoint {
  longitude: number;
  latitude: number;
  elevation: number;
}

export interface DustContribution {
  centroid: string;
  centroid_name: string;
  GSL: number;
  Misc: number;
  SevierLake: number;
  TooleLake: number;
  WestDesert: number;
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
 * Load PM₁₀ data for a specific lake level
 */
export async function getPM10Data(lakeLevel: number): Promise<PM10Data[]> {
  try {
    // Use BASE_URL to ensure paths work correctly in production
    const filepath = `${import.meta.env.BASE_URL}assets/gsl_${lakeLevel.toFixed(1)}_mASL_centroid_results.csv`;
    console.log(`Attempting to load PM₁₀ data from: ${filepath}`);
    
    const response = await fetch(filepath);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch PM₁₀ data: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    
    // Check if we have valid data
    if (!text || text.trim().length === 0) {
      console.error(`Empty or invalid PM₁₀ data file for lake level ${lakeLevel}`);
      return [];
    }
    
    // Parse CSV
    const lines = text.split('\n');
    
    if (lines.length <= 1) {
      console.error(`PM₁₀ data file for lake level ${lakeLevel} has insufficient data`);
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
    
    console.log(`Successfully loaded ${pm10Data.length} PM₁₀ data points for lake level ${lakeLevel}`);
    return pm10Data;
  } catch (error) {
    console.error(`Error loading PM₁₀ data for lake level ${lakeLevel}:`, error);
    return [];
  }
}

/**
 * Load PM₂.₅ data for a specific lake level
 */
export async function getPM25Data(lakeLevel: number): Promise<PM25Data[]> {
  try {
    // Use BASE_URL to ensure paths work correctly in production
    const filepath = `${import.meta.env.BASE_URL}assets/gsl_${lakeLevel.toFixed(1)}_mASL_centroid_results.csv`;
    console.log(`Attempting to load PM₂.₅ data from: ${filepath}`);
    
    const response = await fetch(filepath);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch PM₂.₅ data: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    
    // Check if we have valid data
    if (!text || text.trim().length === 0) {
      console.error(`Empty or invalid PM₂.₅ data file for lake level ${lakeLevel}`);
      return [];
    }
    
    // Parse CSV
    const lines = text.split('\n');
    
    if (lines.length <= 1) {
      console.error(`PM₂.₅ data file for lake level ${lakeLevel} has insufficient data`);
      return [];
    }
    
    const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
    
    const pm25Data: PM25Data[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      
      const values = lines[i].split(',').map(v => v.replace(/"/g, ''));
      const dataPoint: PM25Data = {
        timestamp: values[0],
      };
      
      // Add all centroid values
      for (let j = 1; j < headers.length; j++) {
        dataPoint[headers[j]] = parseFloat(values[j]);
      }
      
      pm25Data.push(dataPoint);
    }
    
    console.log(`Successfully loaded ${pm25Data.length} PM₂.₅ data points for lake level ${lakeLevel}`);
    return pm25Data;
  } catch (error) {
    console.error(`Error loading PM₂.₅ data for lake level ${lakeLevel}:`, error);
    return [];
  }
}

/**
 * Custom hook to get PM₁₀ data for a specific lake level
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
        
        // Then load PM₁₀ data for the selected lake level
        const data = await getPM10Data(lakeLevel);
        
        if (!isMounted) return;
        
        if (data.length === 0) {
          throw new Error(`No PM₁₀ data available for lake level ${lakeLevel}`);
        }
        
        setPM10Data(data);
        setLoading(false);
        setRetryCount(0); // Reset retry count on success
      } catch (err) {
        if (!isMounted) return;
        
        const errorMessage = err instanceof Error ? err.message : 'Failed to load PM₁₀ data';
        console.error(errorMessage);
        
        // Only retry a limited number of times
        if (retryCount < maxRetries) {
          console.log(`Retrying PM₁₀ data load (attempt ${retryCount + 1}/${maxRetries})`);
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
 * Custom hook to get PM₂.₅ data for a specific lake level
 */
export function usePM25Data(lakeLevel: number) {
  const [centroidLocations, setCentroidLocations] = useState<CentroidLocation[]>([]);
  const [pm25Data, setPM25Data] = useState<PM25Data[]>([]);
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
        
        // Then load PM₂.₅ data for the selected lake level
        const data = await getPM25Data(lakeLevel);
        
        if (!isMounted) return;
        
        if (data.length === 0) {
          throw new Error(`No PM₂.₅ data available for lake level ${lakeLevel}`);
        }
        
        setPM25Data(data);
        setLoading(false);
        setRetryCount(0); // Reset retry count on success
      } catch (err) {
        if (!isMounted) return;
        
        const errorMessage = err instanceof Error ? err.message : 'Failed to load PM₂.₅ data';
        console.error(errorMessage);
        
        // Only retry a limited number of times
        if (retryCount < maxRetries) {
          console.log(`Retrying PM₂.₅ data load (attempt ${retryCount + 1}/${maxRetries})`);
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
  
  return { centroidLocations, pm25Data, loading, error };
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
 * Get PM₁₀ color based on value
 */
export function getPM10Color(value: number): string {
  if (value < 5) return '#f7f2e9';      // Warm off-white (low PM₁₀)
  if (value < 10) return '#e8dcc6';     // Light coffee with cream (moderate PM₁₀)
  if (value < 15) return '#d6c5a2';     // Café au lait (high PM₁₀)
  if (value < 20) return '#c4a373';     // Medium coffee (very high PM₁₀)
  return '#a0784a';                     // Dark coffee (extremely high PM₁₀)
}

/**
 * Get PM₂.₅ color based on value
 */
export function getPM25Color(value: number): string {
  if (value < 5) return '#f7f2e9';      // Warm off-white (low PM₂.₅)
  if (value < 10) return '#e8dcc6';     // Light coffee with cream (moderate PM₂.₅)
  if (value < 15) return '#d6c5a2';     // Café au lait (high PM₂.₅)
  if (value < 20) return '#c4a373';     // Medium coffee (very high PM₂.₅)
  return '#a0784a';                     // Dark coffee (extremely high PM₂.₅)
}

/**
 * Get color for averaged PM₁₀ values (averaged across all timestamps)
 * Uses the same color scale as individual PM₁₀ values
 */
export function getAggregatedPM10Color(value: number): string {
  if (value < 5) return '#f7f2e9';      // Warm off-white (low averaged PM₁₀)
  if (value < 10) return '#e8dcc6';     // Light coffee with cream (moderate averaged PM₁₀)
  if (value < 15) return '#d6c5a2';     // Café au lait (high averaged PM₁₀)
  if (value < 20) return '#c4a373';     // Medium coffee (very high averaged PM₁₀)
  return '#a0784a';                     // Dark coffee (extremely high averaged PM₁₀)
}

/**
 * Get color for averaged PM₂.₅ values (averaged across all timestamps)
 * Uses the same color scale as individual PM₂.₅ values
 */
export function getAggregatedPM25Color(value: number): string {
  if (value < 5) return '#f7f2e9';      // Warm off-white (low averaged PM₂.₅)
  if (value < 10) return '#e8dcc6';     // Light coffee with cream (moderate averaged PM₂.₅)
  if (value < 15) return '#d6c5a2';     // Café au lait (high averaged PM₂.₅)
  if (value < 20) return '#c4a373';     // Medium coffee (very high averaged PM₂.₅)
  return '#a0784a';                     // Dark coffee (extremely high averaged PM₂.₅)
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

/**
 * Calculate average PM₁₀ data across all timestamps for each centroid
 * Returns a single data point with averaged values for each centroid
 */
export function averagePM10Data(pm10Data: PM10Data[]): Record<string, number> {
  const aggregated: Record<string, { sum: number; count: number }> = {};
  
  pm10Data.forEach(dataPoint => {
    Object.keys(dataPoint).forEach(key => {
      if (key !== 'timestamp') {
        const value = dataPoint[key];
        if (typeof value === 'number' && !isNaN(value)) {
          if (!aggregated[key]) {
            aggregated[key] = { sum: 0, count: 0 };
          }
          aggregated[key].sum += value;
          aggregated[key].count += 1;
        }
      }
    });
  });
  
  const averages: Record<string, number> = {};
  Object.keys(aggregated).forEach(key => {
    averages[key] = aggregated[key].sum / aggregated[key].count;
  });
  
  return averages;
}

export const aggregatePM10Data = averagePM10Data;

/**
 * Load PM₁₀ data for all lake levels for a specific centroid
 * Returns an array of {lakeLevel, pm10Value} objects
 */
export async function getPM10DataForAllLakeLevels(centroidName: string): Promise<{lakeLevel: number, pm10Value: number}[]> {
  const results: {lakeLevel: number, pm10Value: number}[] = [];
  
  for (const lakeLevel of AVAILABLE_LAKE_LEVELS) {
    try {
      const pm10Data = await getPM10Data(lakeLevel);
      if (pm10Data && pm10Data.length > 0) {
        // Calculate average PM₁₀ for this centroid across all timestamps
        const aggregated = averagePM10Data(pm10Data);
        const pm10Value = aggregated[centroidName];
        
        if (typeof pm10Value === 'number' && !isNaN(pm10Value)) {
          results.push({
            lakeLevel,
            pm10Value
          });
        }
      }
    } catch (error) {
      console.warn(`Failed to load PM₁₀ data for lake level ${lakeLevel}:`, error);
      // Continue with other lake levels even if one fails
    }
  }
  
  return results.sort((a, b) => a.lakeLevel - b.lakeLevel);
}

export function averagePM25Data(pm25Data: PM25Data[]): Record<string, number> {
  const aggregated: Record<string, { sum: number; count: number }> = {};
  
  pm25Data.forEach(dataPoint => {
    Object.keys(dataPoint).forEach(key => {
      if (key !== 'timestamp') {
        const value = dataPoint[key];
        if (typeof value === 'number' && !isNaN(value)) {
          if (!aggregated[key]) {
            aggregated[key] = { sum: 0, count: 0 };
          }
          aggregated[key].sum += value;
          aggregated[key].count += 1;
        }
      }
    });
  });
  
  const averages: Record<string, number> = {};
  Object.keys(aggregated).forEach(key => {
    averages[key] = aggregated[key].sum / aggregated[key].count;
  });
  
  return averages;
}

export const aggregatePM25Data = averagePM25Data;

export async function getPM25DataForAllLakeLevels(centroidName: string): Promise<{lakeLevel: number, pm25Value: number}[]> {
  const results: {lakeLevel: number, pm25Value: number}[] = [];
  
  for (const lakeLevel of AVAILABLE_LAKE_LEVELS) {
    try {
      const pm25Data = await getPM25Data(lakeLevel);
      if (pm25Data && pm25Data.length > 0) {
        // Calculate average PM₂.₅ for this centroid across all timestamps
        const aggregated = averagePM25Data(pm25Data);
        const pm25Value = aggregated[centroidName];
        
        if (typeof pm25Value === 'number' && !isNaN(pm25Value)) {
          results.push({
            lakeLevel,
            pm25Value
          });
        }
      }
    } catch (error) {
      console.warn(`Failed to load PM₂.₅ data for lake level ${lakeLevel}:`, error);
      // Continue with other lake levels even if one fails
    }
  }
  
  return results.sort((a, b) => a.lakeLevel - b.lakeLevel);
}

export async function loadDustContributions(lakeLevel: number = 1275): Promise<Record<string, DustContribution>> {
  try {
    console.log(`Loading dust contributions for lake level ${lakeLevel}...`);
    const response = await fetch(`${import.meta.env.BASE_URL}assets/Dust_Contribution_${lakeLevel}.csv?t=${Date.now()}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch dust contributions: ${response.statusText}`);
    }
    
    const csvText = await response.text();
    console.log(`Raw CSV data length: ${csvText.length}`);
    
    const results = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    console.log(`Parsed ${results.data.length} rows`);
    console.log('First few rows:', results.data.slice(0, 3));
    
    if (results.errors.length > 0) {
      console.error('CSV parsing errors:', results.errors);
    }

    const contributions: Record<string, DustContribution> = {};
    
    results.data.forEach((row: any, index: number) => {
      try {
        // Handle both formats: with and without index column
        let centroid, centroid_name, GSL, Misc, SevierLake, TooleLake, WestDesert;
        
        // Check if the first column is numeric (index column)
        const firstKey = Object.keys(row)[0];
        const hasIndexColumn = !isNaN(Number(row[firstKey])) && firstKey !== 'centroid';
        
        if (hasIndexColumn) {
          // Format with index column: ,centroid,centroid_name,GSL,Misc,SevierLake,TooleLake,WestDesert
          centroid = row.centroid;
          centroid_name = row.centroid_name;
          GSL = row.GSL;
          Misc = row.Misc;
          SevierLake = row.SevierLake;
          TooleLake = row.TooleLake;
          WestDesert = row.WestDesert;
        } else {
          // Format without index column: centroid,centroid_name,GSL,Misc,SevierLake,TooleLake,WestDesert
          centroid = row.centroid;
          centroid_name = row.centroid_name;
          GSL = row.GSL;
          Misc = row.Misc;
          SevierLake = row.SevierLake;
          TooleLake = row.TooleLake;
          WestDesert = row.WestDesert;
        }

        if (!centroid || !centroid_name || 
            GSL === undefined || Misc === undefined || 
            SevierLake === undefined || TooleLake === undefined || 
            WestDesert === undefined) {
          console.warn(`Skipping row ${index} due to missing data:`, row);
          return;
        }

        const contribution: DustContribution = {
          centroid: String(centroid),
          centroid_name: String(centroid_name),
          GSL: Number(GSL),
          Misc: Number(Misc),
          SevierLake: Number(SevierLake),
          TooleLake: Number(TooleLake),
          WestDesert: Number(WestDesert),
        };

        // Store using centroid_name as the key (this is what MapPopup expects)
        contributions[contribution.centroid_name] = contribution;
      } catch (error) {
        console.error(`Error processing row ${index}:`, error, row);
      }
    });

    console.log(`Successfully loaded ${Object.keys(contributions).length} dust contributions for lake level ${lakeLevel}`);
    console.log('Sample contribution keys:', Object.keys(contributions).slice(0, 5));
    return contributions;
  } catch (error) {
    console.error(`Error loading dust contributions for lake level ${lakeLevel}:`, error);
    return {};
  }
}