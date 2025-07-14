import React from 'react';
import styled from 'styled-components';

interface DustLegendProps {
  visible: boolean;
}

/**
 * Horizontal PM₂.₅ dust concentrations legend component showing brown tones from light to dark
 */
const DustLegend: React.FC<DustLegendProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <LegendContainer>
      <LegendTitle>PM2.5</LegendTitle>
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
  top: calc(16px + 60px);
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
    #f7f2e9,  /* Warm off-white (low PM₂.₅) */
    #e8dcc6,  /* Light coffee with cream (moderate PM₂.₅) */
    #d6c5a2,  /* Café au lait (high PM₂.₅) */
    #c4a373,  /* Medium coffee (very high PM₂.₅) */
    #a0784a   /* Dark coffee (extremely high PM₂.₅) */
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

export default DustLegend; 