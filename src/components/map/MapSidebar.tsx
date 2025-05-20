import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AVAILABLE_LAKE_LEVELS } from './constants';
import { metersToFeet } from '../../utils/dataUtils';
import { LakeLevelSliderContainer } from '../MapStyled';

// Styled components
// LakeLevelSliderContainer is now imported from MapStyled

const TimeSliderHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  border-radius: 12px;
  padding: 2px;
  margin-bottom: 0px;
  border: none;
  box-shadow: none;

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-size: 26px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    font-family: ${({ theme }) => theme.typography.displayFont};
    letter-spacing: 1.2px;
    margin-bottom: 0px;
  }

  .level-display {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0px;

    span {
      color: ${({ theme }) => theme.colors.olympicParkObsidian};
      font-weight: ${({ theme }) => theme.typography.weights.semiBold};
      font-size: 16px;
      font-family: ${({ theme }) => theme.typography.fontFamily};
      background: #fff;
      padding: 2px 8px;
      border-radius: 6px;
      box-shadow: 0 1px 3px rgba(224,183,164,0.08);
      text-align: center;
      line-height: 1.2;
      min-width: 80px;
    }

    .masl {
      opacity: 0.8;
    }
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 8px 0;
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

const LevelControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px 0;
  width: 100%;
  padding: 0 10px;
`;

// Add interface for the styled component props
interface LakeLevelSliderProps {
  $value: number;
  $min: number;
  $max: number;
}

const LakeLevelSlider = styled.div<LakeLevelSliderProps>`
  height: 160px;
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
    height: 140px;
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
    height: ${props => ((props.$value - props.$min) / (props.$max - props.$min)) * 140}px;
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
    height: 140px;
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

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 80px);
  padding: 0px 0;
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
  
  // Ref for measuring container height
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    <LakeLevelSliderContainer ref={containerRef}>
      <TimeSliderHeader>
        <h3>LAKE LEVEL</h3>
        <div className="level-display">
          <span>{metersToFeet(selectedLakeLevel).toFixed(1)} ft</span>
        </div>
      </TimeSliderHeader>
      <Divider />
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
                    {level.toFixed(1)} mASL
                  </LakeLevelTickLabel>
                  <LakeLevelTickLabel $isSelected={isSelected} $side="right">
                    {metersToFeet(level).toFixed(1)} ft
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
  );
}

export default MapSidebarComponent;