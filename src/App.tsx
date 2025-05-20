import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import DustMap from './components/Map';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { useState } from 'react';
import { AVAILABLE_LAKE_LEVELS } from './components/map/constants';
import IntroPage from './components/IntroPage';

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

/**
 * Main application component that renders the GSL Dust Tool
 */
function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [selectedElevation, setSelectedElevation] = useState<number>(AVAILABLE_LAKE_LEVELS[0]);
  const [currentTimestamp, setCurrentTimestamp] = useState<string>('202204191800');
  
  const handleElevationChange = (elevation: number) => {
    setSelectedElevation(elevation);
  };
  
  const handleTimestampChange = (timestamp: string) => {
    setCurrentTimestamp(timestamp);
  };
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  const handleBackToIntro = () => {
    setShowIntro(true);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {showIntro ? (
        <IntroPage onComplete={handleIntroComplete} />
      ) : (
        <AppContainer>
          <Header elevation={selectedElevation} timestamp={currentTimestamp} />
          <DustMap 
            onElevationChange={handleElevationChange}
            onTimestampChange={handleTimestampChange}
            onBackToIntro={handleBackToIntro}
          />
        </AppContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
