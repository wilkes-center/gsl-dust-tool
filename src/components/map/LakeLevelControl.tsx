import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AVAILABLE_LAKE_LEVELS, metersToFeet } from './constants';
import { Waves, AlertTriangle, Heart, TrendingUp, Activity, ChevronUp, ChevronDown } from 'lucide-react';

// Lake health level definitions with icons
interface HealthLevel {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  minLevel: number;
  maxLevel: number;
  icon: React.ElementType;
}

const LAKE_HEALTH_LEVELS: HealthLevel[] = [
  {
    name: "Critical",
    description: "Severe ecosystem damage",
    color: "#8B0000",
    bgColor: "rgba(139, 0, 0, 0.1)",
    minLevel: 1275.0,
    maxLevel: 1276.5,
    icon: AlertTriangle
  },
  {
    name: "Poor",
    description: "Significant impacts",
    color: "#CD5C5C",
    bgColor: "rgba(205, 92, 92, 0.1)",
    minLevel: 1276.5,
    maxLevel: 1278.0,
    icon: TrendingUp
  },
  {
    name: "Fair",
    description: "Some adverse effects",
    color: "#F4A460",
    bgColor: "rgba(244, 164, 96, 0.1)",
    minLevel: 1278.0,
    maxLevel: 1279.5,
    icon: Activity
  },
  {
    name: "Good",
    description: "Healthy ecosystem",
    color: "#90EE90",
    bgColor: "rgba(144, 238, 144, 0.1)",
    minLevel: 1279.5,
    maxLevel: 1281.5,
    icon: Heart
  },
  {
    name: "High",
    description: "Flooding concerns",
    color: "#FFB6C1",
    bgColor: "rgba(255, 182, 193, 0.1)",
    minLevel: 1281.5,
    maxLevel: 1282.0,
    icon: Waves
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
  top: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.xl};
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 29, 12, 0.1);
  width: 180px;
  height: 500px;
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  text-align: center;
  border-bottom: 1px solid rgba(117, 29, 12, 0.08);
  background: linear-gradient(to bottom, rgba(117, 29, 12, 0.03), transparent);
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const LevelDisplay = styled.div<{ $color: string }>`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  text-align: center;
  background: ${props => props.$color}15;
  border-bottom: 1px solid ${props => props.$color}30;
  transition: all 0.3s ease;
`;

const LevelValue = styled.div<{ $color: string }>`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${props => props.$color};
  font-family: ${({ theme }) => theme.typography.displayFont};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  transition: color 0.3s ease;
`;

const FeetValue = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const SliderContainer = styled.div`
  flex: 1;
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderTrack = styled.div`
  width: 12px;
  height: 100%;
  background: linear-gradient(to top,
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
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const LevelButton = styled.button<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  ${props => props.$position}: -45px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 36px;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: 18px;
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.moabMahogany};
    color: white;
    transform: translateX(-50%) translateY(${props => props.$position === 'top' ? '-2px' : '2px'});
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:active:not(:disabled) {
    transform: translateX(-50%) scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const VerticalSlider = styled.input`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  transform-origin: center;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  
  /* Dynamic width based on container height */
  width: calc(100% - 90px);
  height: 50px;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    background: white;
    border: 4px solid ${({ theme }) => theme.colors.moabMahogany};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    position: relative;
    z-index: 10;
    
    &:hover {
      transform: scale(1.15);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: scale(1.05);
    }
  }
  
  &::-moz-range-thumb {
    width: 40px;
    height: 40px;
    background: white;
    border: 4px solid ${({ theme }) => theme.colors.moabMahogany};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    position: relative;
    z-index: 10;
    
    &:hover {
      transform: scale(1.15);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: scale(1.05);
    }
  }
`;

const TickMarks = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  pointer-events: none;
`;

const TickMark = styled.div<{ $active?: boolean; $position: number }>`
  position: absolute;
  left: 50%;
  bottom: ${props => props.$position}%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.$active ? '20px' : '12px'};
    height: 2px;
    background: ${props => props.$active ? props.theme.colors.moabMahogany : props.theme.colors.textSecondary};
    transition: all 0.3s ease;
  }
`;

const HealthIndicator = styled.div<{ $color: string; $bgColor: string }>`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  background: ${props => props.$bgColor};
  border-top: 1px solid ${props => props.$color}30;
  transition: all 0.3s ease;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HealthHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const HealthIcon = styled.div<{ $color: string }>`
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const HealthName = styled.div<{ $color: string }>`
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${props => props.$color};
  font-size: 15px;
  letter-spacing: 0.5px;
`;

const HealthDescription = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  padding-left: 32px;
`;

