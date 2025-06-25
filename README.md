# Great Salt Lake Dust Exposure Modeling Tool

An interactive web application for visualizing and analyzing dust emissions from the declining Great Salt Lake, helping communities understand air quality risks and environmental impacts.

## 🌊 The Great Salt Lake Crisis

Great Salt Lake, Utah's largest body of water and a critical ecosystem, is facing an unprecedented crisis. The lake has reached critically low levels, with **over 800 square miles of lakebed now exposed**. This environmental emergency poses significant risks to public health, ecosystems, and Utah's economy.

### Current Situation
- **Current south arm level**: 4,192 feet (as of 2024)
- **Exposed lakebed**: 800+ square miles
- **People at risk**: 2.66 million residents living downwind
- **Economic impact**: $1.85 billion annually at stake

### Critical Thresholds
- **4,202+ feet**: Healthy ecosystem with full recreational access
- **4,195-4,198 feet**: Moderate risk with increased salinity stress
- **4,190-4,193 feet**: Adverse effects with critical dust emissions
- **Below 4,190 feet**: Crisis level with potential ecosystem collapse

## 💨 The Dust Problem

As Great Salt Lake shrinks, it exposes vast areas of lakebed containing **toxic materials including arsenic**. When winds pick up these fine particles, they create dust storms that threaten air quality across the Wasatch Front.

### Health Risks
- **PM2.5 particles** reach cities in under 1 hour
- Particles remain airborne for up to **2 weeks**
- **2.66 million people** live downwind of exposed lakebed
- Dust contains **carcinogenic elements** like arsenic
- Major health impacts for children, elderly, and those with respiratory conditions

### Environmental Impact
- **12 million migratory birds** depend on the lake ecosystem
- Declining brine shrimp populations affect the entire food chain
- Loss of critical habitat for numerous species
- Disruption of regional weather patterns

### Economic Consequences
- Potential losses of **$1.69-$2.17 billion per year**
- **6,500+ jobs** at risk
- Health costs of **$6.6-$22.3 million annually**
- Tourism and recreation industry impacts

## 🔬 What This Tool Does

This interactive modeling tool helps visualize and understand the relationship between Great Salt Lake water levels and dust exposure risks. It provides:

### Key Features
- **Interactive Story Map**: Guided narrative explaining the crisis with multiple sections
- **Lake Level Scenarios**: Explore how different water elevations affect dust emissions
- **Dust Hotspot Mapping**: Identify areas with highest erodibility and emission potential
- **PM2.5 Visualization**: Real-time air quality data and concentration modeling
- **Historical Timeline**: Satellite imagery showing lake changes over time (1984-2022)
- **Bathymetry Visualization**: Understand lake depth and exposed areas
- **Population Impact Analysis**: See which communities are most at risk

### Data Visualization
- **Soil Erodibility Maps**: Shows which exposed areas generate the most dust
- **Air Quality Monitoring**: PM2.5 concentration levels across the region
- **Dust Contribution Analysis**: Breakdown of dust sources (GSL vs. other sources)
- **Census Tract Overlays**: Population density and exposure risk assessment

## 🚀 Getting Started

### Prerequisites
You'll need API keys for map services:

1. **Mapbox Token**: Required for map visualization
   - Sign up at [Mapbox](https://www.mapbox.com/)
   - Create an access token
   - Add to your `.env` file

2. **Google Maps API Key**: Required for satellite timeline feature
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the Maps JavaScript API
   - Create an API key
   - Add to your `.env` file

### Environment Setup

Create a `.env` file in the root directory:

```
VITE_MAPBOX_TOKEN=your_mapbox_access_token_here
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 How to Use the Tool

### Interactive Demo
Start with the **Interactive Demo** to get a guided tour of the Great Salt Lake crisis and the tool's capabilities.

### Main Map Interface
1. **Navigate the map**: Use zoom and pan controls
2. **Choose lake elevation**: Select different GSL elevation scenarios
3. **Use timeline controls**: Explore historical changes or specific dates
4. **View emissions levels**: Hover over colored areas for PM2.5 values
5. **Toggle map layers**: Customize your view with different data visualizations

### Understanding PM2.5 Levels
- **0-54 μg/m³**: Good air quality
- **55-154 μg/m³**: Moderate (acceptable for most people)
- **155-254 μg/m³**: Unhealthy for Sensitive Groups
- **255-354 μg/m³**: Unhealthy for everyone
- **355-424 μg/m³**: Very Unhealthy
- **425+ μg/m³**: Hazardous

## 🏗️ Technical Architecture

### Built With
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **MapBox GL JS** - Interactive mapping
- **React-Map-GL** - React wrapper for MapBox
- **Styled Components** - CSS-in-JS styling
- **Recharts** - Data visualization charts

### Key Components
- **Story Map**: Interactive narrative with guided sections
- **Dust Map**: Main visualization with layer controls
- **Elevation Chart**: Historical water level data
- **Timeline Controls**: Satellite imagery browser
- **PM2.5 Visualization**: Air quality data overlay



## 🌍 Environmental Context

### Why Great Salt Lake Matters
- **Largest saltwater lake in the Western Hemisphere**
- **Critical stopover** for millions of migratory birds
- **Economic engine** supporting brine shrimp industry
- **Climate regulator** affecting regional weather patterns
- **Cultural significance** to Indigenous communities

### The Declining Levels Crisis
- **2°F temperature increase** since 1983
- **18% groundwater decline** in the region
- **Unsustainable water diversions** averaging 2,217 thousand acre-feet annually
- **Drought conditions** exacerbated by climate change

### Conservation Efforts
Utah has implemented significant measures:
- **288,000 acre-feet** of water rights secured for the lake
- **$50 million** in federal funding allocated
- **New legislation** restricting inefficient irrigation
- **Conservation targets**: 770,000 acre-feet additional annual inflow needed



