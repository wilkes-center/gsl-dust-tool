import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { HelpCircle, X } from 'lucide-react';
import { AVAILABLE_LAKE_LEVELS } from './constants';
import { LakeLevelSliderContainer } from '../MapStyled';
import { metersToFeet } from '../../utils/dataUtils';

/**
 * MapSidebar Component with Lake Health Level Indicators
 * 
 * This component displays a lake level slider with integrated health level indicators
 * that show users the environmental impact of different lake elevations:
 * 
 * - Serious adverse effects (1275.0-1276.5m): Dark red - Critical impacts on ecosystem
 * - Adverse effects impacting (1276.5-1278.0m): Indian red - Significant negative effects  
 * - Transitionary zone (1278.0-1279.5m): Sandy brown - Some adverse effects
 * - Healthy lake level range (1279.5-1281.0m): Light green - Beneficial for most uses
 * - Adverse effects due to high levels (1281.0-1282.0m): Light pink - High level impacts
 * 
 * The health level indicator updates dynamically as users adjust the lake level,
 * providing immediate feedback on the environmental implications of their selection.
 */

// Lake health level definitions based on the provided image
interface HealthLevel {
  name: string;
  description: string;
  color: string;
  minLevel: number;
  maxLevel: number;
}

const LAKE_HEALTH_LEVELS: HealthLevel[] = [
  {
    name: "Serious adverse effects",
    description: "on brine shrimp viability, air quality.",
    color: "#8B0000", // Dark red
    minLevel: 1275.0,
    maxLevel: 1276.5
  },
  {
    name: "Adverse effects impacting",
    description: "ecosystem health.",
    color: "#CD5C5C", // Indian red
    minLevel: 1276.5,
    maxLevel: 1278.0
  },
  {
    name: "Transitionary zone",
    description: "with some adverse effects.",
    color: "#F4A460", // Sandy brown
    minLevel: 1278.0,
    maxLevel: 1279.5
  },
  {
    name: "Healthy lake level range",
    description: "deemed beneficial for most uses.",
    color: "#90EE90", // Light green
    minLevel: 1279.5,
    maxLevel: 1281.5
  },
  {
    name: "Adverse effects",
    description: "due to high levels.",
    color: "#FFB6C1", // Light pink
    minLevel: 1281.5,
    maxLevel: 1282.0
  }
];

// Function to get health level for a given lake elevation
const getHealthLevel = (elevation: number): HealthLevel | null => {
  // Find the health level that contains this elevation
  for (let i = 0; i < LAKE_HEALTH_LEVELS.length; i++) {
    const level = LAKE_HEALTH_LEVELS[i];
    // For the last (highest) level, include the upper boundary
    if (i === LAKE_HEALTH_LEVELS.length - 1) {
      if (elevation >= level.minLevel && elevation <= level.maxLevel) {
        return level;
      }
    } else {
      // For all other levels, exclude the upper boundary
      if (elevation >= level.minLevel && elevation < level.maxLevel) {
        return level;
      }
    }
  }
  return null;
};

// Styled components
// LakeLevelSliderContainer is now imported from MapStyled

const TimeSliderHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  background: linear-gradient(
    to bottom,
    rgba(117, 29, 12, 0.05),
    rgba(249, 246, 239, 0)
  );
  margin-bottom: 0px;

  h3 {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.displayFont};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    color: ${({ theme }) => theme.colors.moabMahogany};
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  .level-display {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0px;

    span {
      font-size: 20px;
      font-weight: ${({ theme }) => theme.typography.weights.semiBold};
      color: ${({ theme }) => theme.colors.moabMahogany};
      font-family: ${({ theme }) => theme.typography.displayFont};
      background: rgba(249, 246, 239, 0.5);
      padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      border: 1px solid rgba(117, 29, 12, 0.1);
      text-align: center;
      line-height: 1.2;
      min-width: 80px;
    }

    .masl {
      opacity: 0.8;
    }
  }
`;

const HelpIcon = styled.button`
  background: rgba(117, 29, 12, 0.1);
  border: 1px solid rgba(117, 29, 12, 0.2);
  color: ${({ theme }) => theme.colors.moabMahogany};
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 0.9;
  margin-left: 4px;

  &:hover {
    opacity: 1;
    background: rgba(117, 29, 12, 0.2);
    border-color: rgba(117, 29, 12, 0.4);
    transform: scale(1.05);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const StoryMapModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
`;

const StoryMapContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  height: 80%;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const StoryMapCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10001;
  backdrop-filter: blur(4px);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #666;
  }
`;

const StoryMapIframe = styled.iframe`
  flex: 1;
  border: none;
  width: 100%;
  height: 100%;
`;

const LevelControlButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin: ${({ theme }) => theme.spacing.xs} 0;
  background-color: ${({ theme }) => theme.colors.moabMahogany};
  color: ${({ theme }) => theme.colors.snowbirdWhite};
  border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.moabMahogany};
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm};
  background: linear-gradient(
    to bottom,
    rgba(249, 246, 239, 0.3),
    rgba(249, 246, 239, 0.1)
  );
