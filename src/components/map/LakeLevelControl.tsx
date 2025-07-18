import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AVAILABLE_LAKE_LEVELS, metersToFeet } from './constants';
import { Waves, AlertTriangle, Heart, TrendingUp, Activity, ChevronUp, ChevronDown, Droplets, HelpCircle, X } from 'lucide-react';

// Lake health level definitions with enhanced visual properties
interface HealthLevel {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  minLevel: number;
  maxLevel: number;
  icon: React.ElementType;
  gradient: string;
}

const LAKE_HEALTH_LEVELS: HealthLevel[] = [
  {
    name: "Critical",
    description: "Severe ecosystem damage",
    color: "#8B0000",
    bgColor: "rgba(139, 0, 0, 0.1)",
    minLevel: 1275.0,
    maxLevel: 1276.5,
    icon: AlertTriangle,
    gradient: "linear-gradient(180deg, #8B0000 0%, #A52A2A 100%)"
  },
  {
    name: "Poor",
    description: "Significant impacts",
    color: "#CD5C5C",
    bgColor: "rgba(205, 92, 92, 0.1)",
    minLevel: 1276.5,
    maxLevel: 1278.0,
    icon: TrendingUp,
    gradient: "linear-gradient(180deg, #CD5C5C 0%, #DC143C 100%)"
  },
  {
    name: "Fair",
    description: "Some adverse effects",
    color: "#F4A460",
    bgColor: "rgba(244, 164, 96, 0.1)",
    minLevel: 1278.0,
    maxLevel: 1279.5,
    icon: Activity,
    gradient: "linear-gradient(180deg, #F4A460 0%, #DEB887 100%)"
  },
  {
    name: "Good",
    description: "Healthy ecosystem",
    color: "#32CD32",
    bgColor: "rgba(50, 205, 50, 0.1)",
    minLevel: 1279.5,
    maxLevel: 1281.5,
    icon: Heart,
    gradient: "linear-gradient(180deg, #32CD32 0%, #228B22 100%)"
  },
  {
    name: "High",
    description: "Flooding concerns",
    color: "#4169E1",
    bgColor: "rgba(65, 105, 225, 0.1)",
    minLevel: 1281.5,
    maxLevel: 1282.0,
    icon: Waves,
    gradient: "linear-gradient(180deg, #4169E1 0%, #1E90FF 100%)"
  }
];

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

// Modern styled components with improved design
const ControlContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  width: 200px;
  min-height: 480px;
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: ${({ theme }) => theme.colors.moabMahogany};
    box-shadow: 0 4px 12px rgba(117, 29, 12, 0.15);
  }
`;

const Header = styled.div`
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
  
  &::after {
    display: none;
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(117, 29, 12, 0.2));
  }
`;

const Title = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  white-space: nowrap;
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

const LevelDisplay = styled.div<{ $color: string }>`
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  background: rgba(249, 246, 239, 0.5);
  border-bottom: 1px solid rgba(117, 29, 12, 0.1);
  transition: all 0.2s ease;
  position: relative;
  
  &::before {
    display: none;
  }
`;

const LevelValue = styled.div<{ $color: string }>`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${props => props.$color};
  font-family: ${({ theme }) => theme.typography.displayFont};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  transition: all 0.3s ease;
  text-shadow: 0 2px 8px ${props => `${props.$color}20`};
  line-height: 1;
`;

const FeetValue = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  opacity: 0.8;
`;

const SliderContainer = styled.div`
  flex: 1;
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  background: linear-gradient(
    to bottom,
    rgba(249, 246, 239, 0.3),
    rgba(249, 246, 239, 0.1)
  );
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderTrack = styled.div`
  width: 16px;
  height: 100%;
  background: linear-gradient(to top,
    #8B0000 0%,
    #8B0000 12.5%,
    #CD5C5C 12.5%,
    #CD5C5C 37.5%,
    #F4A460 37.5%,
    #F4A460 62.5%,
    #32CD32 62.5%,
    #32CD32 87.5%,
    #4169E1 87.5%,
    #4169E1 100%
  );
  border-radius: 8px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 
    inset 0 2px 8px rgba(0, 0, 0, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.3) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    border-radius: 8px;
    pointer-events: none;
  }
`;

const SliderMarkers = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 100%;
  z-index: 20;
  pointer-events: none;
`;

const SliderMarker = styled.div<{ $position: number; $active: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${props => props.$position}%;
  width: ${props => props.$active ? '24px' : '20px'};
  height: ${props => props.$active ? '4px' : '3px'};
  background: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'};
  border-radius: 2px;
  box-shadow: ${props => props.$active 
    ? '0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(117, 29, 12, 0.6)' 
    : '0 1px 4px rgba(0, 0, 0, 0.3)'
  };
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.$active ? '10px' : '8px'};
    height: ${props => props.$active ? '10px' : '8px'};
    background: ${props => props.$active ? props.theme.colors.moabMahogany : 'rgba(117, 29, 12, 0.7)'};
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: ${props => props.$active ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none'};
  }
