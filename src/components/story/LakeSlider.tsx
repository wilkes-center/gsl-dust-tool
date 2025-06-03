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
      <SliderTitle>Lake Level: {Math.round(metersToFeet(selectedLakeLevel))} feet</SliderTitle>
      <SliderInput
        type="range"
        min={minLevel}
        max={maxLevel}
        value={selectedLakeLevel}
        onChange={handleSliderChange}
        step={0.1}
      />
      <SliderLabels>
        <SliderLabel>{Math.round(metersToFeet(minLevel))} ft</SliderLabel>
        <SliderLabel>{Math.round(metersToFeet((minLevel + maxLevel) / 2))} ft</SliderLabel>
        <SliderLabel>{Math.round(metersToFeet(maxLevel))} ft</SliderLabel>
      </SliderLabels>
      <SliderDescription>
        Adjust the slider to see how different lake levels affect the ecosystem and surrounding communities
      </SliderDescription>
    </LakeSliderContainer>
  );
};

const LakeSliderContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const SliderTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 15px 0;
  text-align: center;
`;

const SliderInput = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #e74c3c, #f39c12, #27ae60);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  margin: 20px 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2c3e50;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2c3e50;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const SliderLabel = styled.span`
  font-size: 12px;
  color: #7f8c8d;
  font-weight: 500;
`;

const SliderDescription = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  text-align: center;
  margin: 15px 0 0 0;
  font-style: italic;
`;

export default LakeSlider; 