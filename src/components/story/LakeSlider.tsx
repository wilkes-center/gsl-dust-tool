import React from 'react';
import styled from 'styled-components';
import { AVAILABLE_LAKE_LEVELS, metersToFeet } from '../map/constants';

interface LakeSliderProps {
  selectedLakeLevel: number; // Now expects meters
  onLakeLevelChange: (level: number) => void;
}

/**
 * Lake level slider component for adjusting lake elevation
 */
const LakeSlider: React.FC<LakeSliderProps> = ({ selectedLakeLevel, onLakeLevelChange }) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLakeLevelChange(parseFloat(e.target.value));
  };

  const minLevel = AVAILABLE_LAKE_LEVELS[0];
  const maxLevel = AVAILABLE_LAKE_LEVELS[AVAILABLE_LAKE_LEVELS.length - 1];

  return (
    <LakeSliderContainer>
      <SliderHeader>
        <SliderTitle>Lake Level</SliderTitle>
      </SliderHeader>
      <SliderContent>
        <CurrentLevelDisplay>
          <LevelValue>{metersToFeet(selectedLakeLevel).toFixed(1)} ft</LevelValue>
          <LevelSubValue>{selectedLakeLevel.toFixed(1)}m ASL</LevelSubValue>
        </CurrentLevelDisplay>
        <SliderWrapper>
          <SliderInput
            type="range"
            min={minLevel}
            max={maxLevel}
            value={selectedLakeLevel}
            onChange={handleSliderChange}
            step={0.1}
          />
          <SliderLabels>
            <SliderLabel>{metersToFeet(minLevel).toFixed(1)} ft</SliderLabel>
            <SliderLabel>{metersToFeet((minLevel + maxLevel) / 2).toFixed(1)} ft</SliderLabel>
            <SliderLabel>{metersToFeet(maxLevel).toFixed(1)} ft</SliderLabel>
          </SliderLabels>
        </SliderWrapper>
        <SliderDescription>
          Adjust the slider to see how different lake levels affect the ecosystem and surrounding communities
        </SliderDescription>
      </SliderContent>
    </LakeSliderContainer>
  );
};

const LakeSliderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 29, 12, 0.1);
  margin: ${({ theme }) => theme.spacing.lg} 0;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: rgba(117, 29, 12, 0.2);
  }
`;

const SliderHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  background: linear-gradient(
    to bottom,
    rgba(117, 29, 12, 0.05),
    rgba(249, 246, 239, 0)
  );
`;

const SliderTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 0;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const SliderContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CurrentLevelDisplay = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: rgba(249, 246, 239, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid rgba(117, 29, 12, 0.1);
`;

const LevelValue = styled.div`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-family: ${({ theme }) => theme.typography.displayFont};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const LevelSubValue = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  letter-spacing: 0.3px;
`;

const SliderWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const SliderInput = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, 
    ${({ theme }) => theme.colors.rockyMountainRust}, 
    ${({ theme }) => theme.colors.canyonlandsTan}, 
    ${({ theme }) => theme.colors.spiralJettySage}
  );
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  margin: ${({ theme }) => theme.spacing.md} 0;
  cursor: pointer;
  transition: all 0.2s ease;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.moabMahogany};
    border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.moabMahogany};
    border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  &:focus {
    outline: none;
    
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    &::-moz-range-thumb {
      box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const SliderLabel = styled.span`
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.light};
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const SliderDescription = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin: ${({ theme }) => theme.spacing.md} 0 0 0;
  line-height: 1.6;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export default LakeSlider; 