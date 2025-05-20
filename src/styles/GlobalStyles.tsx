import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './types';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Base styles */
  html, body {
    height: 100%;
    width: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.sizes.body};
    line-height: ${({ theme }) => theme.typography.lineHeights.body};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    color: ${({ theme }) => theme.colors.olympicParkObsidian};
    background-color: ${({ theme }) => theme.colors.snowbirdWhite};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.5px;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-family: ${({ theme }) => theme.typography.displayFont};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.typography.sizes.h1};
    line-height: ${({ theme }) => theme.typography.lineHeights.h1};
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.h2};
    line-height: ${({ theme }) => theme.typography.lineHeights.h2};
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.h3};
    line-height: ${({ theme }) => theme.typography.lineHeights.h3};
    font-weight: ${({ theme }) => theme.typography.weights.light};
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  a {
    color: ${({ theme }) => theme.colors.moabMahogany};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  /* Responsive images */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Form elements */
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
    
    &:disabled {
      cursor: not-allowed;
    }
  }
  
  /* Utility classes */
  .text-center {
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.md};
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }
  
  /* App-specific global styles */
  #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  /* Map-specific styles */
  .mapboxgl-ctrl-group {
    border-radius: ${({ theme }) => theme.borderRadius.md} !important;
    box-shadow: ${({ theme }) => theme.shadows.md} !important;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.moabMahogany} !important;
    background-color: ${({ theme }) => theme.colors.snowbirdWhite} !important;
  }
  
  .map-controls-container {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 0 !important;

    button {
      width: 36px !important;
      height: 36px !important;
      padding: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      font-size: 22px !important;
      color: ${({ theme }) => theme.colors.moabMahogany} !important;
      transition: all 0.2s ease !important;
      cursor: pointer !important;
      border-bottom: 1px solid rgba(117, 29, 12, 0.1) !important;
      background-color: ${({ theme }) => theme.colors.snowbirdWhite} !important;

      &:last-child {
        border-bottom: none !important;
      }

      &:hover {
        background-color: rgba(117, 29, 12, 0.05) !important;
      }

      &:active {
        background-color: rgba(117, 29, 12, 0.1) !important;
      }

      .mapboxgl-ctrl-icon {
        width: auto !important;
        height: auto !important;
        background-image: none !important;
      }
    }

    .zoom-control {
      font-weight: bold !important;
    }

    .reset-view-btn {
      font-size: 20px !important;
    }
  }
  
  /* Remove outline on click for map controls */
  .mapboxgl-ctrl button:focus {
    outline: none !important;
  }
  
  .mapboxgl-popup-content {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-shadow: ${({ theme }) => theme.shadows.md};
    background-color: ${({ theme }) => theme.colors.snowbirdWhite};
    border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    
    .mapboxgl-popup-close-button {
      font-size: 18px;
      padding: ${({ theme }) => theme.spacing.xs};
      color: ${({ theme }) => theme.colors.moabMahogany};
      font-weight: bold;
      
      &:hover {
        color: ${({ theme }) => theme.colors.olympicParkObsidian};
        background: none;
      }
    }
  }
  
  .mapboxgl-popup-tip {
    border-top-color: ${({ theme }) => theme.colors.moabMahogany} !important;
    border-bottom-color: ${({ theme }) => theme.colors.moabMahogany} !important;
  }
  
  /* Lake level slider */
  input[type="range"].vertical-slider {
    -webkit-appearance: slider-vertical;
    appearance: slider-vertical;
    width: 24px !important;
    height: 200px !important;
    padding: 0;
    margin: 0 15px !important;
    z-index: 10;
    position: relative;
    cursor: pointer;
  }
  
  /* Firefox-specific vertical slider fix */
  @-moz-document url-prefix() {
    input[type="range"].vertical-slider {
      width: 200px !important;
      height: 24px !important;
      transform: rotate(270deg);
      transform-origin: center center;
      position: relative;
      margin: 100px 0 !important;
      z-index: 10;
    }
  }
  
  /* Custom styling for checkboxes */
  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
    
    &:checked {
      &:after {
        opacity: 1;
      }
    }
    
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: -3px;
      left: -3px;
      width: 18px;
      height: 18px;
      border-radius: 2px;
      background: ${({ theme }) => theme.colors.snowbirdWhite};
      border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
      opacity: 1;
    }
    
    &:checked:after {
      background: ${({ theme }) => theme.colors.moabMahogany};
      border-color: ${({ theme }) => theme.colors.moabMahogany};
    }
    
    &:checked:before {
      content: '';
      display: block;
      position: absolute;
      top: 1px;
      left: 5px;
      width: 6px;
      height: 10px;
      border: solid ${({ theme }) => theme.colors.snowbirdWhite};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      z-index: 5;
    }
  }
  
  /* Custom scrollbar for controls panel */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(249, 246, 239, 0.5);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(117, 29, 12, 0.3);
    border-radius: 4px;
    
    &:hover {
      background: rgba(117, 29, 12, 0.5);
    }
  }
  
  /* Select dropdown styling */
  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23751d0c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;
    padding-right: 28px;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(117, 29, 12, 0.2);
    }
  }
  
  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.moabMahogany};
    outline-offset: 2px;
  }
  
  /* Additional map control styling */
  .mapboxgl-ctrl-scale {
    border-color: ${({ theme }) => theme.colors.moabMahogany} !important;
    color: ${({ theme }) => theme.colors.olympicParkObsidian} !important;
    background-color: rgba(249, 246, 239, 0.8) !important;
    font-family: ${({ theme }) => theme.typography.fontFamily} !important;
    font-weight: ${({ theme }) => theme.typography.weights.light} !important;
    font-size: 10pt !important;
    letter-spacing: 0.5px !important;
  }
  
  /* Slider thumb styling */
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.moabMahogany};
    cursor: pointer;
    margin-top: -7px;
    border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  input[type=range]::-moz-range-thumb {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.moabMahogany};
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.snowbirdWhite};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  /* Track styling for range sliders */
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(117, 29, 12, 0.2);
    border-radius: 2px;
  }
  
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(117, 29, 12, 0.2);
    border-radius: 2px;
  }
  
  /* Mapbox attribution control styling */
  .mapboxgl-ctrl-attrib {
    font-family: ${({ theme }) => theme.typography.fontFamily} !important;
    font-size: 9pt !important;
    letter-spacing: 0.3px !important;
    padding: 2px 5px !important;
    
    a {
      color: ${({ theme }) => theme.colors.moabMahogany} !important;
    }
  }
  
  /* Mapbox compass styling */
  .mapboxgl-ctrl-compass {
    .mapboxgl-ctrl-compass-arrow {
      fill: ${({ theme }) => theme.colors.moabMahogany} !important;
    }
  }
  
  /* Additional popup styling */
  .mapboxgl-popup {
    max-width: 300px !important;
    
    .mapboxgl-popup-content {
      max-width: 100%;
    }
  }
  
  /* Additional responsive adjustments */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .mapboxgl-ctrl-group {
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }
    
    .mapboxgl-popup-content {
      max-width: 280px;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1 {
      font-size: 30pt;
    }
    
    h2 {
      font-size: 18pt;
    }
    
    h3 {
      font-size: 14pt;
    }
    
    body {
      font-size: 14pt;
    }
    
    .mapboxgl-popup {
      max-width: 250px !important;
    }
  }
`;

export default GlobalStyles;