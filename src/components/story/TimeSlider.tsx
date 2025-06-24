import React from 'react';
import styled from 'styled-components';

interface TimeSliderProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

/**
 * Time slider component for selecting years in satellite timeline
 */
const TimeSlider: React.FC<TimeSliderProps> = ({ selectedYear, onYearChange }) => {
  const availableYears = [1986, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2021, 2022, 2023];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // Find the closest available year
    const closest = availableYears.reduce((prev, curr) => 
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    onYearChange(closest);
  };

  return (
    <TimeSliderContainer>
      <TimeSliderTitle>Satellite Timeline</TimeSliderTitle>
      <YearDisplay>{selectedYear}</YearDisplay>
      <SliderWrapper>
        <SliderInput
          type="range"
          min={1986}
          max={2023}
          value={selectedYear}
          onChange={handleSliderChange}
          step={1}
        />
        <YearMarkers>
          {availableYears.map(year => (
            <YearMarker 
              key={year} 
              style={{ 
                left: `${((year - 1986) / (2023 - 1986)) * 100}%` 
              }}
              $active={year === selectedYear}
            >
              {year}
            </YearMarker>
          ))}
        </YearMarkers>
      </SliderWrapper>
      <TimelineDescription>
        Drag the slider to see how the Great Salt Lake has changed over time
      </TimelineDescription>
    </TimeSliderContainer>
  );
};

const TimeSliderContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const TimeSliderTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 15px 0;
  text-align: center;
`;

const YearDisplay = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #3498db;
  text-align: center;
  margin-bottom: 20px;
`;

const SliderWrapper = styled.div`
  position: relative;
  margin: 20px 0 40px 0;
`;

const SliderInput = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #3498db, #2980b9);
  outline: none;
  -webkit-appearance: none;
  appearance: none;

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

const YearMarkers = styled.div`
  position: relative;
  height: 30px;
  margin-top: 10px;
`;

const YearMarker = styled.div<{ $active: boolean }>`
  position: absolute;
  transform: translateX(-50%);
  font-size: 10px;
  color: ${props => props.$active ? '#2c3e50' : '#7f8c8d'};
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  text-align: center;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 10px;
    background: ${props => props.$active ? '#2c3e50' : '#bdc3c7'};
  }
`;

const TimelineDescription = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  text-align: center;
  margin: 0;
  font-style: italic;
`;

export default TimeSlider; 