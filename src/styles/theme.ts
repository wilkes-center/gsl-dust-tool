/**
 * Theme tokens for the GSL Dust Tool application
 * Using the specified color scheme and fonts
 */

const theme = {
  colors: {
    olympicParkObsidian: '#1a1a1a',
    snowbirdWhite: '#f9f6ef', // Main background color
    canyonlandsTan: '#cea25d',
    moabMahogany: '#751d0c', // Main accent color for borders and boundaries
    spiralJettySage: '#99aa88',
    greatSaltLakeGreen: '#2d5954',
    bonnevilleSaltFlatsBlue: '#789ba8',
    rockyMountainRust: '#dd3b00',
    backgroundSecondary: '#f9f6ef', // Updated to match main theme color
    backgroundTertiary: '#f9f6ef', // Updated to match main theme color
    textSecondary: '#4a4a4a',
    textTertiary: '#767676',
    borderPrimary: '#751d0c', // Main border color
    borderSecondary: '#751d0c', // Updated to match main border color (lighter opacity will be used)
    
    // Sequential color scales for GSL elevations
    elevationScale: [
      '#0571b0', // Deepest point (dark blue)
      '#3288bd', // Very deep (medium blue)
      '#66c2a5', // Deep (teal)
      '#abdda4', // Medium-deep (light green)
      '#e6f598', // Medium (yellow-green)
      '#fee08b', // Medium-shallow (light yellow)
      '#fdae61', // Shallow (light orange)
      '#f46d43', // Very shallow (orange)
      '#d53e4f', // Near surface (red)
      '#9e0142'  // Highest point (dark red)
    ],
    
    // PM10 concentration scale
    pm10Scale: [
      '#7cbf6f', // Green (low PM10)
      '#e8db5b', // Yellow (moderate PM10)
      '#e8a64d', // Orange (high PM10)
      '#d46457', // Red (very high PM10)
      '#a63c3c'  // Dark red (extremely high PM10)
    ]
  },
  
  typography: {
    fontFamily: "'Red Hat Display', sans-serif",
    displayFont: "'Sora', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    },
    sizes: {
      h1: '36px', // Sora SemiBold
      h2: '20px', // Sora SemiBold
      h3: '15px', // Red Hat Display Light
      body: '14px', // Red Hat Display Regular
      small: '12px', // Red Hat Display Light
      button: '15px'
    },
    lineHeights: {
      h1: 1.2,
      h2: 1.3,
      h3: 1.4,
      body: 1.5
    }
  },
  
  spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.15)'
  },
  
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    round: '50%'
  },
  
  transitions: {
    fast: 'all 0.2s ease',
    medium: 'all 0.3s ease',
    slow: 'all 0.5s ease'
  },
  
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  
  zIndices: {
    base: 0,
    mapControls: 10,
    mapOverlays: 20,
    popups: 30,
    modals: 40,
    tooltips: 50
  }
};

export default theme;