`;

const SliderMarkerLabel = styled.div<{ $active: boolean }>`
  position: absolute;
  left: ${props => props.$active ? '30px' : '26px'};
  top: 50%;
  transform: translateY(-50%);
  font-size: ${props => props.$active ? '10px' : '8px'};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${props => props.$active ? props.theme.colors.moabMahogany : props.theme.colors.textSecondary};
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)'};
  padding: ${props => props.$active ? '4px 8px' : '2px 6px'};
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.$active ? 1 : 0.7};
  transition: all 0.3s ease;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  border: ${props => props.$active ? '1px solid rgba(117, 29, 12, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)'};
  pointer-events: none;
  z-index: 25;
  min-width: ${props => props.$active ? '60px' : '50px'};
  text-align: center;
  
  .meters {
    display: block;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    color: ${props => props.$active ? props.theme.colors.moabMahogany : props.theme.colors.textSecondary};
    line-height: 1.1;
  }
  
  .feet {
    display: block;
    font-size: ${props => props.$active ? '8px' : '7px'};
    opacity: 0.7;
    margin-top: 2px;
    line-height: 1;
  }
`;

const LevelButton = styled.button<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  ${props => props.$position}: -45px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 32px;
  background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.moabMahogany} 0%, #8B1A1A 100%);
    color: white;
    transform: translateX(-50%) translateY(${props => props.$position === 'top' ? '-3px' : '3px'}) scale(1.05);
    box-shadow: 0 6px 16px rgba(117, 29, 12, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateX(-50%) scale(0.98);
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    background: #f5f5f5;
  }
  
  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
  }
  
  &:hover:not(:disabled) svg {
    transform: translateY(${props => props.$position === 'top' ? '-1px' : '1px'});
  }
`;

const VerticalSlider = styled.input`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 40px;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  transform-origin: center;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  outline: none;
  cursor: grab;
  z-index: 15;
  
  &:active {
    cursor: grabbing;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
    border: 3px solid ${({ theme }) => theme.colors.moabMahogany};
    border-radius: 50%;
    cursor: grab;
    box-shadow: 
      0 3px 12px rgba(0, 0, 0, 0.15),
      0 2px 6px rgba(117, 29, 12, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: scale(1.15);
      box-shadow: 
        0 6px 18px rgba(0, 0, 0, 0.2),
        0 3px 9px rgba(117, 29, 12, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
      border-color: #8B1A1A;
    }
    
    &:active {
      transform: scale(1.05);
      cursor: grabbing;
    }
  }
  
  &::-webkit-slider-track {
    background: transparent;
    border: none;
    height: 40px;
  }
  
  &::-moz-range-thumb {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
    border: 3px solid ${({ theme }) => theme.colors.moabMahogany};
    border-radius: 50%;
    cursor: grab;
    box-shadow: 
      0 3px 12px rgba(0, 0, 0, 0.15),
      0 2px 6px rgba(117, 29, 12, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    
    &:hover {
      transform: scale(1.15);
      box-shadow: 
        0 6px 18px rgba(0, 0, 0, 0.2),
        0 3px 9px rgba(117, 29, 12, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    
    &:active {
      transform: scale(1.05);
      cursor: grabbing;
    }
  }
  
  &::-moz-range-track {
    background: transparent;
    border: none;
    height: 40px;
  }
`;

const TickMarks = styled.div`
  position: absolute;
  left: -50px;
  top: 0;
  bottom: 0;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  z-index: 5;
`;

const TickMark = styled.div<{ $active?: boolean; $level: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  opacity: ${props => props.$active ? 1 : 0.6};
  transition: all 0.3s ease;
  pointer-events: none;
  height: 16px;
  
  &::before {
    content: '';
    width: ${props => props.$active ? '24px' : '16px'};
    height: ${props => props.$active ? '2px' : '1px'};
    background: ${props => props.$active ? props.theme.colors.moabMahogany : 'rgba(117, 29, 12, 0.5)'};
    border-radius: 1px;
    transition: all 0.3s ease;
    box-shadow: ${props => props.$active ? '0 1px 4px rgba(117, 29, 12, 0.3)' : '0 1px 2px rgba(0, 0, 0, 0.2)'};
  }
  
  &::after {
    content: '${props => props.$level.toFixed(1)}m';
    font-size: 9px;
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    color: ${props => props.$active ? props.theme.colors.moabMahogany : props.theme.colors.textSecondary};
    background: ${props => props.$active ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)'};
    padding: 1px 4px;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    opacity: ${props => props.$active ? 1 : 0.7};
    transition: all 0.3s ease;
    white-space: nowrap;
    backdrop-filter: blur(4px);
    border: ${props => props.$active ? '1px solid rgba(117, 29, 12, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)'};
  }
`;

const HealthIndicator = styled.div<{ $color: string; $bgColor: string; $gradient: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: white;
  border: 1px solid rgba(117, 29, 12, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: rgba(117, 29, 12, 0.2);
  }
  
  &::before {
    display: none;
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

const HealthHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  position: relative;
  z-index: 1;
`;

const HealthIcon = styled.div<{ $color: string }>`
  color: ${({ theme }) => theme.colors.moabMahogany};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(117, 29, 12, 0.1);
  border-radius: 50%;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const HealthName = styled.div<{ $color: string }>`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  letter-spacing: 0.3px;
  font-family: ${({ theme }) => theme.typography.displayFont};
`;

const HealthDescription = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  padding-left: 32px;
  position: relative;
  z-index: 1;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const WaterLevelIndicator = styled.div<{ $level: number; $maxLevel: number; $color: string }>`
  position: absolute;
  right: 50%;
  top: 20px;
  bottom: 20px;
  width: 4px;
  transform: translateX(50%);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  z-index: 12;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${props => (props.$level / props.$maxLevel) * 100}%;
    background: linear-gradient(to top, 
      rgba(74, 144, 226, 0.8) 0%,
      rgba(74, 144, 226, 0.6) 50%,
      rgba(135, 206, 250, 0.8) 100%
    );
    border-radius: 2px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 8px rgba(74, 144, 226, 0.4);
  }
