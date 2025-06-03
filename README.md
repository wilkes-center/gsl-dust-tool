# Great Salt Lake Dust Exposure Modeling Tool

An interactive web application for visualizing and analyzing dust emissions from the Great Salt Lake.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_MAPBOX_TOKEN=your_mapbox_access_token_here
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### API Key Setup

1. **Mapbox Token**: Required for map visualization
   - Sign up at [Mapbox](https://www.mapbox.com/)
   - Create an access token
   - Add it to your `.env` file

2. **Google Maps API Key**: Required for satellite timeline feature (Section 2)
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the Maps JavaScript API
   - Create an API key
   - Add it to your `.env` file

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Features

- Interactive story map with multiple sections
- Satellite timeline with historical imagery (Google Satellite)
- Lake level impact visualization
- Dust hotspot mapping
- Bathymetry visualization
- Real-time data integration

## Technical Stack

- React
- TypeScript
- Vite
- MapBox GL
- React-Map-GL

