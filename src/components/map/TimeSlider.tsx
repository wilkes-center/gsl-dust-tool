import React, { useMemo } from 'react';
import { TimeSliderContainer, TimeSliderHeader, TimeSlider as TimeSliderStyled, TimeSliderTicks, TimeSliderTick, TimeSliderTickLabel } from '../MapStyled';
import { PM25Data } from '../../utils/dataUtils';

interface TimeSliderProps {
  pm25Data: PM25Data[];
  selectedTimestampIndex: number;
  onTimestampIndexChange: (index: number) => void;
  loading?: boolean;
}

// Format timestamp for display (simplified version since convertToUtahTime is not exported)
const formatTimestamp = (timestamp: string) => {
  try {
    // Parse the UTC timestamp format: YYYYMMDDHHMM
    const year = parseInt(timestamp.substring(0, 4));
    const month = parseInt(timestamp.substring(4, 6)) - 1; // JS months are 0-based
    const day = parseInt(timestamp.substring(6, 8));
    const hour = parseInt(timestamp.substring(8, 10));
    const minute = parseInt(timestamp.substring(10, 12));
    
    const utcDate = new Date(Date.UTC(year, month, day, hour, minute));
    
    // Convert to Mountain Time (UTC-7 or UTC-6 depending on DST)
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Denver',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    
    return utcDate.toLocaleString('en-US', options);
  } catch (error) {
    console.error('Error formatting timestamp:', error);
    return timestamp;
  }
};

/**
 * Time slider component for navigating through PM25 data timestamps
 */
export const TimeSliderComponent: React.FC<TimeSliderProps> = ({
  pm25Data,
  selectedTimestampIndex,
  onTimestampIndexChange,
  loading = false
}) => {
  // Get unique timestamps and sort them
  const timestamps = useMemo(() => {
    if (!pm25Data || pm25Data.length === 0) return [];
    return pm25Data.map(data => data.timestamp).sort();
  }, [pm25Data]);

  // Get current timestamp
  const currentTimestamp = timestamps[selectedTimestampIndex] || '';
  const formattedCurrentTime = currentTimestamp ? formatTimestamp(currentTimestamp) : '';

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value);
    onTimestampIndexChange(newIndex);
  };

  // Generate tick marks for the slider
  const generateTicks = () => {
    if (timestamps.length === 0) return [];
    
    const ticks = [];
    const maxTicks = 10; // Maximum number of ticks to show
    const step = Math.max(1, Math.floor(timestamps.length / maxTicks));
    
    for (let i = 0; i < timestamps.length; i += step) {
      const position = (i / (timestamps.length - 1)) * 100;
      const isSelected = i === selectedTimestampIndex;
      const timestamp = timestamps[i];
      const formattedTime = formatTimestamp(timestamp);
      
      ticks.push({
        index: i,
        position: `${position}%`,
        isSelected,
        label: formattedTime,
        isEdge: i === 0 || i === timestamps.length - 1
      });
    }
    
    // Always include the last timestamp if not already included
    if (timestamps.length > 1 && ticks[ticks.length - 1].index !== timestamps.length - 1) {
      const lastIndex = timestamps.length - 1;
      ticks.push({
        index: lastIndex,
        position: '100%',
        isSelected: lastIndex === selectedTimestampIndex,
        label: formatTimestamp(timestamps[lastIndex]),
        isEdge: true
      });
    }
    
    return ticks;
  };

  if (loading || timestamps.length === 0) {
    return (
      <TimeSliderContainer>
        <TimeSliderHeader>
          <h3>Timeline</h3>
          <span>{loading ? 'Loading...' : 'No data available'}</span>
        </TimeSliderHeader>
      </TimeSliderContainer>
    );
  }

  const ticks = generateTicks();

  return (
    <TimeSliderContainer>
      <TimeSliderHeader>
        <h3>Timeline</h3>
        <span>{formattedCurrentTime}</span>
      </TimeSliderHeader>
      
      <TimeSliderStyled>
        <input
          type="range"
          min={0}
          max={timestamps.length - 1}
          value={selectedTimestampIndex}
          onChange={handleSliderChange}
        />
        
        <TimeSliderTicks>
          {ticks.map((tick, index) => (
            <React.Fragment key={tick.index}>
              <TimeSliderTick
                $left={tick.position}
                $isSelected={tick.isSelected}
              />
              <TimeSliderTickLabel
                $isSelected={tick.isSelected}
                $isEdge={tick.isEdge}
                $labelPosition={index % 2 === 0 ? 'above' : 'below'}
                style={{ bottom: tick.position }}
              >
                {tick.label}
              </TimeSliderTickLabel>
            </React.Fragment>
          ))}
        </TimeSliderTicks>
      </TimeSliderStyled>
    </TimeSliderContainer>
  );
};

export default TimeSliderComponent; 