import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { LakeLevelSliderComponent } from './LakeLevelSlider';
import { DustContribution } from '../../utils/dataUtils';

// Styled components
const TimeSliderContainer = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: calc(${({ theme }) => theme.spacing.md} + var(--lake-level-height) + 20px);
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  display: flex;
  flex-direction: column;
  width: 250px;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  max-height: calc(100vh - 200px);
  overflow-y: auto;
`;

const TimeHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TimeTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  letter-spacing: 0.8px;
`;

const TimeDisplay = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const NavigationControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const NavButton = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xs};
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  &:hover:not(:disabled) {
    background: rgba(117, 29, 12, 0.05);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const PlayButton = styled.button<{ $isPlaying: boolean }>`
  flex: 1.5;
  padding: ${({ theme }) => theme.spacing.xs};
  background: ${props => props.$isPlaying ? props.theme.colors.moabMahogany : 'white'};
  border: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${props => props.$isPlaying ? 'white' : props.theme.colors.moabMahogany};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  &:hover {
    background: ${props => props.$isPlaying ? 'rgba(117, 29, 12, 0.8)' : 'rgba(117, 29, 12, 0.05)'};
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const CalendarContainer = styled.div`
  background: rgba(249, 246, 239, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const DateTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(117, 29, 12, 0.1);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(117, 29, 12, 0.3);
    border-radius: 2px;
  }
`;

const DateTab = styled.button<{ $isActive: boolean }>`
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.xs};
  background: ${props => props.$isActive ? props.theme.colors.moabMahogany : 'white'};
  border: 1px solid ${props => props.$isActive ? props.theme.colors.moabMahogany : 'rgba(117, 29, 12, 0.2)'};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.olympicParkObsidian};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.$isActive ? props.theme.colors.moabMahogany : 'rgba(117, 29, 12, 0.05)'};
  }
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xxs};
`;

const TimeCell = styled.button<{ $isSelected: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs};
  background: ${props => props.$isSelected ? props.theme.colors.moabMahogany : 'white'};
  border: 1px solid ${props => props.$isSelected ? props.theme.colors.moabMahogany : 'rgba(117, 29, 12, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${props => props.$isSelected ? 'white' : props.theme.colors.olympicParkObsidian};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.$isSelected ? props.theme.colors.moabMahogany : 'rgba(117, 29, 12, 0.05)'};
    border-color: ${({ theme }) => theme.colors.moabMahogany};
  }
`;

interface TimeSliderComponentProps {
  selectedElevation: number;
  onElevationChange: (elevation: number) => void;
  selectedLakeLevel: number;
  onLakeLevelChange: (level: number) => void;
  selectedTimestampIndex: number;
  setSelectedTimestampIndex: (index: number) => void;
  onTimestampChange?: (timestamp: string) => void;
  pm25Data: any[];
  dustContributions: Record<string, DustContribution>;
  lakeLevel?: number;
}

