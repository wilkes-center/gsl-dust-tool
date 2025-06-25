import { Source, Layer } from 'react-map-gl';
import type { MapLayers as MapLayersType, PM25Point } from './types';
import { getAggregatedPM25Color } from '../../utils/dataUtils';
import theme from '../../styles/theme';

interface MapLayersProps {
  layers: MapLayersType;
  selectedElevation: number;
  centroidLocations: any[];
  loading: boolean;
  averagedPM25Data: Record<string, number>;
  onErodibilityToggle?: () => void;
  getPM25Points: () => PM25Point[];
  selectedCensusTractId?: string | null;
}

export function MapLayers({
  layers,
  selectedElevation,
  centroidLocations,
  loading,
  averagedPM25Data,
  onErodibilityToggle,
  getPM25Points,
  selectedCensusTractId,
}: MapLayersProps) {
  return (
    <>
      {/* Census Tracts Layer - Now rendered first (bottom layer) */}
      {layers.censusTracts && (
        <Source
          id="census-tracts-source"
          type="vector"
          url="mapbox://pkulandh.7y35kkod"
        >
          {/* PM2.5 colored census tracts */}
          <Layer
            id="census-tracts-all-fill"
            type="fill"
            source-layer="UT_CensusTracts-cgq3a0"
            paint={{
              'fill-color': [
                'case',
                ['==', ['get', 'GEOID20'], selectedCensusTractId || ''],
                theme.colors.greatSaltLakeGreen, // Green fill for selected tract
                [
                  'match',
                  ['get', 'GEOID20'],
                  // Create a match for each GEOID to its corresponding PM2.5 color
                  ...((() => {
                    // Create an object to store unique GEOID -> color mappings
                    const geoidColorMap: Record<string, string> = {};
                    
                    // Populate the map with the latest color for each GEOID if PM2.5 data is available
                    if (!loading && averagedPM25Data && Object.keys(averagedPM25Data).length > 0) {
                      centroidLocations
                        .filter(c => c.geoid)
                        .forEach(centroid => {
                          if (centroid.geoid) {
                            const pm25Value = averagedPM25Data[centroid.centroid_name] || 0;
                            const color = getAggregatedPM25Color(pm25Value);
                            geoidColorMap[centroid.geoid] = color;
                          }
                        });
                    }
                    
                    // Convert the object entries to a flat array of [geoid, color] pairs
                    return Object.entries(geoidColorMap).flatMap(([geoid, color]) => 
                      [geoid, color]
                    );
                  })()),
                  'rgba(200,200,200,0.3)' // Light gray for tracts without PM2.5 data
                ]
              ],
              'fill-opacity': [
                'case',
                ['==', ['get', 'GEOID20'], selectedCensusTractId || ''],
                0.8, // Higher opacity for selected tract
                0.7  // Default opacity for non-selected tracts
              ]
            }}
          />
          
          <Layer
            id="census-tracts-outline"
            type="line"
            source-layer="UT_CensusTracts-cgq3a0"
            paint={{
              'line-color': [
                'case',
                ['==', ['get', 'GEOID20'], selectedCensusTractId || ''],
                theme.colors.greatSaltLakeGreen, // Green highlight for selected tract
                '#000000'  // Default black for non-selected tracts
              ],
              'line-width': [
                'case',
                ['==', ['get', 'GEOID20'], selectedCensusTractId || ''],
                4, // Thicker border for selected tract
                [
                  'case',
                  ['boolean', ['feature-state', 'hover'], false],
                  2,
                  1
                ]
              ],
              'line-opacity': [
                'case',
                ['==', ['get', 'GEOID20'], selectedCensusTractId || ''],
                1, // Full opacity for selected tract
                [
                  'case',
                  ['boolean', ['feature-state', 'hover'], false],
                  1,
                  0.7
                ]
              ]
            }}
          />
        </Source>
      )}
      
      {/* Bathymetry Layer - Now rendered second (middle layer) */}
      {layers.bathymetry && (
        <Source
          id="bathymetry-points-source"
          type="vector"
          url="mapbox://pkulandh.4mg8eo41"
        >
          {/* Water texture overlay */}
          <Layer
            id="water-texture-layer"
            type="fill"
            source="bathymetry-points-source"
            source-layer="bathymetry-df7t51"
            beforeId="bathymetry-point-layer"
            paint={{
              'fill-pattern': 'water-noise',
              'fill-opacity': 0.07
            }}
          />

          <Layer 
            id="bathymetry-point-layer"
            type="circle"
            source-layer="bathymetry-df7t51"
            paint={{
              'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                6, [
                  'case',
                  ['==', ['get', 'bathymetry'], selectedElevation], 6,
                  3
                ],
                12, [
                  'case',
                  ['==', ['get', 'bathymetry'], selectedElevation], 10,
                  5
                ]
              ],
              'circle-color': [
                'case',
                ['>', ['get', 'bathymetry'], 1282], 'transparent',
                ['all', 
                  ['>=', ['get', 'bathymetry'], selectedElevation],
                  ['<=', ['get', 'bathymetry'], 1282]
                ], '#444444',
                [
                  'match',
                  ['floor', ['get', 'bathymetry']],
                  1271, '#051e40', // Darkest blue (deepest)
                  1272, '#072c5e',
                  1273, '#093a7c',
                  1274, '#0b489a',
                  1275, '#0d56b8',
                  1276, '#0f64d6',
                  1277, '#1172f4',
                  1278, '#3286f5',
                  1279, '#539af7',
                  1280, '#74aef8',
                  1281, '#95c2fa',
                  1282, '#b6d6fb', // Lightest blue (shallowest)
                  '#FF00FF'
                ]
              ],
              'circle-opacity': [
                'case',
                ['==', ['get', 'bathymetry'], selectedElevation], 1.0,
                0.8
              ],
              'circle-stroke-width': [
                'case',
                ['==', ['get', 'bathymetry'], selectedElevation], 2,
                0
              ],
              'circle-stroke-color': '#ffffff'
            }}
          />
        </Source>
      )}
      
      {/* PM2.5 Data Points */}
      {layers.pm25Data && !loading && (
        <Source
          id="pm25-data-source"
          type="geojson"
          data={{
            type: 'FeatureCollection',
            features: getPM25Points().map(point => ({
              type: 'Feature',
              properties: {
                centroid_name: point.centroid_name,
                pm25: point.pm25,
                geoid: point.geoid
              },
              geometry: {
                type: 'Point',
                coordinates: [point.longitude, point.latitude]
              }
            }))
          }}
        >
          <Layer
            id="pm25-point-layer"
            type="circle"
            paint={{
              'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                6, 3,
                12, 6
              ],
              'circle-color': [
                'match',
                ['get', 'centroid_name'],
                // Create a match for each centroid to its color
                ...((() => {
                  // Get uniquely identified centroids
                  const points = getPM25Points();
                  const centroidColorMap: Record<string, string> = {};
                  
                  // Store unique centroid -> color mappings
                  points.forEach(point => {
                    centroidColorMap[point.centroid_name] = point.color;
                  });
                  
                  // Convert to flat array for the match expression
                  return Object.entries(centroidColorMap).flatMap(([name, color]) => 
                    [name, color]
                  );
                })()),
                '#aaaaaa' // Default fallback color
              ],
              'circle-opacity': 0.8,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#ffffff'
            }}
          />
        </Source>
      )}
      
      {/* Erodibility Layer - Rendered last (top layer) */}
      {layers.erodibility && (
        <Source
          id="erodibility-source"
          type="vector"
          url="mapbox://pkulandh.ai74bdtb"
        >
          <Layer
            id="erodibility-shadow"
            type="fill"
            source-layer="GSL_erodibility_fraction-5bzz8s"
            filter={['>', ['get', 'erodibility'], 0.2]}
            paint={{
              'fill-color': '#000000',
              'fill-opacity': 0.1,
              'fill-translate': [2, 2],
              'fill-translate-anchor': 'viewport'
            }}
          />
          <Layer
            id="erodibility-feather"
            type="fill"
            source-layer="GSL_erodibility_fraction-5bzz8s"
            filter={['>', ['get', 'erodibility'], 0.2]}
            paint={{
              'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'erodibility'],
                0, '#ffcccb',
                0.1, '#ff9999',
                0.3, '#ff6666',
                0.6, '#ff3333',
                0.94, '#cc0000',
                1.0, '#800000'
              ],
              'fill-opacity': 0.2,
              'fill-translate': [0, 0],
              'fill-translate-anchor': 'viewport'
            }}
          />
          <Layer
            id="erodibility-fill"
            type="fill"
            source-layer="GSL_erodibility_fraction-5bzz8s"
            filter={['>', ['get', 'erodibility'], 0.2]}
            paint={{
              'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'erodibility'],
                0, '#ffcccb',
                0.1, '#ff9999',
                0.3, '#ff6666',
                0.6, '#ff3333',
                0.94, '#cc0000',
                1.0, '#800000'
              ],
              'fill-opacity': 0.5,
              'fill-translate': [0.5, 0.5],
              'fill-translate-anchor': 'viewport',
              'fill-antialias': true
            }}
          />
        </Source>
      )}
    </>
  );
} 