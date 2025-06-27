import React from 'react';
import { MapPin, Wind, Droplets, AlertTriangle, Users } from 'lucide-react';
import { ViewState } from 'react-map-gl';
import { formatPM25 } from '../../utils/pmFormatting';

export interface MapSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: {
    text: string;
    mapConfig: {
      viewState: Partial<ViewState>;
      showLayers: string[];
      showBathymetry?: boolean;
      showLakeSlider?: boolean;
      showTimeSlider?: boolean;
    };
    statistics?: {
      value: string;
      label: string;
    }[];
  };
}

/**
 * Story sections configuration for the Great Salt Lake crisis narrative
 */
export const storySections: MapSection[] = [
  {
    id: 'introduction',
    title: 'The Great Salt Lake Crisis',
    icon: React.createElement(MapPin, { size: 24 }),
    content: {
      text: `Great Salt Lake has reached critically low levels, with over 800 square miles of lakebed now exposed. Both north and south arms remain in the "adverse effects" range despite modest improvements in 2024.

Current levels pose significant risks to public health, ecosystems, and Utah's economy.`,
      mapConfig: {
        viewState: {
          longitude: -112.3,
          latitude: 41.0,
          zoom: 8,
          bearing: 0,
          pitch: 0
        },
        showLayers: []
      },
      statistics: [
        { value: '800+', label: 'Square miles exposed' },
        { value: '4,192 ft', label: 'Current south arm level' },
        { value: '2.66M', label: 'People at risk' }
      ]
    }
  },
  {
    id: 'water-levels',
    title: 'Declining Water Levels',
    icon: React.createElement(Droplets, { size: 24 }),
    content: {
      text: `Despite above-average precipitation in 2024, lake levels remain critically low. The south arm peaked at 4,195.2 feet in May but fell to 4,192.1 feet by November.

Key factors: 2°F temperature increase since 1983, 18% groundwater decline, and unsustainable human water depletions averaging 2,217 thousand acre-feet annually.`,
      mapConfig: {
        viewState: {
          longitude: -112.3,
          latitude: 41.0,
          zoom: 8,
          bearing: 0,
          pitch: 0
        },
        showLayers: ['satellite-timeline'],
        showBathymetry: false,
        showLakeSlider: false,
        showTimeSlider: true
      }
    }
  },
  {
    id: 'lake-level-impacts',
    title: 'Lake Level Impacts',
    icon: React.createElement(Droplets, { size: 24 }),
    content: {
      text: `Different lake levels trigger cascading environmental, economic, and health impacts. Use the slider to explore what happens at each elevation.

• 4,202+ feet: Healthy ecosystem, full recreation access
• 4,195-4,198 feet: Moderate risk, increased salinity stress
• 4,190-4,193 feet: Adverse effects, critical dust emissions
• Below 4,190 feet: Crisis level, ecosystem collapse`,
      mapConfig: {
        viewState: {
          longitude: -112.3,
          latitude: 41.0,
          zoom: 8,
          bearing: 0,
          pitch: 0
        },
        showLayers: ['bathymetry'],
        showBathymetry: true,
        showLakeSlider: true
      },
      statistics: [
        { value: '4,202 ft', label: 'Healthy minimum level' },
        { value: '4,193 ft', label: 'Adverse effects threshold' },
        { value: '4,190 ft', label: 'Crisis level' }
      ]
    }
  },
  {
    id: 'dust-emissions',
    title: 'Dust Hotspots & Health Risks',
    icon: React.createElement(Wind, { size: 24 }),
    content: {
      text: `Over 2.66 million residents live downwind of the exposed lakebed, facing health risks from dust containing carcinogenic elements like arsenic.

Major hotspots: Farmington Bay and Bear River Bay. ${formatPM25()} particles reach cities in under 1 hour, while ${formatPM25()} particles remain airborne for up to 2 weeks.`,
      mapConfig: {
        viewState: {
          longitude: -112.1,
          latitude: 40.9,
          zoom: 10,
          bearing: -20,
          pitch: 45
        },
        showLayers: ['dust-hotspots']
      },
      statistics: [
        { value: '2.66M', label: 'People downwind' },
        { value: '<1 hr', label: `${formatPM25()} travel time to cities` },
        { value: '2 weeks', label: `${formatPM25()} airborne duration` }
      ]
    }
  },
  {
    id: 'health-impacts',
    title: 'Economic & Health Consequences',
    icon: React.createElement(AlertTriangle, { size: 24 }),
    content: {
      text: `Great Salt Lake contributes $1.85 billion annually to Utah's economy and supports 7,700 jobs.

Potential worst-case costs: $1.69-$2.17 billion per year, loss of 6,500+ jobs, and health costs of $6.6-$22.3 million annually. The lake provides critical habitat for 12 million migratory birds.`,
      mapConfig: {
        viewState: {
          longitude: -111.9,
          latitude: 40.7,
          zoom: 11,
          bearing: 0,
          pitch: 20
        },
        showLayers: ['population-centers', 'economic-zones', 'health-impacts']
      },
      statistics: [
        { value: '$1.85B', label: 'Annual economic contribution' },
        { value: '7,700', label: 'Jobs supported' },
        { value: '12M', label: 'Migratory birds affected' }
      ]
    }
  },
  {
    id: 'solutions',
    title: 'Conservation & Future Scenarios',
    icon: React.createElement(Users, { size: 24 }),
    content: {
      text: `Utah implemented significant conservation measures in 2024: 288,000 acre-feet of water rights approved, $50 million federal funding secured, and new legislation restricting overhead irrigation.

Future scenarios show conservation is critical. With 770 KAF/year additional inflow, there's a 46% chance of healthy lake levels by 2054.`,
      mapConfig: {
        viewState: {
          longitude: -112.0,
          latitude: 40.8,
          zoom: 9,
          bearing: 10,
          pitch: 15
        },
        showLayers: ['conservation-projects', 'monitoring-stations', 'future-scenarios']
      },
      statistics: [
        { value: '288K', label: 'Acre-feet of water rights' },
        { value: '$50M', label: 'Federal funding secured' },
        { value: '46%', label: 'Chance of recovery by 2054' }
      ]
    }
  }
]; 