`;

interface LakeLevelControlProps {
  selectedLevel: number;
  onLevelChange: (level: number) => void;
}

/**
 * Enhanced Lake Level Control with modern design and smooth interactions
 */
export function LakeLevelControl({ selectedLevel, onLevelChange }: LakeLevelControlProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [showStoryMap, setShowStoryMap] = useState(false);
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
  
  return (
    <>
      <ControlContainer ref={containerRef}>
        <Header>
          <Title>
            LAKE LEVEL
            <HelpIcon
              onClick={() => setShowStoryMap(true)}
              title="Learn more about lake levels"
            >
              <HelpCircle />
            </HelpIcon>
          </Title>
        </Header>
        
        <LevelDisplay $color={currentHealthLevel?.color || '#999'}>
          <LevelValue $color={currentHealthLevel?.color || '#999'}>
            {metersToFeet(selectedLevel).toFixed(1)} ft
          </LevelValue>
          <FeetValue>{selectedLevel.toFixed(1)}m ASL</FeetValue>
        </LevelDisplay>
        
        <SliderContainer>
          <SliderWrapper>
            <LevelButton 
              $position="top"
              onClick={handleHigher}
              disabled={currentLevelIndex >= AVAILABLE_LAKE_LEVELS.length - 1}
              title="Increase lake level"
            >
              <ChevronUp />
              Higher
            </LevelButton>
            
            <SliderTrack />
            <SliderMarkers>
              {AVAILABLE_LAKE_LEVELS.map((level, index) => {
                const positionPercent = ((level - MIN_LAKE_LEVEL) / (MAX_LAKE_LEVEL - MIN_LAKE_LEVEL)) * 100;
                const isActive = Math.abs(level - selectedLevel) < 0.1;
                
                // Only show labels for every other marker, plus the active one
                const shouldShowLabel = isActive || index % 2 === 0;
                
                return (
                  <SliderMarker
                    key={level}
                    $position={positionPercent}
                    $active={isActive}
                  >
                    {shouldShowLabel && (
                      <SliderMarkerLabel $active={isActive}>
                        <span className="meters">{metersToFeet(level).toFixed(1)}ft</span>
                        <span className="feet">{level.toFixed(1)}m</span>
                      </SliderMarkerLabel>
                    )}
                  </SliderMarker>
                );
              })}
            </SliderMarkers>
            <WaterLevelIndicator 
              $level={selectedLevel - MIN_LAKE_LEVEL} 
              $maxLevel={MAX_LAKE_LEVEL - MIN_LAKE_LEVEL}
              $color={currentHealthLevel?.color || '#4169E1'}
            />
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
              {AVAILABLE_LAKE_LEVELS.map((level, index) => (
                <TickMark
                  key={level}
                  $active={Math.abs(level - selectedLevel) < 0.1}
                  $level={level}
                  style={{
                    order: AVAILABLE_LAKE_LEVELS.length - index - 1
                  }}
                />
              ))}
            </TickMarks>
            
            <LevelButton 
              $position="bottom"
              onClick={handleLower}
              disabled={currentLevelIndex <= 0}
              title="Decrease lake level"
            >
              <ChevronDown />
              Lower
            </LevelButton>
          </SliderWrapper>
        </SliderContainer>
        
        {/* Health Level Indicator */}
        {currentHealthLevel && (
          <HealthIndicator 
            $color={currentHealthLevel.color} 
            $bgColor={currentHealthLevel.bgColor}
            $gradient={currentHealthLevel.gradient}
          >
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

      {/* Story Map Modal */}
      {showStoryMap && (
        <StoryMapModal onClick={() => setShowStoryMap(false)}>
          <StoryMapContent onClick={(e) => e.stopPropagation()}>
            <StoryMapCloseButton onClick={() => setShowStoryMap(false)}>
              <X />
            </StoryMapCloseButton>
            <StoryMapIframe
              src="https://storymaps.arcgis.com/stories/8e1c5b2194184d54b89662719439dddd#ref-n-Amxc3s"
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