import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AVAILABLE_LAKE_LEVELS, metersToFeet } from './constants';
import { ChevronUp, ChevronDown, Waves } from 'lucide-react';

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
    name: "Critical",
    description: "Severe ecosystem damage",
    color: "#8B0000",
    minLevel: 1275.0,
    maxLevel: 1276.5
  },
  {
    name: "Poor",
    description: "Significant impacts",
    color: "#CD5C5C",
    minLevel: 1276.5,
    maxLevel: 1278.0
  },
  {
    name: "Fair",
    description: "Some adverse effects",
    color: "#F4A460",
    minLevel: 1278.0,
    maxLevel: 1279.5
  },
  {
    name: "Good",
    description: "Healthy ecosystem",
    color: "#90EE90",
    minLevel: 1279.5,
    maxLevel: 1281.5
  },
  {
    name: "High",
    description: "Flooding concerns",
    color: "#FFB6C1",
    minLevel: 1281.5,
    maxLevel: 1282.0
  }
];

// Get health level for elevation
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
const ControlContainer = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 320px;
  z-index: ${({ theme }) => theme.zIndices.mapControls};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 0;
  letter-spacing: 0.5px;
  flex: 1;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.moabMahogany};
`;

const LevelDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const LevelValue = styled.div`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  font-family: ${({ theme }) => theme.typography.displayFont};
`;

const LevelUnit = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 4px;
`;

const FeetValue = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const SliderContainer = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const SliderTrack = styled.div`
  height: 12px;
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
  border-radius: 6px;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SliderInput = styled.input`
  width: 100%;
  height: 12px;
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
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.moabMahogany};
    border: 3px solid ${({ theme }) => theme.colors.snowbirdWhite};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    }
  }
  
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.moabMahogany};
    border: 3px solid ${({ theme }) => theme.colors.snowbirdWhite};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    }
  }
`;

const TickMarks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const TickMark = styled.div<{ active?: boolean }>`
  font-size: 11px;
  color: ${props => props.active ? props.theme.colors.moabMahogany : props.theme.colors.textSecondary};
  font-weight: ${props => props.active ? props.theme.typography.weights.semiBold : props.theme.typography.weights.regular};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.moabMahogany};
  }
`;

const ButtonControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ControlButton = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.moabMahogany};
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const HealthIndicator = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${props => props.$color}20;
  border-left: 4px solid ${props => props.$color};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const HealthStatus = styled.div`
  flex: 1;
`;

const HealthName = styled.div<{ $color: string }>`
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${props => props.$color};
  font-size: 14px;
`;

const HealthDescription = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 2px;
`;

interface LakeLevelControlProps {
  selectedLevel: number;
  onLevelChange: (level: number) => void;
}

export function LakeLevelControl({ selectedLevel, onLevelChange }: LakeLevelControlProps) {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const currentHealthLevel = getHealthLevel(selectedLevel);
  
  useEffect(() => {
    const index = AVAILABLE_LAKE_LEVELS.findIndex(
      level => Math.abs(level - selectedLevel) < 0.1
    );
    if (index !== -1) {
      setCurrentLevelIndex(index);
    }
  }, [selectedLevel]);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    const nearestLevel = AVAILABLE_LAKE_LEVELS.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    onLevelChange(nearestLevel);
  };
  
  const handleDecrement = () => {
    if (currentLevelIndex > 0) {
      onLevelChange(AVAILABLE_LAKE_LEVELS[currentLevelIndex - 1]);
    }
  };
  
  const handleIncrement = () => {
    if (currentLevelIndex < AVAILABLE_LAKE_LEVELS.length - 1) {
      onLevelChange(AVAILABLE_LAKE_LEVELS[currentLevelIndex + 1]);
    }
  };
  
  const handleTickClick = (level: number) => {
    onLevelChange(level);
  };
  
  return (
    <ControlContainer>
      <Header>
        <IconWrapper>
          <Waves size={20} />
        </IconWrapper>
        <Title>Lake Level Control</Title>
      </Header>
      
      <LevelDisplay>
        <LevelValue>
          {selectedLevel.toFixed(1)}
          <LevelUnit>meters ASL</LevelUnit>
        </LevelValue>
        <FeetValue>{metersToFeet(selectedLevel).toFixed(0)} feet</FeetValue>
      </LevelDisplay>
      
      <ButtonControls>
        <ControlButton 
          onClick={handleDecrement}
          disabled={currentLevelIndex <= 0}
        >
          <ChevronDown size={16} />
          Lower
        </ControlButton>
        <ControlButton 
          onClick={handleIncrement}
          disabled={currentLevelIndex >= AVAILABLE_LAKE_LEVELS.length - 1}
        >
          <ChevronUp size={16} />
          Higher
        </ControlButton>
      </ButtonControls>
      
      <SliderContainer>
        <SliderTrack>
          <SliderInput
            type="range"
            min={AVAILABLE_LAKE_LEVELS[0]}
            max={AVAILABLE_LAKE_LEVELS[AVAILABLE_LAKE_LEVELS.length - 1]}
            step={0.1}
            value={selectedLevel}
            onChange={handleSliderChange}
          />
        </SliderTrack>
        <TickMarks>
          {AVAILABLE_LAKE_LEVELS.map((level) => (
            <TickMark
              key={level}
              active={Math.abs(level - selectedLevel) < 0.1}
              onClick={() => handleTickClick(level)}
            >
              {level}
            </TickMark>
          ))}
        </TickMarks>
      </SliderContainer>
      
      {currentHealthLevel && (
        <HealthIndicator $color={currentHealthLevel.color}>
          <HealthStatus>
            <HealthName $color={currentHealthLevel.color}>
              {currentHealthLevel.name}
            </HealthName>
            <HealthDescription>
              {currentHealthLevel.description}
            </HealthDescription>
          </HealthStatus>
        </HealthIndicator>
      )}
    </ControlContainer>
  );
}