import React from 'react';
import styled from 'styled-components';
import { AVAILABLE_LAKE_LEVELS, metersToFeet } from './constants';

// Lake health level definitions
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
    description: "on ecosystem health",
    color: "#8B0000", // Dark red
    minLevel: 1275.0,
    maxLevel: 1276.5
  },
  {
    name: "Adverse effects",
    description: "impacting ecosystem",
    color: "#CD5C5C", // Indian red
    minLevel: 1276.5,
    maxLevel: 1278.0
  },
  {
    name: "Transitionary zone",
    description: "some adverse effects",
    color: "#F4A460", // Sandy brown
    minLevel: 1278.0,
    maxLevel: 1279.5
  },
  {
    name: "Healthy lake level",
    description: "beneficial for most uses",
    color: "#90EE90", // Light green
    minLevel: 1279.5,
    maxLevel: 1281.5
  },
  {
    name: "High water effects",
    description: "due to high levels",
    color: "#FFB6C1", // Light pink
    minLevel: 1281.5,
    maxLevel: 1282.0
  }
];

// Function to get health level for a given lake elevation
const getHealthLevel = (elevation: number): HealthLevel | null => {
  for (let i = 0; i < LAKE_HEALTH_LEVELS.length; i++) {
    const level = LAKE_HEALTH_LEVELS[i];
    if (i === LAKE_HEALTH_LEVELS.length - 1) {
      if (elevation >= level.minLevel && elevation <= level.maxLevel) {
        return level;
      }
    } else {
      if (elevation >= level.minLevel && elevation < level.maxLevel) {
        return level;
      }
    }
  }
  return null;
};

// Styled components
const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid rgba(117, 29, 12, 0.1);
`;

const SliderHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SliderTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const LevelDisplay = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const LevelValue = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
`;

const HealthIndicator = styled.div<{ $color: string }>`
  background-color: ${props => props.$color};
  color: ${props => props.$color === '#8B0000' || props.$color === '#CD5C5C' ? '#FFFFFF' : props.theme.colors.olympicParkObsidian};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;

const SliderTrack = styled.div`
  flex: 1;
  height: 8px;
  background: linear-gradient(to right,
    #8B0000 0%,
    #8B0000 12.5%,
    #CD5C5C 12.5%,
    #CD5C5C 37.5%,
    #F4A460 37.5%,
    #F4A460 62.5%,
    #90EE90 62.5%,
    #90EE90 87.5%,
    #FFB6C1 87.5%,
    #FFB6C1 100%
  );
  border-radius: 4px;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const StyledSlider = styled.input`
  width: 100%;
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.moabMahogany};
    border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.moabMahogany};
    border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ControlButton = styled.button`
  background-color: ${({ theme }) => theme.colors.moabMahogany};
  color: ${({ theme }) => theme.colors.snowbirdWhite};
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: rgba(117, 29, 12, 0.8);
    transform: scale(1.05);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface LakeLevelSliderComponentProps {
  selectedElevation: number;
  onElevationChange: (elevation: number) => void;
  selectedLakeLevel: number;
  onLakeLevelChange: (level: number) => void;
}

export function LakeLevelSliderComponent({
  selectedElevation,
  onElevationChange,
  selectedLakeLevel,
  onLakeLevelChange,
}: LakeLevelSliderComponentProps) {
  const minLevel = AVAILABLE_LAKE_LEVELS[0];
  const maxLevel = AVAILABLE_LAKE_LEVELS[AVAILABLE_LAKE_LEVELS.length - 1];
  const currentLevelIndex = AVAILABLE_LAKE_LEVELS.findIndex(
    level => Math.abs(level - selectedLakeLevel) < 0.1
  );
  
  const currentHealthLevel = getHealthLevel(selectedLakeLevel);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    // Find nearest available level
    const nearestLevel = AVAILABLE_LAKE_LEVELS.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    onLakeLevelChange(nearestLevel);
    onElevationChange(nearestLevel);
  };
  
  const handleDecrement = () => {
    if (currentLevelIndex > 0) {
      const newLevel = AVAILABLE_LAKE_LEVELS[currentLevelIndex - 1];
      onLakeLevelChange(newLevel);
      onElevationChange(newLevel);
    }
  };
  
  const handleIncrement = () => {
    if (currentLevelIndex < AVAILABLE_LAKE_LEVELS.length - 1) {
      const newLevel = AVAILABLE_LAKE_LEVELS[currentLevelIndex + 1];
      onLakeLevelChange(newLevel);
      onElevationChange(newLevel);
    }
  };
  
  return (
    <SliderContainer>
      <SliderHeader>
        <SliderTitle>Lake Level</SliderTitle>
        <LevelDisplay>
          <LevelValue>{(selectedLakeLevel || 0).toFixed(1)}m</LevelValue>
          <LevelValue>({metersToFeet(selectedLakeLevel || 0).toFixed(0)}ft)</LevelValue>
        </LevelDisplay>
      </SliderHeader>
      
      <SliderWrapper>
        <ControlButton 
          onClick={handleDecrement}
          disabled={currentLevelIndex <= 0}
          title="Decrease lake level"
        >
          -
        </ControlButton>
        
        <SliderTrack style={{ position: 'relative' }}>
          <StyledSlider
            type="range"
            min={minLevel}
            max={maxLevel}
            step={0.1}
            value={selectedLakeLevel}
            onChange={handleSliderChange}
          />
        </SliderTrack>
        
        <ControlButton 
          onClick={handleIncrement}
          disabled={currentLevelIndex >= AVAILABLE_LAKE_LEVELS.length - 1}
          title="Increase lake level"
        >
          +
        </ControlButton>
      </SliderWrapper>
      
      {currentHealthLevel && (
        <HealthIndicator $color={currentHealthLevel.color}>
          {currentHealthLevel.name}
        </HealthIndicator>
      )}
    </SliderContainer>
  );
}