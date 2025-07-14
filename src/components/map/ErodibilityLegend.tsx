import React from 'react';
import styled from 'styled-components';

interface ErodibilityLegendProps {
  visible: boolean;
}

/**
 * Horizontal soil erodibility legend component showing red tones from light to dark
 */
const ErodibilityLegend: React.FC<ErodibilityLegendProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <LegendContainer>
      <LegendTitle>Soil Erodibility</LegendTitle>
      <LegendBar>
        <ColorGradient />
        <LabelContainer>
          <LegendLabel>Low</LegendLabel>
          <LegendLabel>High</LegendLabel>
        </LabelContainer>
      </LegendBar>
    </LegendContainer>
  );
};

const LegendContainer = styled.div`
  position: absolute;
  top: calc(16px + 180px);  /* Increased from 120px to 180px to prevent overlap */
  right: 16px;
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  backdrop-filter: blur(8px);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  min-width: 200px;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(117, 29, 12, 0.15);
    transform: scale(1.02);
  }
`;

const LegendTitle = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.displayFont};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  border-bottom: 1px solid rgba(117, 29, 12, 0.2);
`;

const LegendBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ColorGradient = styled.div`
  height: 12px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: linear-gradient(to right, 
    #ffcccb,  /* Light red (low erodibility) */
    #ff9999,  /* Light-medium red */
    #ff6666,  /* Medium red */
    #ff3333,  /* Medium-dark red */
    #cc0000,  /* Dark red */
    #800000   /* Very dark red (high erodibility) */
  );
  border: 1px solid rgba(117, 29, 12, 0.3);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xxs};
`;

const LegendLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  letter-spacing: 0.5px;
`;

export default ErodibilityLegend; 