import { FeatureCollection } from 'geojson';

// Sample erodibility data in proper GeoJSON format
const erodibilityData: FeatureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-112.925, 41.425], [-112.915, 41.425], [-112.915, 41.435], [-112.925, 41.435], [-112.925, 41.425]]]
      },
      "properties": {
        "erodibility": 0.10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-112.915, 41.425], [-112.905, 41.425], [-112.905, 41.435], [-112.915, 41.435], [-112.915, 41.425]]]
      },
      "properties": {
        "erodibility": 0.10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-112.645, 41.425], [-112.635, 41.425], [-112.635, 41.435], [-112.645, 41.435], [-112.645, 41.425]]]
      },
      "properties": {
        "erodibility": 0.31
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-112.435, 41.445], [-112.425, 41.445], [-112.425, 41.455], [-112.435, 41.455], [-112.435, 41.445]]]
      },
      "properties": {
        "erodibility": 0.62
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-112.415, 41.465], [-112.405, 41.465], [-112.405, 41.475], [-112.415, 41.475], [-112.415, 41.465]]]
      },
      "properties": {
        "erodibility": 1.0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-112.405, 41.465], [-112.395, 41.465], [-112.395, 41.475], [-112.405, 41.475], [-112.405, 41.465]]]
      },
      "properties": {
        "erodibility": 0.62
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-112.385, 41.465], [-112.375, 41.465], [-112.375, 41.475], [-112.385, 41.475], [-112.385, 41.465]]]
      },
      "properties": {
        "erodibility": 0.94
      }
    }
  ]
};

export default erodibilityData; 