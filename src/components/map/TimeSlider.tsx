// src/components/map/TimeSlider.tsx
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { formatTimestamp } from '../../utils/formatUtils';
import { TimeSliderContainer } from '../MapStyled';

// ====== Styled Components ======

const TimeHeader = styled.div`
  background: rgba(117, 29, 12, 0.05);
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.sm};
  margin: -${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  width: calc(100% + ${({ theme }) => theme.spacing.md} * 2);
  border-bottom: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 26px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  letter-spacing: 1.2px;
  text-align: center;
  width: 100%;
`;

const TimeDisplay = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  box-shadow: 0 2px 6px rgba(117, 29, 12, 0.15);
  width: 95%;
  text-align: center;
  margin: 0 auto ${({ theme }) => theme.spacing.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height: 1;
`;

// Calendar container
const CalendarContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxs};
  width: 100%;
  background: rgba(249, 246, 239, 0.6);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.xs};
  box-sizing: border-box;
`;

// Date selector tabs with better scrolling
const DateTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  max-width: 100%;
  padding-bottom: 2px;
  gap: 2px;
`;

const DateTab = styled.button<{ $isActive: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xxs}`};
  min-width: 40px;
  background: ${props => props.$isActive ? 'white' : 'transparent'};
  border: none;
  font-size: 10px;
  font-weight: ${props => props.$isActive 
    ? props.theme.typography.weights.semiBold 
    : props.theme.typography.weights.regular};
  color: ${props => props.$isActive 
    ? props.theme.colors.moabMahogany 
    : props.theme.colors.olympicParkObsidian};
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin: 0 1px 2px 1px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
  
  ${props => props.$isActive && `
    border-radius: 3px 3px 0 0;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.05);
    border-top: 1px solid ${props.theme.colors.moabMahogany};
    border-left: 1px solid ${props.theme.colors.moabMahogany};
    border-right: 1px solid ${props.theme.colors.moabMahogany};
    margin-bottom: -1px;
  `}
`;

// Time selector grid
const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.xxs};
  padding-right: ${({ theme }) => theme.spacing.xxs};
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 1px 3px rgba(117, 29, 12, 0.1);
  width: 100%;
  box-sizing: border-box;
`;

const TimeCell = styled.button<{ $isSelected: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.xxs};
  border: 1px solid ${props => props.$isSelected 
    ? props.theme.colors.moabMahogany 
    : 'rgba(117, 29, 12, 0.2)'};
  background: ${props => props.$isSelected 
    ? 'rgba(117, 29, 12, 0.1)' 
    : 'white'};
  font-size: 12px;
  font-weight: ${props => props.$isSelected 
    ? props.theme.typography.weights.semiBold 
    : props.theme.typography.weights.regular};
  color: ${props => props.$isSelected 
    ? props.theme.colors.moabMahogany 
    : props.theme.colors.olympicParkObsidian};
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  margin-left: -2px;
  
  &:hover {
    background: rgba(117, 29, 12, 0.05);
    border-color: ${props => props.$isSelected 
      ? props.theme.colors.moabMahogany 
      : 'rgba(117, 29, 12, 0.4)'};
  }
`;

// Navigation controls
const NavigationControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xxs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.xxs};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xxs};
`;

const BaseButton = styled.button`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  
  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
  
  &:hover:not(:disabled) {
    background: rgba(117, 29, 12, 0.05);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(117, 29, 12, 0.1);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const NavButton = styled(BaseButton)`
  min-width: 60px;
`;

const PlayButton = styled(BaseButton)<{ $isPlaying: boolean }>`
  background: ${props => props.$isPlaying ? 'rgba(117, 29, 12, 0.1)' : 'white'};
  min-width: 80px;
  margin: 0 ${({ theme }) => theme.spacing.xxs};
  
  &:hover:not(:disabled) {
    background: ${props => props.$isPlaying ? 'rgba(117, 29, 12, 0.15)' : 'rgba(117, 29, 12, 0.05)'};
  }
`;

// ====== Component ======

interface TimeSliderProps {
  timestamps: string[];
  selectedIndex: number;
  onChange: (index: number | ((prevIndex: number) => number)) => void;
}

export function TimeSliderComponent({
  timestamps,
  selectedIndex,
  onChange
}: TimeSliderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed] = useState(1000); // milliseconds
  
  // Reference to store the interval ID
  const playIntervalRef = useRef<number | null>(null);
  
  // Reference to date tabs container for scrolling
  const dateTabsRef = useRef<HTMLDivElement>(null);
  
  if (!timestamps || timestamps.length === 0) return null;
  
  // Format the currently selected timestamp
  const formattedTimestamp = formatTimestamp(timestamps[selectedIndex]);
  
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
  const currentTimestamp = timestamps[selectedIndex];
  const currentDate = currentTimestamp.substring(0, 8);
  const currentDateIndex = uniqueDates.indexOf(currentDate);
  
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
  
  // Handle date tab selection
  const handleDateSelect = (date: string) => {
    // Find the first timestamp for the selected date
    const index = timestamps.findIndex(ts => ts.startsWith(date));
    if (index !== -1) {
      onChange(index);
    }
  };
  
  // Handle time cell selection
  const handleTimeSelect = (timestamp: string) => {
    const index = timestamps.indexOf(timestamp);
    if (index !== -1) {
      onChange(index);
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
      onChange((prevIndex: number) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= timestamps.length) {
          // End of sequence, stop playback
          setIsPlaying(false);
          clearInterval(playInterval);
          playIntervalRef.current = null;
          return prevIndex;
        }
        return nextIndex;
      });
    }, playbackSpeed);
    
    playIntervalRef.current = playInterval;
  };
  
  // Handle next/prev date with auto-scrolling
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
  
  return (
    <TimeSliderContainer>
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

export default TimeSliderComponent;