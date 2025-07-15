import React, { useState } from 'react';
import styled from 'styled-components';
import { HelpCircle, X } from 'lucide-react';

interface ErodibilityLegendProps {
  visible: boolean;
  sidebarOpen?: boolean;
}

/**
 * Horizontal soil erodibility legend component showing red tones from light to dark
 */
const ErodibilityLegend: React.FC<ErodibilityLegendProps> = ({ visible, sidebarOpen = false }) => {
  const [showStoryMap, setShowStoryMap] = useState(false);

  if (!visible) return null;

  return (
    <>
      <LegendContainer>
        <LegendTitleContainer>
          <LegendTitle>
            Soil <HelpIcon
              onClick={() => setShowStoryMap(true)}
              title="Learn more about soil erodibility"
            >
              <HelpCircle />
            </HelpIcon>
          </LegendTitle>
          <LegendSubtitle>Erodibility</LegendSubtitle>
        </LegendTitleContainer>
        <LegendBar>
          <LabelContainer>
            <LegendLabel>High</LegendLabel>
          </LabelContainer>
          <ColorGradient />
          <LabelContainer>
            <LegendLabel>Low</LegendLabel>
          </LabelContainer>
        </LegendBar>
      </LegendContainer>

      {/* Story Map Modal */}
      {showStoryMap && (
        <StoryMapModal onClick={() => setShowStoryMap(false)}>
          <StoryMapContent onClick={(e) => e.stopPropagation()}>
            <StoryMapCloseButton onClick={() => setShowStoryMap(false)}>
              <X />
            </StoryMapCloseButton>
            <StoryMapIframe
              src="https://storymaps.arcgis.com/stories/8e1c5b2194184d54b89662719439dddd#ref-n-kSOT5i"
              allowFullScreen
              allow="geolocation"
              title="Soil Erodibility Interactive Story"
            />
          </StoryMapContent>
        </StoryMapModal>
      )}
    </>
  );
};

const LegendContainer = styled.div`
  position: absolute;
  top: calc(16px + 260px);  /* Reduced gap between legends */
  right: 16px;  /* Changed back from left: 16px to right: 16px */
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  backdrop-filter: blur(8px);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  min-width: 80px;
  width: 80px;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(117, 29, 12, 0.15);
    transform: scale(1.02);
  }
`;

const LegendTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  margin-bottom: 6px;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(117, 29, 12, 0.2);
`;

const LegendTitle = styled.div`
  font-size: 10px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-family: ${({ theme }) => theme.typography.displayFont};
  letter-spacing: 0.1px;
  text-transform: uppercase;
  text-align: left;
  line-height: 1.1;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LegendSubtitle = styled.div`
  font-size: 10px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-family: ${({ theme }) => theme.typography.displayFont};
  letter-spacing: 0.1px;
  text-transform: uppercase;
  text-align: left;
  line-height: 1.1;
`;

const HelpIcon = styled.button`
  background: ${({ theme }) => theme.colors.moabMahogany};
  border: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  color: ${({ theme }) => theme.colors.snowbirdWhite};
  cursor: pointer;
  padding: 1px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 0.9;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.colors.moabMahogany};
    border-color: ${({ theme }) => theme.colors.moabMahogany};
    transform: scale(1.05);
    box-shadow: 0 2px 4px rgba(117, 29, 12, 0.3);
  }

  svg {
    width: 8px;
    height: 8px;
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
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: absolute;
  top: 12px;
  right: 12px;
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

const LegendBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const ColorGradient = styled.div`
  width: 18px;
  height: 50px;
  background: linear-gradient(
    to bottom,
    #800000 0%,
    #cc0000 25%,
    #ff3333 50%,
    #ff6666 75%,
    #ffcccc 100%
  );
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid rgba(117, 29, 12, 0.2);
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LegendLabel = styled.span`
  font-size: 9px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  letter-spacing: 0.2px;
`;

export default ErodibilityLegend; 