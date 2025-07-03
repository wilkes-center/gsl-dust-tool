import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { ChevronUp, Clock, BarChart3, Calendar, Play, Pause } from 'lucide-react';
import {
  HorizontalTimeSliderContainer,
  HorizontalTimeSliderToggle,
  HorizontalTimeSliderContent,
  HorizontalTimeSliderHeader,
  HorizontalTimeSliderTrack,
  HorizontalTimeSliderInput,
  HorizontalTimeSliderTicks,
  HorizontalTimeSliderTick,
  HorizontalTimeSliderHourlyTick,
  HorizontalTimeSliderTickLabel
} from '../MapStyled';
import { PM25Data } from '../../utils/dataUtils';

interface HorizontalTimeSliderProps {
  pm25Data: PM25Data[];
  selectedTimestampIndex: number;
  onTimestampIndexChange: (index: number) => void;
  loading?: boolean;
  onModeChange?: (mode: 'averaged' | 'time-specific') => void;
}

interface TickMark {
  index: number;
  position: string;
  label: string;
  isSelected: boolean;
  isMain: boolean;
}

/**
 * Horizontal time slider component for navigating through PM25 data timestamps
 */
export const HorizontalTimeSlider: React.FC<HorizontalTimeSliderProps> = ({
  pm25Data,
  selectedTimestampIndex,
  onTimestampIndexChange,
  loading = false,
  onModeChange
}) => {
  const [expanded, setExpanded] = useState(false);
  const [mode, setMode] = useState<'averaged' | 'time-specific'>('averaged');
  const [isPlaying, setIsPlaying] = useState(false);
  const currentIndexRef = useRef(selectedTimestampIndex);

  // Update ref when selectedTimestampIndex changes
  useEffect(() => {
    currentIndexRef.current = selectedTimestampIndex;
  }, [selectedTimestampIndex]);

  // Get unique timestamps and sort them
  const timestamps = useMemo(() => {
    if (!pm25Data || pm25Data.length === 0) return [];
    
    const uniqueTimestamps = Array.from(new Set(
      pm25Data.map(data => data.timestamp).filter(Boolean)
    )).sort();
    
    return uniqueTimestamps;
  }, [pm25Data]);

  // Format timestamp for display
  const formatTimestamp = useCallback((timestamp: string) => {
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
        year: 'numeric',
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
  }, []);

  // Format timestamp for toggle button
  const formatToggleTimestamp = useCallback((timestamp: string) => {
    try {
      const year = parseInt(timestamp.substring(0, 4));
      const month = parseInt(timestamp.substring(4, 6)) - 1;
      const day = parseInt(timestamp.substring(6, 8));
      const hour = parseInt(timestamp.substring(8, 10));
      const minute = parseInt(timestamp.substring(10, 12));
      
      const utcDate = new Date(Date.UTC(year, month, day, hour, minute));
      
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Denver',
        month: 'numeric',
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
  }, []);

  // Get current timestamp
  const currentTimestamp = timestamps[selectedTimestampIndex] || '';
  const formattedCurrentTime = formatTimestamp(currentTimestamp);
  const shortCurrentTime = formatToggleTimestamp(currentTimestamp);

  // Handle slider change
  const handleSliderChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(event.target.value, 10);
    onTimestampIndexChange(newIndex);
  }, [onTimestampIndexChange]);

  // Handle mode change
  const handleModeChange = useCallback((newMode: 'averaged' | 'time-specific') => {
    setMode(newMode);
    if (onModeChange) {
      onModeChange(newMode);
    }
    
    if (newMode === 'time-specific') {
      setExpanded(true);
    } else {
      setExpanded(false);
      setIsPlaying(false);
    }
  }, [onModeChange]);

  // Handle manual toggle
  const handleToggle = useCallback(() => {
    if (mode === 'time-specific') {
      setExpanded(!expanded);
    }
  }, [mode, expanded]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || mode !== 'time-specific' || timestamps.length <= 1) return;

    const interval = setInterval(() => {
      const currentIndex = currentIndexRef.current;
      if (currentIndex >= timestamps.length - 1) {
        setIsPlaying(false);
        onTimestampIndexChange(0);
      } else {
        onTimestampIndexChange(currentIndex + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, mode, timestamps.length, onTimestampIndexChange]);

  // Generate smart tick marks
  const generateTicks = useCallback(() => {
    if (timestamps.length === 0) return [];
    
    const maxTicks = 6;
    const mainTicks: TickMark[] = [];
    const hourlyTicks: TickMark[] = [];
    
    // Generate main date ticks (positioned at first occurrence of each date)
    const seenDates = new Set<string>();
    
    if (timestamps.length <= maxTicks) {
      // Show all timestamps if we have few enough, but position labels at first occurrence of each date
      timestamps.forEach((timestamp, index) => {
        const fullFormatted = formatTimestamp(timestamp);
        const dateLabel = fullFormatted.split(' ').slice(0, 3).join(' '); // Include year (MMM DD, YYYY)
        if (!seenDates.has(dateLabel)) {
          seenDates.add(dateLabel);
          // Find the first occurrence of this date
          const firstOccurrenceIndex = timestamps.findIndex(ts => {
            const tsFormatted = formatTimestamp(ts);
            const tsDateLabel = tsFormatted.split(' ').slice(0, 3).join(' ');
            return tsDateLabel === dateLabel;
          });
          mainTicks.push({
            index: firstOccurrenceIndex,
            position: `${(firstOccurrenceIndex / (timestamps.length - 1)) * 100}%`,
            label: dateLabel,
            isSelected: firstOccurrenceIndex === selectedTimestampIndex,
            isMain: true
          });
        }
      });
    } else {
      // Show smart selection of timestamps, positioning labels at first occurrence of each date
      const step = Math.floor(timestamps.length / (maxTicks - 1));
      
      for (let i = 0; i < maxTicks - 1; i++) {
        const index = i * step;
        const fullFormatted = formatTimestamp(timestamps[index]);
        const dateLabel = fullFormatted.split(' ').slice(0, 3).join(' '); // Include year (MMM DD, YYYY)
        if (!seenDates.has(dateLabel)) {
          seenDates.add(dateLabel);
          // Find the first occurrence of this date
          const firstOccurrenceIndex = timestamps.findIndex(ts => {
            const tsFormatted = formatTimestamp(ts);
            const tsDateLabel = tsFormatted.split(' ').slice(0, 3).join(' ');
            return tsDateLabel === dateLabel;
          });
          mainTicks.push({
            index: firstOccurrenceIndex,
            position: `${(firstOccurrenceIndex / (timestamps.length - 1)) * 100}%`,
            label: dateLabel,
            isSelected: firstOccurrenceIndex === selectedTimestampIndex,
            isMain: true
          });
        }
      }
      
      // Always include the last timestamp if its date is unique
      const lastIndex = timestamps.length - 1;
      const lastFullFormatted = formatTimestamp(timestamps[lastIndex]);
      const lastDateLabel = lastFullFormatted.split(' ').slice(0, 3).join(' '); // Include year (MMM DD, YYYY)
      if (!seenDates.has(lastDateLabel)) {
        // Find the first occurrence of this date
        const firstOccurrenceIndex = timestamps.findIndex(ts => {
          const tsFormatted = formatTimestamp(ts);
          const tsDateLabel = tsFormatted.split(' ').slice(0, 3).join(' ');
          return tsDateLabel === lastDateLabel;
        });
        mainTicks.push({
          index: firstOccurrenceIndex,
          position: `${(firstOccurrenceIndex / (timestamps.length - 1)) * 100}%`,
          label: lastDateLabel,
          isSelected: firstOccurrenceIndex === selectedTimestampIndex,
          isMain: true
        });
      }
    }
    
    // Generate hourly ticks for all timestamps (no text labels, just markers)
    timestamps.forEach((timestamp, index) => {
      // Skip if this is already a main tick
      const isMainTick = mainTicks.some(tick => tick.index === index);
      if (!isMainTick) {
        hourlyTicks.push({
          index,
          position: `${(index / (timestamps.length - 1)) * 100}%`,
          label: '', // No label for hourly ticks
          isSelected: index === selectedTimestampIndex,
          isMain: false
        });
      }
    });
    
    // Combine main ticks and hourly ticks
    return [...mainTicks, ...hourlyTicks];
  }, [timestamps, selectedTimestampIndex, formatTimestamp]);

  const ticks = generateTicks();

  // Calculate progress percentage for the slider track
  const progressPercentage = timestamps.length > 1 
    ? (selectedTimestampIndex / (timestamps.length - 1)) * 100 
    : 0;

  return (
    <HorizontalTimeSliderContainer $expanded={expanded}>
      {!expanded ? (
        // Mode selection buttons when collapsed
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%', 
          width: '100%'
        }}>
          <button
            onClick={() => handleModeChange('averaged')}
            style={{
              flex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              background: mode === 'averaged' ? '#751d0c' : 'rgba(117, 29, 12, 0.08)',
              color: mode === 'averaged' ? 'white' : '#751d0c',
              border: '1px solid rgba(117, 29, 12, 0.2)',
              borderRadius: '0',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '12px',
              fontWeight: '600',
              padding: '0',
              margin: '0',
              boxShadow: mode === 'averaged' ? '0 1px 3px rgba(117, 29, 12, 0.3)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (mode !== 'averaged') {
                e.currentTarget.style.background = 'rgba(117, 29, 12, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(117, 29, 12, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (mode !== 'averaged') {
                e.currentTarget.style.background = 'rgba(117, 29, 12, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(117, 29, 12, 0.2)';
              }
            }}
          >
            <BarChart3 size={12} />
            Averaged
          </button>
          
          <button
            onClick={() => handleModeChange('time-specific')}
            style={{
              flex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              background: mode === 'time-specific' ? '#751d0c' : 'rgba(117, 29, 12, 0.08)',
              color: mode === 'time-specific' ? 'white' : '#751d0c',
              border: '1px solid rgba(117, 29, 12, 0.2)',
              borderRadius: '0',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '12px',
              fontWeight: '600',
              padding: '0',
              margin: '0',
              boxShadow: mode === 'time-specific' ? '0 1px 3px rgba(117, 29, 12, 0.3)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (mode !== 'time-specific') {
                e.currentTarget.style.background = 'rgba(117, 29, 12, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(117, 29, 12, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (mode !== 'time-specific') {
                e.currentTarget.style.background = 'rgba(117, 29, 12, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(117, 29, 12, 0.2)';
              }
            }}
          >
            <Calendar size={12} />
            Time-specific
          </button>
        </div>
      ) : (
        // Expanded timeline view
        <>
          <HorizontalTimeSliderToggle
            $expanded={expanded}
            onClick={handleToggle}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Calendar size={16} />
              <span>Timeline</span>
              <span className="timestamp">{formattedCurrentTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {timestamps.length > 1 && (
                <button
                  className="play-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                >
                  {isPlaying ? (
                    <Pause size={12} />
                  ) : (
                    <Play size={12} />
                  )}
                </button>
              )}
              <button
                className="averaged-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleModeChange('averaged');
                }}
              >
                <BarChart3 size={10} style={{ marginRight: '4px' }} />
                Averaged
              </button>
              <ChevronUp size={16} />
            </div>
          </HorizontalTimeSliderToggle>

          <HorizontalTimeSliderContent $expanded={expanded}>
            {loading ? (
              <div style={{ 
                padding: '20px', 
                textAlign: 'center', 
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                height: '84px'
              }}>
                <Clock size={16} />
                Loading timeline data...
              </div>
            ) : timestamps.length === 0 ? (
              <div style={{ 
                padding: '20px', 
                textAlign: 'center', 
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                height: '84px'
              }}>
                <Calendar size={16} />
                No timeline data available
              </div>
            ) : (
              <HorizontalTimeSliderTrack>
                <HorizontalTimeSliderInput
                  type="range"
                  min={0}
                  max={timestamps.length - 1}
                  value={selectedTimestampIndex}
                  onChange={handleSliderChange}
                  style={{
                    '--progress': `${progressPercentage}%`
                  } as React.CSSProperties}
                />
                
                <HorizontalTimeSliderTicks>
                  {ticks.map((tick) => (
                    <div key={tick.index} style={{ position: 'relative' }}>
                      {tick.isMain ? (
                        <>
                          <HorizontalTimeSliderTick
                            $left={tick.position}
                            $isSelected={tick.isSelected}
                          />
                          <HorizontalTimeSliderTickLabel
                            $isSelected={tick.isSelected}
                            style={{ left: tick.position }}
                          >
                            {tick.label}
                          </HorizontalTimeSliderTickLabel>
                        </>
                      ) : (
                        <HorizontalTimeSliderHourlyTick
                          $left={tick.position}
                          $isSelected={tick.isSelected}
                        />
                      )}
                    </div>
                  ))}
                </HorizontalTimeSliderTicks>
              </HorizontalTimeSliderTrack>
            )}
          </HorizontalTimeSliderContent>
        </>
      )}
    </HorizontalTimeSliderContainer>
  );
};

export default HorizontalTimeSlider; 