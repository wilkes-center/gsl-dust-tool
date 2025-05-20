import { Source, Layer } from 'react-map-gl';
import { MapLayers, PM10Point } from './types';
import { getPM10Color } from './constants';

interface MapLayersProps {
  layers: MapLayers;
  selectedElevation: number;
  selectedTimestampIndex: number;
  pm10Data: any[];
  centroidLocations: any[];
  getPM10Points: () => PM10Point[];
  loading: boolean;
}

export function MapLayersComponent({
  layers,
  selectedElevation,
  selectedTimestampIndex,
  pm10Data,
  centroidLocations,
  getPM10Points,
  loading
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
          {/* PM10 colored census tracts */}
          <Layer
            id="census-tracts-all-fill"
            type="fill"
            source-layer="UT_CensusTracts-cgq3a0"
            paint={{
              'fill-color': [
                'match',
                ['get', 'GEOID20'],
                // Create a match for each GEOID to its corresponding PM10 color
                ...((() => {
                  // Create an object to store unique GEOID -> color mappings
                  const geoidColorMap: Record<string, string> = {};
                  
                  // Populate the map with the latest color for each GEOID if PM10 data is available
                  if (!loading && pm10Data && pm10Data.length > 0 && selectedTimestampIndex < pm10Data.length) {
                    centroidLocations
                      .filter(c => c.geoid)
                      .forEach(centroid => {
                        if (centroid.geoid) {
                          const currentTimestampData = pm10Data[selectedTimestampIndex];
                          const pm10Value = currentTimestampData[centroid.centroid_name] as number;
                          const color = getPM10Color(pm10Value);
                          geoidColorMap[centroid.geoid] = color;
                        }
                      });
                  }
                  
                  // Convert the object entries to a flat array of [geoid, color] pairs
                  return Object.entries(geoidColorMap).flatMap(([geoid, color]) => 
                    [geoid, color]
                  );
                })()),
                'rgba(200,200,200,0.3)' // Light gray for tracts without PM10 data
              ],
              'fill-opacity': 0.7
            }}
          />
          
          <Layer
            id="census-tracts-outline"
            type="line"
            source-layer="UT_CensusTracts-cgq3a0"
            paint={{
              'line-color': '#000000',
              'line-width': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                2,
                1
              ],
              'line-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0.7
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
      
      {/* PM10 Data Points */}
      {layers.pm10Data && !loading && (
        <Source
          id="pm10-data-source"
          type="geojson"
          data={{
            type: 'FeatureCollection',
            features: getPM10Points().map(point => ({
              type: 'Feature',
              properties: {
                centroid_name: point.centroid_name,
                pm10: point.pm10,
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
            id="pm10-point-layer"
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
                  const points = getPM10Points();
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
              'fill-opacity': 0.2,
              'fill-translate': [3, 3],
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
                0, '#ffffd4',
                0.1, '#ffeda0',
                0.3, '#feb24c',
                0.6, '#fc4e2a',
                0.94, '#bd0026',
                1.0, '#800026'
              ],
              'fill-opacity': 0.3,
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
                0, '#ffffd4',
                0.1, '#ffeda0',
                0.3, '#feb24c',
                0.6, '#fc4e2a',
                0.94, '#bd0026',
                1.0, '#800026'
              ],
              'fill-opacity': 0.7,
              'fill-translate': [1, 1],
              'fill-translate-anchor': 'viewport',
              'fill-antialias': true
            }}
          />
          <Layer
            id="erodibility-outline"
            type="line"
            source-layer="GSL_erodibility_fraction-5bzz8s"
            filter={['>', ['get', 'erodibility'], 0.2]}
            paint={{
              'line-color': '#000000',
              'line-width': 0.5,
              'line-opacity': 0.5,
              'line-blur': 0.5
            }}
          />
        </Source>
      )}
    </>
  );
} 