export function TimeSliderComponent({
  selectedElevation,
  onElevationChange,
  selectedLakeLevel,
  onLakeLevelChange,
  selectedTimestampIndex,
  setSelectedTimestampIndex,
  onTimestampChange,
  pm25Data,
  dustContributions,
  lakeLevel,
}: TimeSliderComponentProps) {
  // All hooks must be declared before any conditional returns
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed] = useState(1000); // milliseconds
  const playIntervalRef = useRef<number | null>(null);
  const dateTabsRef = useRef<HTMLDivElement>(null);
  
  // Extract timestamps from pm25Data
  const timestamps = pm25Data?.map(d => d.timestamp) || [];
  
  // Format timestamp for display
  const formatTimestamp = (timestamp: string) => {
    if (!timestamp || timestamp.length < 12) return 'Invalid timestamp';
    
    const year = timestamp.substring(0, 4);
    const month = timestamp.substring(4, 6);
    const day = timestamp.substring(6, 8);
    const hour = timestamp.substring(8, 10);
    const min = timestamp.substring(10, 12);
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[parseInt(month) - 1];
    
    return `${monthName} ${parseInt(day)}, ${year} ${hour}:${min} UTC`;
  };
  
  // Format date for display (MM/DD)
  const formatDateDisplay = (dateStr: string) => {
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${month}/${day}`;
  };
  
  // Format time for display (HH:MM)
  const formatTimeDisplay = (timeStr: string) => {
    const hour = timeStr.substring(8, 10);
    const min = timeStr.substring(10, 12);
    return `${hour}:${min}`;
  };
  
  // Group timestamps by date
  const dateGroups = new Map<string, string[]>();
  timestamps.forEach(ts => {
    const date = ts.substring(0, 8); // YYYYMMDD
    if (!dateGroups.has(date)) {
      dateGroups.set(date, []);
    }
    dateGroups.get(date)?.push(ts);
  });
  
  // Extract unique dates
  const uniqueDates = Array.from(dateGroups.keys());
  
  // Get current date and times
  const currentTimestamp = timestamps[selectedTimestampIndex] || '';
  const currentDate = currentTimestamp.substring(0, 8);
  const currentDateIndex = uniqueDates.indexOf(currentDate);
  
  // Handle date tab selection
  const handleDateSelect = (date: string) => {
    const index = timestamps.findIndex(ts => ts.startsWith(date));
    if (index !== -1) {
      setSelectedTimestampIndex(index);
      if (onTimestampChange && timestamps[index]) {
        onTimestampChange(timestamps[index]);
      }
    }
  };
  
  // Handle time cell selection
  const handleTimeSelect = (timestamp: string) => {
    const index = timestamps.indexOf(timestamp);
    if (index !== -1) {
      setSelectedTimestampIndex(index);
      if (onTimestampChange) {
        onTimestampChange(timestamp);
      }
    }
  };
  
  // Handle play/pause
  const togglePlayback = () => {
    if (isPlaying) {
      // Stop playback
      setIsPlaying(false);
      if (playIntervalRef.current !== null) {
        clearInterval(playIntervalRef.current);
        playIntervalRef.current = null;
      }
      return;
    }
    
    // Start playback
    setIsPlaying(true);
    
    const playInterval = setInterval(() => {
      const nextIndex = selectedTimestampIndex + 1;
      if (nextIndex >= timestamps.length) {
        // End of sequence, stop playback
        setIsPlaying(false);
        if (playIntervalRef.current !== null) {
          clearInterval(playIntervalRef.current);
          playIntervalRef.current = null;
        }
        return;
      }
      setSelectedTimestampIndex(nextIndex);
      if (onTimestampChange && timestamps[nextIndex]) {
        onTimestampChange(timestamps[nextIndex]);
      }
    }, playbackSpeed);
    
    playIntervalRef.current = playInterval as unknown as number;
  };
  
  // Handle next/prev date
  const handlePrevDate = () => {
    if (currentDateIndex > 0) {
      const prevDate = uniqueDates[currentDateIndex - 1];
      handleDateSelect(prevDate);
    }
  };
  
  const handleNextDate = () => {
    if (currentDateIndex < uniqueDates.length - 1) {
      const nextDate = uniqueDates[currentDateIndex + 1];
      handleDateSelect(nextDate);
    }
  };
  
  // Clean up the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (playIntervalRef.current !== null) {
        clearInterval(playIntervalRef.current);
        playIntervalRef.current = null;
      }
    };
  }, []);
  
  // Auto-scroll date tabs to show current date
  useEffect(() => {
    if (dateTabsRef.current && currentDateIndex >= 0) {
      const tabElement = dateTabsRef.current.children[currentDateIndex] as HTMLElement;
      if (tabElement) {
        tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [currentDateIndex]);
  
  // Early return AFTER all hooks
  if (!timestamps || timestamps.length === 0) {
    return (
      <TimeSliderContainer>
        <LakeLevelSliderComponent
          selectedElevation={selectedElevation}
          onElevationChange={onElevationChange}
          selectedLakeLevel={selectedLakeLevel}
          onLakeLevelChange={onLakeLevelChange}
        />
      </TimeSliderContainer>
    );
  }
  
  const formattedTimestamp = formatTimestamp(timestamps[selectedTimestampIndex]);
  
  return (
    <TimeSliderContainer>
      <LakeLevelSliderComponent
        selectedElevation={selectedElevation}
        onElevationChange={onElevationChange}
        selectedLakeLevel={selectedLakeLevel}
        onLakeLevelChange={onLakeLevelChange}
      />
      
      <TimeHeader>
        <TimeTitle>TIME PERIOD</TimeTitle>
        <TimeDisplay>{formattedTimestamp}</TimeDisplay>
      </TimeHeader>
      
      <NavigationControls>
        <NavButton 
          onClick={handlePrevDate}
          disabled={currentDateIndex === 0}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Prev
        </NavButton>
        
        <PlayButton 
          onClick={togglePlayback}
          $isPlaying={isPlaying}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            {isPlaying ? (
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            ) : (
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
          {isPlaying ? 'Pause' : 'Play'}
        </PlayButton>
        
        <NavButton 
          onClick={handleNextDate}
          disabled={currentDateIndex === uniqueDates.length - 1}
        >
          Next
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </NavButton>
      </NavigationControls>
      
      <CalendarContainer>
        <DateTabs ref={dateTabsRef}>
          {uniqueDates.map((date) => (
            <DateTab
              key={date}
              $isActive={date === currentDate}
              onClick={() => handleDateSelect(date)}
            >
              {formatDateDisplay(date)}
            </DateTab>
          ))}
        </DateTabs>
        
        <TimeGrid>
          {dateGroups.get(currentDate)?.map(timestamp => {
            const isSelected = timestamp === currentTimestamp;
            return (
              <TimeCell
                key={timestamp}
                $isSelected={isSelected}
                onClick={() => handleTimeSelect(timestamp)}
              >
                {formatTimeDisplay(timestamp)}
              </TimeCell>
            );
          })}
        </TimeGrid>
      </CalendarContainer>
    </TimeSliderContainer>
  );
}