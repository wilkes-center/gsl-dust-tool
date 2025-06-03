import React, { useState, useEffect, useRef } from 'react';
import Map from 'react-map-gl';
import styled from 'styled-components';
import { Source, Layer } from 'react-map-gl';

// Import separated components
import { storySections } from './story/sections';
import MapLayers from './story/MapLayers';
import LakeHealthPanel from './story/LakeHealthPanel';
import TimeSlider from './story/TimeSlider';
import LakeSlider from './story/LakeSlider';
import StoryNavigation from './story/StoryNavigation';
import TimelapseWithChart from './story/TimelapseWithChart';
import { AVAILABLE_LAKE_LEVELS } from './map/constants';

interface StoryMapProps {
  onBack: () => void;
}

/**
 * Interactive story map component for the Great Salt Lake dust crisis
 */
const StoryMap: React.FC<StoryMapProps> = ({ onBack }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [selectedLakeLevel, setSelectedLakeLevel] = useState(AVAILABLE_LAKE_LEVELS[0]);
  const [selectedYear, setSelectedYear] = useState(2023);
  const autoPlayRef = useRef<number | null>(null);

  const currentSectionData = storySections[currentSection];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = window.setInterval(() => {
        setCurrentSection(prev => {
          if (prev >= storySections.length - 1) {
            setIsAutoPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 8000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleAutoPlayToggle = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleSectionChange = (section: number) => {
    setCurrentSection(section);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    if (currentSection < storySections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const progress = ((currentSection + 1) / storySections.length) * 100;

  return (
    <StoryContainer>
      <StoryNavigation
        currentSection={currentSection}
        totalSections={storySections.length}
        isAutoPlaying={isAutoPlaying}
        onSectionChange={handleSectionChange}
        onAutoPlayToggle={handleAutoPlayToggle}
        onBack={onBack}
      />

      <MainContent>
        {/* Map Section */}
        <MapSection>
          <Map
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            initialViewState={currentSectionData.content.mapConfig.viewState}
            style={{ width: '100%', height: '100%' }}
            mapStyle={
              currentSectionData.id === 'water-levels' 
                ? "mapbox://styles/mapbox/light-v11"
                : "mapbox://styles/mapbox/satellite-v9"
            }
            attributionControl={false}
          >
            {/* Embed Google Earth Engine Timelapse with Chart for water-levels section */}
            {currentSectionData.id === 'water-levels' && (
              <TimelapseWithChart />
            )}

            {/* Regular map layers for other sections */}
            {currentSectionData.id !== 'water-levels' && (
              <MapLayers
                activeMapLayers={currentSectionData.content.mapConfig.showLayers}
                selectedLakeLevel={selectedLakeLevel}
                selectedYear={selectedYear}
              />
            )}
          </Map>

          {/* Lake Health Panel for Lake Level Impacts section */}
          {currentSectionData.content.mapConfig.showLakeSlider && (
            <LakeHealthPanel selectedLakeLevel={selectedLakeLevel} />
          )}
        </MapSection>

        {/* Text Content Section */}
        <TextSection>
          <TextContent>
            <SectionHeader>
              <SectionIcon>
                {currentSectionData.icon}
              </SectionIcon>
              <SectionTitle>{currentSectionData.title}</SectionTitle>
            </SectionHeader>

            <SectionText>{currentSectionData.content.text}</SectionText>

            {currentSectionData.content.statistics && (
              <StatsGrid>
                {currentSectionData.content.statistics.map((stat, index) => (
                  <StatItem key={index}>
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                ))}
              </StatsGrid>
            )}

            {/* Interactive Controls */}
            <InteractiveControls>
              {/* Lake Level Slider for Lake Level Impacts section */}
              {currentSectionData.content.mapConfig.showLakeSlider && (
                <LakeSlider
                  selectedLakeLevel={selectedLakeLevel}
                  onLakeLevelChange={setSelectedLakeLevel}
                />
              )}
            </InteractiveControls>

            <SectionProgress>
              <ProgressInfo>
                Section {currentSection + 1} of {storySections.length}
              </ProgressInfo>
              <ProgressBar progress={progress} />
            </SectionProgress>

            <NavigationButtons>
              <NavButton 
                onClick={handlePrevious} 
                disabled={currentSection === 0}
              >
                ← Previous
              </NavButton>
              <NavButton 
                onClick={handleNext} 
                disabled={currentSection === storySections.length - 1}
              >
                Next →
              </NavButton>
            </NavigationButtons>
          </TextContent>
        </TextSection>
      </MainContent>
    </StoryContainer>
  );
};

// Styled components
const StoryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #f9f6ef; /* Snowbird White background */
  font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const MainContent = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: 120px;
  }
`;

const MapSection = styled.div`
  flex: 1;
  position: relative;
  background: #000;
  border-right: 3px solid #2d5954; /* Great Salt Lake Green */
  box-shadow: 3px 0 15px rgba(45, 89, 84, 0.2);

  @media (max-width: 1024px) {
    height: 50vh;
    border-right: none;
    border-bottom: 3px solid #2d5954;
    box-shadow: 0 3px 15px rgba(45, 89, 84, 0.2);
  }
`;

const TextSection = styled.div`
  flex: 0 0 450px;
  background: #ffffff;
  border-left: 1px solid #e5e5e5;
  overflow-y: hidden; /* Remove scrolling */
  box-shadow: -4px 0 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex: 1;
    border-left: none;
    border-top: 1px solid #e5e5e5;
    box-shadow: 0 -4px 25px rgba(0, 0, 0, 0.1);
  }

  /* Remove custom scrollbar since we're not scrolling */
`;

const TextContent = styled.div`
  padding: 20px; /* Reduced padding */
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #1a1a1a; /* Olympic Park Obsidian */
  justify-content: space-between; /* Distribute content evenly */

  @media (max-width: 768px) {
    padding: 15px; /* Further reduced for mobile */
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Reduced gap */
  margin-bottom: 20px; /* Reduced margin */
  padding-bottom: 15px; /* Reduced padding */
  border-bottom: 2px solid #2d5954; /* Great Salt Lake Green */
  position: relative;
  flex-shrink: 0; /* Prevent shrinking */

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: #dd3b00; /* Rocky Mountain Rust */
    border-radius: 1px;
  }
`;

const SectionIcon = styled.div`
  padding: 12px; /* Reduced padding */
  background: #2d5954; /* Great Salt Lake Green */
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(45, 89, 84, 0.3);
  transition: all 0.3s ease;
  flex-shrink: 0; /* Prevent shrinking */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(45, 89, 84, 0.4);
    background: #1a1a1a; /* Olympic Park Obsidian */
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Sora', sans-serif;
  font-size: 18px; /* Reduced size */
  font-weight: 600; /* SemiBold */
  margin: 0;
  color: #1a1a1a; /* Olympic Park Obsidian */
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionText = styled.div`
  font-family: 'Sora', sans-serif;
  font-size: 9pt;
  font-weight: 400; /* Regular */
  line-height: 1.5; /* Reduced line height */
  color: #1a1a1a; /* Olympic Park Obsidian */
  margin-bottom: 15px; /* Reduced margin */
  white-space: pre-line;
  flex: 1; /* Take available space */
  overflow: hidden; /* Prevent overflow */

  @media (max-width: 768px) {
    font-size: 8pt;
    margin-bottom: 12px;
  }

  strong {
    color: #dd3b00; /* Rocky Mountain Rust */
    font-weight: 600;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Smaller minimum */
  gap: 10px; /* Reduced gap */
  margin: 15px 0; /* Reduced margin */
  padding: 15px; /* Reduced padding */
  background: #f9f6ef; /* Snowbird White */
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  flex-shrink: 0; /* Prevent shrinking */

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 8px;
    padding: 12px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 12px 8px; /* Reduced padding */
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(45, 89, 84, 0.2);
    border-color: #2d5954; /* Great Salt Lake Green */
  }
`;

const StatValue = styled.div`
  font-family: 'Sora', sans-serif;
  font-size: 18px; /* Reduced size */
  font-weight: 600; /* SemiBold */
  color: #dd3b00; /* Rocky Mountain Rust */
  margin-bottom: 4px; /* Reduced margin */

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StatLabel = styled.div`
  font-family: 'Sora', sans-serif;
  font-size: 7pt; /* Reduced size */
  color: #789ba8; /* Bonneville Salt Flats Blue */
  font-weight: 400;
  line-height: 1.2; /* Reduced line height */
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InteractiveControls = styled.div`
  margin: 10px 0; /* Reduced margin */
  padding: 15px; /* Reduced padding */
  background: #f9f6ef; /* Snowbird White */
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  flex-shrink: 0; /* Prevent shrinking */
`;

const SectionProgress = styled.div`
  margin: 15px 0 10px; /* Reduced margins */
  padding: 15px; /* Reduced padding */
  background: #f9f6ef; /* Snowbird White */
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  flex-shrink: 0; /* Prevent shrinking */
`;

const ProgressInfo = styled.div`
  font-family: 'Sora', sans-serif;
  font-size: 10px; /* Reduced size */
  font-weight: 600; /* SemiBold */
  color: #1a1a1a; /* Olympic Park Obsidian */
  text-align: center;
  margin-bottom: 10px; /* Reduced margin */
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 8px;
  background: #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, #2d5954, #dd3b00); /* Great Salt Lake Green to Rocky Mountain Rust */
    border-radius: 4px;
    transition: width 0.5s ease;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 12px; /* Reduced gap */
  justify-content: space-between;
  margin-top: 10px; /* Reduced margin */
  padding-top: 15px; /* Reduced padding */
  flex-shrink: 0; /* Prevent shrinking */
`;

const NavButton = styled.button`
  flex: 1;
  padding: 12px 20px; /* Reduced padding */
  background: #2d5954; /* Great Salt Lake Green */
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Sora', sans-serif;
  font-weight: 600; /* SemiBold */
  font-size: 10px; /* Reduced size */
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover:not(:disabled) {
    background: #dd3b00; /* Rocky Mountain Rust */
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(221, 59, 0, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    background: #789ba8; /* Bonneville Salt Flats Blue */
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 9px;
  }
`;

export default StoryMap;