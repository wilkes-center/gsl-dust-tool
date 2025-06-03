import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, Play, Pause } from 'lucide-react';

interface StoryNavigationProps {
  currentSection: number;
  totalSections: number;
  isAutoPlaying: boolean;
  onSectionChange: (section: number) => void;
  onAutoPlayToggle: () => void;
  onBack: () => void;
}

/**
 * Story navigation component for controlling story progression
 */
const StoryNavigation: React.FC<StoryNavigationProps> = ({
  currentSection,
  totalSections,
  isAutoPlaying,
  onSectionChange,
  onAutoPlayToggle,
  onBack
}) => {
  return (
    <Navigation>
      <BackButton onClick={onBack}>
        <ChevronLeft size={20} />
        Back to Overview
      </BackButton>
      
      <NavControls>
        <AutoPlayButton onClick={onAutoPlayToggle} isPlaying={isAutoPlaying}>
          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
          {isAutoPlaying ? 'Pause' : 'Auto Play'}
        </AutoPlayButton>
        
        <NavDots>
          {Array.from({ length: totalSections }, (_, i) => (
            <NavDot
              key={i}
              active={i === currentSection}
              onClick={() => onSectionChange(i)}
            />
          ))}
        </NavDots>
      </NavControls>
    </Navigation>
  );
};

const Navigation = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  pointer-events: none;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 25px;
  color: #2c3e50;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  pointer-events: auto;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  pointer-events: auto;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const AutoPlayButton = styled.button<{ isPlaying: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${props => props.isPlaying ? 
    'linear-gradient(135deg, #e74c3c, #c0392b)' : 
    'linear-gradient(135deg, #27ae60, #229954)'
  };
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const NavDots = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const NavDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#3498db' : 'rgba(255, 255, 255, 0.6)'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${props => props.active ? '#2980b9' : 'rgba(255, 255, 255, 0.8)'};
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

export default StoryNavigation; 