`;

const LevelControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

// Add interface for the styled component props
interface LakeLevelSliderProps {
  $value: number;
  $min: number;
  $max: number;
}

const LakeLevelSlider = styled.div<LakeLevelSliderProps>`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4px 10px;
  margin: 2px 0;

  /* Slider track - base color with subtle gradient */
  &:before {
    content: '';
    position: absolute;
    height: 200px;
    width: 8px;
    background: linear-gradient(to bottom,
      rgba(224, 224, 224, 0.8),
      rgba(200, 200, 200, 0.9)
    );
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  /* Water level fill overlay with depth gradient */
  &:after {
    content: '';
    position: absolute;
    width: 8px;
    background: linear-gradient(to bottom,
      rgba(74, 144, 226, 0.7),  /* Lighter blue at top */
      rgba(41, 98, 166, 0.9)    /* Darker blue at bottom */
    );
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;  /* Fixed position at bottom */
    height: ${props => ((props.$value - props.$min) / (props.$max - props.$min)) * 200}px;
    transition: all 0.2s ease;
    z-index: 2;
    box-shadow: 0 1px 3px rgba(74, 144, 226, 0.3);
  }

  input[type="range"] {
    margin: ${({ theme }) => theme.spacing.xs} 0;
    cursor: pointer;
    position: relative;
    z-index: 10;
    writing-mode: vertical-lr;
    direction: rtl;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 32px;
    height: 200px;
    padding: 0;

    &::-webkit-slider-runnable-track {
      height: 8px;
      background: transparent; 
      border-radius: 4px;
    }

    &::-moz-range-track {
      height: 8px;
      background: transparent;
      border-radius: 4px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg,
        ${({ theme }) => theme.colors.moabMahogany},
        ${({ theme }) => theme.colors.moabMahogany} 60%,
        rgba(117, 29, 12, 0.9)
      );
      border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      margin-top: -8px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      z-index: 15;

      &:hover {
        background: linear-gradient(135deg,
          ${({ theme }) => theme.colors.olympicParkObsidian},
          ${({ theme }) => theme.colors.olympicParkObsidian} 60%,
          rgba(33, 33, 33, 0.9)
        );
        transform: scale(1.15);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    &::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg,
        ${({ theme }) => theme.colors.moabMahogany},
        ${({ theme }) => theme.colors.moabMahogany} 60%,
        rgba(117, 29, 12, 0.9)
      );
      border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: linear-gradient(135deg,
          ${({ theme }) => theme.colors.olympicParkObsidian},
          ${({ theme }) => theme.colors.olympicParkObsidian} 60%,
          rgba(33, 33, 33, 0.9)
        );
        transform: scale(1.15);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    /* Focus state */
    &:focus {
      outline: none;

      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 5px rgba(0, 0, 0, 0.3);
      }

      &::-moz-range-thumb {
        box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

// Health level zone backgrounds for the slider
const HealthLevelZones = styled.div<LakeLevelSliderProps>`
  position: absolute;
  width: 20px;
  height: 200px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  z-index: 0;
  border-radius: 4px;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top,
      #8B0000 0%,
      #8B0000 ${props => ((1276.5 - props.$min) / (props.$max - props.$min)) * 100}%,
      #CD5C5C ${props => ((1276.5 - props.$min) / (props.$max - props.$min)) * 100}%,
      #CD5C5C ${props => ((1278.0 - props.$min) / (props.$max - props.$min)) * 100}%,
      #F4A460 ${props => ((1278.0 - props.$min) / (props.$max - props.$min)) * 100}%,
      #F4A460 ${props => ((1279.5 - props.$min) / (props.$max - props.$min)) * 100}%,
      #90EE90 ${props => ((1279.5 - props.$min) / (props.$max - props.$min)) * 100}%,
      #90EE90 ${props => ((1281.5 - props.$min) / (props.$max - props.$min)) * 100}%,
      #FFB6C1 ${props => ((1281.5 - props.$min) / (props.$max - props.$min)) * 100}%,
      #FFB6C1 100%
    );
    opacity: 0.3;
    border-radius: 4px;
  }
`;

const LakeLevelTicks = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const LakeLevelTick = styled.div<{ $bottom: string; $isSelected: boolean }>`
  position: absolute;
  bottom: ${props => props.$bottom};
  transform: translateY(50%);
  width: ${props => props.$isSelected ? '32px' : '12px'};
  height: ${props => props.$isSelected ? '5px' : '2px'};
  background-color: ${props => props.$isSelected
    ? props.theme.colors.moabMahogany
    : 'rgba(117, 29, 12, 0.4)'};
  border-radius: ${props => props.$isSelected ? '2.5px' : '1px'};
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  transition: all 0.2s ease;

  /* Add glow effect for selected tick */
  ${props => props.$isSelected && `
    box-shadow: 0 0 6px rgba(117, 29, 12, 0.4);
  `}

  /* Add hover effect for non-selected ticks */
  ${props => !props.$isSelected && `
    &:hover {
      width: 16px;
      background-color: rgba(117, 29, 12, 0.6);
    }
  `}
`;

const LakeLevelTickLabel = styled.span<{ $isSelected: boolean; $side: 'left' | 'right' }>`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-size: ${props => props.$isSelected ? '13px' : '9px'};
  color: ${props => props.$isSelected
    ? props.theme.colors.moabMahogany
    : props.theme.colors.olympicParkObsidian};
  font-weight: ${props => props.$isSelected
    ? '700'
    : props.theme.typography.weights.regular};
  white-space: nowrap;
  ${props => props.$side === 'left' ? 'right: calc(50% + 26px);' : 'left: calc(50% + 26px);'}
  text-align: ${props => props.$side === 'left' ? 'right' : 'left'};
  pointer-events: none;
  transition: all 0.15s ease;
  opacity: ${props => props.$isSelected ? 1 : 0.7};
  line-height: 1.2;

  /* Add text glow for selected label */
  ${props => props.$isSelected && `
    text-shadow: 0 0 1px rgba(117, 29, 12, 0.3);
    letter-spacing: 0.03em;
  `}
`;

// Health level indicator components
const HealthLevelIndicator = styled.div<{ $color: string }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: white;
  border: 1px solid rgba(117, 29, 12, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: rgba(117, 29, 12, 0.2);
  }
`;

const HealthLevelTitle = styled.div<{ $color: string }>`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.displayFont};
  letter-spacing: 0.3px;
`;

const HealthLevelDescription = styled.div<{ $color: string }>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const HealthLevelContainer = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

interface MapSidebarProps {
  selectedLakeLevel: number;
  handleElevationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showBathymetry: boolean;
}

export function MapSidebarComponent({
  selectedLakeLevel,
  handleElevationChange,
  showBathymetry
}: MapSidebarProps) {
  // Min/max elevation for the slider
  const MIN_LAKE_LEVEL = AVAILABLE_LAKE_LEVELS[0];
  const MAX_LAKE_LEVEL = AVAILABLE_LAKE_LEVELS[AVAILABLE_LAKE_LEVELS.length - 1];
  
  // State to track the current level index for increment/decrement
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  
  // State for story map modal
  const [showStoryMap, setShowStoryMap] = useState(false);
  
  // Ref for measuring container height
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get current health level
  const currentHealthLevel = getHealthLevel(selectedLakeLevel);
  
  // Update the current level index when selectedLakeLevel changes
  useEffect(() => {
    const index = AVAILABLE_LAKE_LEVELS.findIndex(
      level => Math.abs(level - selectedLakeLevel) < 0.1
    );
    if (index !== -1) {
      setCurrentLevelIndex(index);
    }
  }, [selectedLakeLevel]);

  // Set the CSS variable for lake level height
  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--lake-level-height', `${height}px`);
    }
  }, [showBathymetry]); // Re-measure when visibility changes
  
  // Handler for increment button
  const handleIncrement = () => {
    if (currentLevelIndex < AVAILABLE_LAKE_LEVELS.length - 1) {
      const newLevel = AVAILABLE_LAKE_LEVELS[currentLevelIndex + 1];
      const event = {
        target: { value: newLevel.toString() }
      } as React.ChangeEvent<HTMLInputElement>;
      handleElevationChange(event);
    }
  };
  
  // Handler for decrement button
  const handleDecrement = () => {
    if (currentLevelIndex > 0) {
      const newLevel = AVAILABLE_LAKE_LEVELS[currentLevelIndex - 1];
      const event = {
        target: { value: newLevel.toString() }
      } as React.ChangeEvent<HTMLInputElement>;
      handleElevationChange(event);
    }
  };

  if (!showBathymetry) return null;

  return (
    <>
      <LakeLevelSliderContainer ref={containerRef}>
        <TimeSliderHeader>
          <h3>
            LAKE LEVEL
            <HelpIcon
              onClick={() => setShowStoryMap(true)}
              title="Learn more about lake levels"
            >
              <HelpCircle />
            </HelpIcon>
          </h3>
          <div className="level-display">
            <span>{metersToFeet(selectedLakeLevel).toFixed(1)} ft</span>
            <span style={{ fontSize: '0.8em', opacity: 0.7, marginLeft: '8px' }}>({selectedLakeLevel.toFixed(1)}m)</span>
          </div>
        </TimeSliderHeader>
        
        {/* Health Level Indicator */}
        {currentHealthLevel && (
          <HealthLevelContainer>
            <HealthLevelIndicator $color={currentHealthLevel.color}>
              <HealthLevelTitle $color={currentHealthLevel.color}>{currentHealthLevel.name}</HealthLevelTitle>
              <HealthLevelDescription $color={currentHealthLevel.color}>{currentHealthLevel.description}</HealthLevelDescription>
            </HealthLevelIndicator>
          </HealthLevelContainer>
        )}
        
        <SliderContainer>
          {/* Top button only */}
          <LevelControls>
            <LevelControlButton 
              onClick={handleIncrement}
              disabled={currentLevelIndex >= AVAILABLE_LAKE_LEVELS.length - 1}
              title="Increase lake level"
            >
              +
            </LevelControlButton>
          </LevelControls>
          
          <LakeLevelSlider
            $value={selectedLakeLevel}
            $min={MIN_LAKE_LEVEL}
            $max={MAX_LAKE_LEVEL}
          >
            {/* Health level zone backgrounds */}
            <HealthLevelZones
              $value={selectedLakeLevel}
              $min={MIN_LAKE_LEVEL}
              $max={MAX_LAKE_LEVEL}
            />
            
            <input
              type="range"
              min={MIN_LAKE_LEVEL}
              max={MAX_LAKE_LEVEL}
              step={(MAX_LAKE_LEVEL - MIN_LAKE_LEVEL) / (AVAILABLE_LAKE_LEVELS.length - 1)}
              value={selectedLakeLevel}
              onChange={handleElevationChange}
              className="vertical-slider"
              style={{ zIndex: 5 }}
            />
            
            {/* Add tick marks for each available level */}
            <LakeLevelTicks>
              {AVAILABLE_LAKE_LEVELS.map((level: number) => {
                const positionPercent = ((level - MIN_LAKE_LEVEL) / (MAX_LAKE_LEVEL - MIN_LAKE_LEVEL)) * 100;
                
                let adjustedPosition = positionPercent;
                if (level === MIN_LAKE_LEVEL) adjustedPosition = 0;
                if (level === MAX_LAKE_LEVEL) adjustedPosition = 100;
                
                const isSelected = Math.abs(level - selectedLakeLevel) < 0.1;
                
                return (
                  <LakeLevelTick 
                    key={level} 
                    $bottom={`${adjustedPosition}%`}
                    $isSelected={isSelected}
                  >
                    <LakeLevelTickLabel $isSelected={isSelected} $side="left">
                      {metersToFeet(level).toFixed(1)} ft
                    </LakeLevelTickLabel>
                    <LakeLevelTickLabel $isSelected={isSelected} $side="right">
                      {level.toFixed(1)} mASL
                    </LakeLevelTickLabel>
                  </LakeLevelTick>
                );
              })}
            </LakeLevelTicks>
          </LakeLevelSlider>
          
          {/* Bottom button only */}
          <LevelControls>
            <LevelControlButton 
              onClick={handleDecrement}
              disabled={currentLevelIndex <= 0}
              title="Decrease lake level"
            >
              -
            </LevelControlButton>
          </LevelControls>
        </SliderContainer>
      </LakeLevelSliderContainer>

      {/* Story Map Modal */}
      {showStoryMap && (
        <StoryMapModal onClick={() => setShowStoryMap(false)}>
          <StoryMapContent onClick={(e) => e.stopPropagation()}>
            <StoryMapCloseButton onClick={() => setShowStoryMap(false)}>
              <X />
            </StoryMapCloseButton>
            <StoryMapIframe
              src="https://storymaps.arcgis.com/stories/8e1c5b2194184d54b89662719439dddd#ref-n-GxMtqA"
              allowFullScreen
              allow="geolocation"
              title="Lake Level Interactive Story"
            />
          </StoryMapContent>
        </StoryMapModal>
      )}
    </>
  );
}

export default MapSidebarComponent;