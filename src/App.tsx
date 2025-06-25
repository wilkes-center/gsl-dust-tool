import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import DustMap from './components/Map';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { useState } from 'react';
import { AVAILABLE_LAKE_LEVELS } from './components/map/constants';
import IntroPage from './components/IntroPage';
import StoryMap from './components/StoryMap';
import DustContributionAnalyzer from './components/DustContributionAnalyzer';

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

/**
 * Intro page wrapper component with navigation
 */
const IntroPageWrapper = () => {
  const navigate = useNavigate();
  
  const handleEnterMap = () => {
    navigate('/map');
  };
  
  return <IntroPage onComplete={handleEnterMap} />;
};

/**
 * Story map wrapper component with navigation
 */
const StoryMapWrapper = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
  };
  
  return <StoryMap onBack={handleBack} />;
};

/**
 * Dust contribution analyzer wrapper component with navigation
 */
const AnalysisWrapper = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">GSL Dust Analysis Tool</h1>
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <DustContributionAnalyzer />
    </div>
  );
};

/**
 * Main map wrapper component with navigation
 */
const MapWrapper = () => {
  const navigate = useNavigate();
  const [selectedElevation, setSelectedElevation] = useState<number>(AVAILABLE_LAKE_LEVELS[0]);
  const [currentTimestamp, setCurrentTimestamp] = useState<string>('202204191800');
  
  const handleElevationChange = (elevation: number) => {
    setSelectedElevation(elevation);
  };
  
  const handleTimestampChange = (timestamp: string) => {
    setCurrentTimestamp(timestamp);
  };
  
  const handleBackToIntro = () => {
    navigate('/');
  };
  
  return (
    <AppContainer>
      <Header elevation={selectedElevation} />
      <DustMap 
        onElevationChange={handleElevationChange}
        onTimestampChange={handleTimestampChange}
        onBackToIntro={handleBackToIntro}
      />
    </AppContainer>
  );
};

/**
 * Main application component that renders the GSL Dust Tool with routing
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router basename="/gsl-dust-tool">
        <Routes>
          <Route path="/" element={<IntroPageWrapper />} />
          <Route path="/story" element={<StoryMapWrapper />} />
          <Route path="/map" element={<MapWrapper />} />
          <Route path="/analysis" element={<AnalysisWrapper />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
