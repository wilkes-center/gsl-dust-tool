import styled from 'styled-components';

// Main container for the map
export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  margin-top: 60px;
`;

// Map information sidebar
export const MapSidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  z-index: ${({ theme }) => theme.zIndices.mapOverlays};
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  margin: 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  max-width: 280px;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  
  h1 {
    font-family: ${({ theme }) => theme.typography.displayFont};
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 28px;
    letter-spacing: 1.5px;
    margin-top: 0;
  }
  
  > div {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    font-size: ${({ theme }) => theme.typography.sizes.body};
    letter-spacing: 0.5px;
  }
`;

// Map controls panel
export const MapControlsPanel = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  max-width: 250px;
  max-height: 70vh;
  overflow-y: auto;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  
  h2 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    letter-spacing: 1px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.moabMahogany};
    padding-bottom: ${({ theme }) => theme.spacing.xs};
    font-family: ${({ theme }) => theme.typography.displayFont};
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.olympicParkObsidian};
    font-size: 13px;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;

// Control group container
export const ControlGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  label {
    display: block;
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    color: ${({ theme }) => theme.colors.olympicParkObsidian};
    letter-spacing: 0.5px;
    font-size: 12px;
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }
`;

// Layer toggle styles
export const LayerToggle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding: 2px 0;
  
  input {
    margin-right: ${({ theme }) => theme.spacing.xs};
    width: auto;
    cursor: pointer;
    height: 14px;
    width: 14px;
    accent-color: ${({ theme }) => theme.colors.moabMahogany};
  }
  
  label {
    margin-bottom: 0;
    cursor: pointer;
    text-transform: none;
    letter-spacing: 0.5px;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
  }
`;

// Information box
export const InfoBox = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding-top: ${({ theme }) => theme.spacing.xs};
  border-top: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: 11px;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }
`;

// Legend container
export const Legend = styled.div`
  font-size: 11px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(249, 246, 239, 0.95);
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border-left: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  
  h4 {
    color: ${({ theme }) => theme.colors.moabMahogany};
    margin-top: ${({ theme }) => theme.spacing.xxs};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    letter-spacing: 0.5px;
    font-family: ${({ theme }) => theme.typography.displayFont};
  }
`;

// Legend item
export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  font-size: 11px;
  letter-spacing: 0.5px;
`;

// Color box for legend
export const ColorBox = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid rgba(117, 29, 12, 0.3);
`;

// Lake level slider container
export const LakeLevelSliderContainer = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: ${({ theme }) => theme.spacing.md};  /* Position from top */
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  background: linear-gradient(
    to bottom,
    rgba(249, 246, 239, 1),
    rgba(249, 246, 239, 0.9)
  );
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

// Lake level slider
export const LakeLevelSlider = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 10px;
  margin: 4px 0;

  /* Enhanced slider track visual */
  &:before {
    content: '';
    position: absolute;
    height: 160px;
    width: 6px;
    background: linear-gradient(to bottom,
      rgba(210, 180, 140, 0.5),
      rgba(117, 29, 12, 0.5)
    );
    border-radius: 3px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  input[type="range"] {
    margin: ${({ theme }) => theme.spacing.xs} 0;
    cursor: pointer;
    position: relative;
    z-index: 10;
    writing-mode: vertical-lr;
    direction: rtl;
    accent-color: ${({ theme }) => theme.colors.moabMahogany};
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 28px;
    height: 160px;
    padding: 0;

    &::-webkit-slider-runnable-track {
      height: 6px;
      background: linear-gradient(to top,
        rgba(117, 29, 12, 0.7),
        rgba(210, 180, 140, 0.7)
      );
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2),
                  0 0 5px rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(117, 29, 12, 0.4);
    }

    &::-moz-range-track {
      height: 6px;
      background: linear-gradient(to top,
        rgba(117, 29, 12, 0.7),
        rgba(210, 180, 140, 0.7)
      );
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2),
                  0 0 5px rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(117, 29, 12, 0.4);
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.moabMahogany};
      border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      margin-top: -8px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;

      /* Inner highlight effect */
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
      }

      &:hover {
        background: ${({ theme }) => theme.colors.olympicParkObsidian};
        transform: scale(1.15);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    &::-moz-range-thumb {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.moabMahogany};
      border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: ${({ theme }) => theme.colors.olympicParkObsidian};
        transform: scale(1.15);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    /* Focus state */
    &:focus {
      outline: none;

      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 5px rgba(0, 0, 0, 0.3);
      }

      &::-moz-range-thumb {
        box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

// Lake level min/max labels
export const LakeLevelMinMax = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  margin: 2px 0;
`;

// Lake level display
export const LakeLevelDisplay = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  margin-top: 4px;
  padding: 4px 8px;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

// Lake level ticks container
export const LakeLevelTicks = styled.div`
  position: absolute;
  width: 12px;
  height: 100%;
  margin-left: ${({ theme }) => theme.spacing.xxs};
`;

