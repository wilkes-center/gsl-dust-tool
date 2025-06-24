import React from 'react';
import { Source, Layer } from 'react-map-gl';
import styled from 'styled-components';

interface MapLayersProps {
  activeMapLayers: string[];
  selectedLakeLevel: number;
  selectedYear: number;
}

/**
 * MapLayers component renders various map layers based on active layers
 */
const MapLayers: React.FC<MapLayersProps> = ({ 
  activeMapLayers, 
  selectedLakeLevel, 
  selectedYear 
}) => {
  // Current lake boundary data
  const lakeCurrentData = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-112.6, 41.2],
        [-112.1, 41.2],
        [-112.1, 40.8],
        [-112.6, 40.8],
        [-112.6, 41.2]
      ]]
    }
  };

  // Historical lake boundary data (larger extent)
  const lakeHistoricalData = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-112.8, 41.4],
        [-111.9, 41.4],
        [-111.9, 40.6],
        [-112.8, 40.6],
        [-112.8, 41.4]
      ]]
    }
  };

  const populationCentersData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-111.9, 40.7] },
        properties: { name: 'Salt Lake City', population: 1257936 }
      },
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-111.95, 41.22] },
        properties: { name: 'Ogden', population: 87321 }
      },
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-111.9, 40.6] },
        properties: { name: 'West Valley City', population: 140230 }
      }
    ]
  };

  return (
    <>
      {/* Current lake boundary */}
      {activeMapLayers.includes('lake-current') && (
        <Source id="lake-current" type="geojson" data={lakeCurrentData}>
          <Layer
            id="lake-current-fill"
            type="fill"
            paint={{
              'fill-color': '#4a90e2',
              'fill-opacity': 0.6
            }}
          />
          <Layer
            id="lake-current-line"
            type="line"
            paint={{
              'line-color': '#2c5aa0',
              'line-width': 2
            }}
          />
        </Source>
      )}

      {/* Historical lake boundary */}
      {activeMapLayers.includes('lake-historical') && (
        <Source id="lake-historical" type="geojson" data={lakeHistoricalData}>
          <Layer
            id="lake-historical-fill"
            type="fill"
            paint={{
              'fill-color': '#87ceeb',
              'fill-opacity': 0.3
            }}
          />
          <Layer
            id="lake-historical-line"
            type="line"
            paint={{
              'line-color': '#4682b4',
              'line-width': 1,
              'line-dasharray': [2, 2]
            }}
          />
        </Source>
      )}

      {/* Dust hotspots - Enhanced with vibrant colors */}
      {activeMapLayers.includes('dust-hotspots') && (
        <>
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
                'fill-opacity': 0.15,
                'fill-translate': [3, 3],
                'fill-translate-anchor': 'viewport'
              }}
            />
            <Layer
              id="erodibility-glow"
              type="fill"
              source-layer="GSL_erodibility_fraction-5bzz8s"
              filter={['>', ['get', 'erodibility'], 0.2]}
              paint={{
                'fill-color': [
                  'interpolate',
                  ['linear'],
                  ['get', 'erodibility'],
                  0.2, '#FF6B35',    // Electric orange
                  0.4, '#FF4500',    // Orange red
                  0.6, '#FF2500',    // Bright red
                  0.8, '#DC143C',    // Crimson
                  1.0, '#B22222'     // Fire brick red
                ],
                'fill-opacity': 0.3,
                'fill-translate': [1, 1],
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
                  0.2, '#FF6B35',    // Electric orange
                  0.4, '#FF4500',    // Orange red
                  0.6, '#FF2500',    // Bright red
                  0.8, '#DC143C',    // Crimson
                  1.0, '#B22222'     // Fire brick red
                ],
                'fill-opacity': 0.8,
                'fill-antialias': true
              }}
            />
          </Source>
          
          {/* Information text overlay */}
          <DustHotspotsInfoBox>
            <InfoTitle>⚠️ Exposed Soil Erodibility Hotspots</InfoTitle>
            <InfoText>
              When these areas are exposed due to low lake levels:
              <br />• <strong>Dust storms</strong> carry toxic particles containing arsenic
              <br />• <strong>PM2.5 particles</strong> reach cities in under 1 hour
              <br />• <strong>2.66 million people</strong> are at health risk
              <br />• <strong>Air quality</strong> deteriorates across the Wasatch Front
            </InfoText>
          </DustHotspotsInfoBox>
        </>
      )}

      {/* Population centers */}
      {activeMapLayers.includes('population-centers') && (
        <Source id="population-centers" type="geojson" data={populationCentersData}>
          <Layer
            id="population-centers-circle"
            type="circle"
            paint={{
              'circle-radius': [
                'interpolate',
                ['linear'],
                ['get', 'population'],
                50000, 8,
                500000, 15,
                1500000, 25
              ],
              'circle-color': '#dc143c',
              'circle-opacity': 0.7,
              'circle-stroke-color': '#ffffff',
              'circle-stroke-width': 2
            }}
          />
        </Source>
      )}

      {/* Bathymetry Layer */}
      {activeMapLayers.includes('bathymetry') && (
        <Source
          id="bathymetry-points-source"
          type="vector"
          url="mapbox://pkulandh.4mg8eo41"
        >
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
                  ['==', ['get', 'bathymetry'], selectedLakeLevel], 6,
                  3
                ],
                12, [
                  'case',
                  ['==', ['get', 'bathymetry'], selectedLakeLevel], 10,
                  5
                ]
              ],
              'circle-color': [
                'case',
                ['>', ['get', 'bathymetry'], 1282], 'transparent',
                ['>', ['get', 'bathymetry'], selectedLakeLevel], '#888888',
                [
                  'match',
                  ['floor', ['get', 'bathymetry']],
                  1271, '#051e40',
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
                  1282, '#b6d6fb',
                  '#4a90e2'
                ]
              ],
              'circle-opacity': [
                'case',
                ['==', ['get', 'bathymetry'], selectedLakeLevel], 1.0,
                ['>', ['get', 'bathymetry'], selectedLakeLevel], 0.6,
                0.8
              ],
              'circle-stroke-width': [
                'case',
                ['==', ['get', 'bathymetry'], selectedLakeLevel], 2,
                0
              ],
              'circle-stroke-color': '#ffffff'
            }}
          />
        </Source>
      )}

      {/* Monitoring stations */}
      {activeMapLayers.includes('monitoring-stations') && (
        <Source id="monitoring-stations" type="geojson" data={{
          type: 'FeatureCollection',
          features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-112.0, 40.8] }, properties: { type: 'air-quality' } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-112.2, 41.0] }, properties: { type: 'water-level' } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-112.4, 40.9] }, properties: { type: 'dust-monitoring' } }
          ]
        }}>
          <Layer
            id="monitoring-stations-circle"
            type="circle"
            paint={{
              'circle-radius': 8,
              'circle-color': '#228b22',
              'circle-opacity': 0.9,
              'circle-stroke-color': '#ffffff',
              'circle-stroke-width': 2
            }}
          />
        </Source>
      )}

      {/* Historical Lake Boundaries for Satellite Timeline */}
      {activeMapLayers.includes('satellite-timeline') && (
        <Source id="current-lake-reference" type="geojson" data={{
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [-112.6, 41.2], [-112.1, 41.2], [-112.1, 40.8], [-112.6, 40.8], [-112.6, 41.2]
            ]]
          },
          properties: { type: 'current-reference' }
        }}>
          <Layer
            id="current-lake-reference-line"
            type="line"
            paint={{
              'line-color': '#ffffff',
              'line-width': 2,
              'line-opacity': 0.8,
              'line-dasharray': [3, 3]
            }}
          />
        </Source>
      )}
    </>
  );
};

// Styled components for the info box
const DustHotspotsInfoBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 15px 20px;
  border-radius: 12px;
  border-left: 4px solid #FF4500;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 320px;
  z-index: 1000;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    max-width: 280px;
    padding: 12px 16px;
    top: 15px;
    left: 15px;
  }
`;

const InfoTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 700;
  color: #FF6B35;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoText = styled.div`
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  
  strong {
    color: #FF6B35;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default MapLayers; 