const QuickLevels = styled.div`
  position: absolute;
  right: -65px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  
  ${ControlContainer}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

const QuickLevelButton = styled.button<{ $color: string; $active: boolean }>`
  padding: 6px 12px;
  background: ${props => props.$active ? props.$color : 'white'};
  color: ${props => props.$active ? 'white' : props.$color};
  border: 2px solid ${props => props.$color};
  border-radius: 16px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.$color};
    color: white;
    transform: translateX(-2px);
  }
`;

interface LakeLevelControlProps {
  selectedLevel: number;
  onLevelChange: (level: number) => void;
}

export function LakeLevelControl({ selectedLevel, onLevelChange }: LakeLevelControlProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentHealthLevel = getHealthLevel(selectedLevel);
  
  const MIN_LAKE_LEVEL = AVAILABLE_LAKE_LEVELS[0];
  const MAX_LAKE_LEVEL = AVAILABLE_LAKE_LEVELS[AVAILABLE_LAKE_LEVELS.length - 1];
  
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
  
  const handleHigher = () => {
    if (currentLevelIndex < AVAILABLE_LAKE_LEVELS.length - 1) {
      onLevelChange(AVAILABLE_LAKE_LEVELS[currentLevelIndex + 1]);
    }
  };
  
  const handleLower = () => {
    if (currentLevelIndex > 0) {
      onLevelChange(AVAILABLE_LAKE_LEVELS[currentLevelIndex - 1]);
    }
  };
  
  const handleQuickLevel = (level: number) => {
    onLevelChange(level);
  };
  
  const getPositionForLevel = (level: number) => {
    return ((level - MIN_LAKE_LEVEL) / (MAX_LAKE_LEVEL - MIN_LAKE_LEVEL)) * 100;
  };
  
  return (
    <ControlContainer ref={containerRef}>
      <Header>
        <IconWrapper>
          <Waves size={18} />
        </IconWrapper>
        <Title>Lake Level</Title>
      </Header>
      
      <LevelDisplay $color={currentHealthLevel?.color || '#999'}>
        <LevelValue $color={currentHealthLevel?.color || '#999'}>
          {selectedLevel.toFixed(1)}m
        </LevelValue>
        <FeetValue>{metersToFeet(selectedLevel).toFixed(0)} ft</FeetValue>
      </LevelDisplay>
      
      <SliderContainer>
        <SliderWrapper>
          <LevelButton 
            $position="top"
            onClick={handleHigher}
            disabled={currentLevelIndex >= AVAILABLE_LAKE_LEVELS.length - 1}
            title="Increase lake level"
          >
            <ChevronUp size={14} />
            Higher
          </LevelButton>
          
          <SliderTrack />
          <VerticalSlider
            type="range"
            min={MIN_LAKE_LEVEL}
            max={MAX_LAKE_LEVEL}
            step={0.1}
            value={selectedLevel}
            onChange={handleSliderChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          />
          <TickMarks>
            {AVAILABLE_LAKE_LEVELS.map((level) => (
              <TickMark
                key={level}
                $active={Math.abs(level - selectedLevel) < 0.1}
                $position={getPositionForLevel(level)}
              />
            ))}
          </TickMarks>
          
          <LevelButton 
            $position="bottom"
            onClick={handleLower}
            disabled={currentLevelIndex <= 0}
            title="Decrease lake level"
          >
            <ChevronDown size={14} />
            Lower
          </LevelButton>
        </SliderWrapper>
        
        <QuickLevels>
          {LAKE_HEALTH_LEVELS.map((health) => {
            const midLevel = (health.minLevel + health.maxLevel) / 2;
            const isActive = currentHealthLevel?.name === health.name;
            return (
              <QuickLevelButton
                key={health.name}
                $color={health.color}
                $active={isActive}
                onClick={() => handleQuickLevel(midLevel)}
                title={`Set to ${health.name} level`}
              >
                {health.name}
              </QuickLevelButton>
            );
          })}
        </QuickLevels>
      </SliderContainer>
      
      {currentHealthLevel && (
        <HealthIndicator $color={currentHealthLevel.color} $bgColor={currentHealthLevel.bgColor}>
          <HealthHeader>
            <HealthIcon $color={currentHealthLevel.color}>
              <currentHealthLevel.icon />
            </HealthIcon>
            <HealthName $color={currentHealthLevel.color}>
              {currentHealthLevel.name}
            </HealthName>
          </HealthHeader>
          <HealthDescription>
            {currentHealthLevel.description}
          </HealthDescription>
        </HealthIndicator>
      )}
    </ControlContainer>
  );
}