// Lake level tick mark
export const LakeLevelTick = styled.div<{ $bottom: string; $isSelected: boolean }>`
  position: absolute;
  bottom: ${props => props.$bottom};
  transform: translateY(50%);
  width: ${props => props.$isSelected ? '18px' : '8px'};
  height: ${props => props.$isSelected ? '4px' : '2px'};
  background-color: ${props => props.$isSelected
    ? props.theme.colors.moabMahogany
    : 'rgba(117, 29, 12, 0.4)'};
  border-radius: ${props => props.$isSelected ? '2px' : '1px'};
  left: 0;
  transition: all 0.2s ease;

  /* Add glow effect for selected tick */
  ${props => props.$isSelected && `
    box-shadow: 0 0 4px rgba(117, 29, 12, 0.3);
  `}

  /* Add hover effect for non-selected ticks */
  ${props => !props.$isSelected && `
    &:hover {
      width: 12px;
      background-color: rgba(117, 29, 12, 0.6);
    }
  `}
`;

// Lake level tick label
export const LakeLevelTickLabel = styled.span<{ $isSelected: boolean }>`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-size: ${props => props.$isSelected ? '11px' : '9px'};
  color: ${props => props.$isSelected
    ? props.theme.colors.moabMahogany
    : props.theme.colors.olympicParkObsidian};
  font-weight: ${props => props.$isSelected
    ? props.theme.typography.weights.semiBold
    : props.theme.typography.weights.regular};
  white-space: nowrap;
  left: 22px;
  pointer-events: none;
  transition: all 0.15s ease;
  opacity: ${props => props.$isSelected ? 1 : 0.8};

  /* Add text glow for selected label */
  ${props => props.$isSelected && `
    text-shadow: 0 0 1px rgba(117, 29, 12, 0.2);
    letter-spacing: 0.02em;
  `}
`;

// Select dropdown
export const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.moabMahogany};
    box-shadow: 0 0 0 2px rgba(117, 29, 12, 0.2);
  }
`;

// Button
export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.moabMahogany};
  color: ${({ theme }) => theme.colors.snowbirdWhite};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: rgba(117, 29, 12, 0.8);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Popup content container
export const PopupContent = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  
  h4 {
    font-size: ${({ theme }) => theme.typography.sizes.body};
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-family: ${({ theme }) => theme.typography.displayFont};
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.sizes.small};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }
`;

// Color bar for visualizing values in popups
export const ColorBar = styled.div<{ backgroundColor: string }>`
  height: 6px;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

// Time slider container
export const TimeSliderContainer = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: calc(${({ theme }) => theme.spacing.md} + var(--lake-level-height) + 20px);  /* Position relative to LakeLevelSlider height */
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  background: linear-gradient(
    to bottom,
    rgba(249, 246, 239, 1),
    rgba(249, 246, 239, 0.9)
  );
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  max-height: calc(100vh - var(--lake-level-height) - ${({ theme }) => theme.spacing.md} * 3 - 20px);
`;

export const TimeSliderHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #f9f6ef;
  border-radius: 12px;
  padding: 8px 6px;
  margin-bottom: 12px;
  border: none;
  box-shadow: none;

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-size: 26px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    font-family: ${({ theme }) => theme.typography.displayFont};
    letter-spacing: 1.2px;
    margin-bottom: 6px;
  }

  span {
    color: ${({ theme }) => theme.colors.olympicParkObsidian};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    font-size: 14px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background: #fff;
    padding: 4px 10px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(224,183,164,0.08);
    margin-bottom: 6px;
    margin-top: 2px;
    min-width: 80px;
    text-align: center;
    display: inline-block;
  }
`;

export const TimeSlider = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 10px;
  margin: 4px 0;

  input[type="range"] {
    margin: ${({ theme }) => theme.spacing.xs} 0;
    cursor: pointer;
    position: relative;
    z-index: 10;
    writing-mode: vertical-lr;
    direction: rtl;
    accent-color: ${({ theme }) => theme.colors.moabMahogany};
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 20px;
    height: 200px;
    padding: 0;
  }
`;

export const TimeSliderTicks = styled.div`
  position: absolute;
  width: 16px;
  height: 100%;
  margin-left: ${({ theme }) => theme.spacing.xxs};
`;

export const TimeSliderTick = styled.div<{ $left: string; $isSelected: boolean }>`
  position: absolute;
  bottom: ${props => props.$left};
  transform: translateY(50%);
  width: ${props => props.$isSelected ? '16px' : '6px'};
  height: ${props => props.$isSelected ? '4px' : '1px'};
  background-color: ${props => props.$isSelected 
    ? '#D2B48C' // Tan for selected tick
    : props.theme.colors.moabMahogany}; // Mahogany for other ticks
  box-shadow: ${props => props.$isSelected ? '0 0 10px 3px rgba(210,180,140,0.45)' : 'none'};
  border-radius: 2px;
  left: 0;
`;

export const TimeSliderTickLabel = styled.span<{ $isSelected: boolean, $isEdge?: boolean, $labelPosition?: 'above' | 'below' }>`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-size: ${props => props.$isSelected ? '11px' : '9px'};
  color: ${props => props.$isSelected 
    ? props.theme.colors.moabMahogany 
    : props.theme.colors.olympicParkObsidian};
  font-weight: ${props => props.$isSelected 
    ? props.theme.typography.weights.semiBold 
    : props.theme.typography.weights.regular};
  white-space: nowrap;
  left: ${props => props.$labelPosition === 'above' ? '22px' : '-18px'};
  right: ${props => props.$labelPosition === 'above' ? 'unset' : '22px'};
  pointer-events: none;
`;

// Bottom Left Legend container
export const BottomLeftLegend = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  bottom: 100px;
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  max-width: 320px;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  background: linear-gradient(
    to bottom,
    rgba(249, 246, 239, 1),
    rgba(249, 246, 239, 0.9)
  );
`;