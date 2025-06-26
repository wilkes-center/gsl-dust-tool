import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import DustMap from './components/Map';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { useState, createContext, useContext, useEffect } from 'react';
import { AVAILABLE_LAKE_LEVELS } from './components/map/constants';
import IntroPage from './components/IntroPage';
import StoryMap from './components/StoryMap';
import DustContributionAnalyzer from './components/DustContributionAnalyzer';
import LoadingAnimation from './components/LoadingAnimation';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const MapContainer = styled.div<{ $isVisible: boolean }>`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: ${props => props.$isVisible ? 'relative' : 'absolute'};
  top: 0;
  left: 0;
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  z-index: ${props => props.$isVisible ? 1 : -1};
`;

// Loading context for managing loading state across components
const LoadingContext = createContext<{
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}>({
  isLoading: false,
  setIsLoading: () => {},
});

/**
 * Intro page wrapper component with navigation
 */
const IntroPageWrapper = () => {
  const navigate = useNavigate();
  const { setIsLoading } = useContext(LoadingContext);
  
  const handleEnterMap = () => {
    setIsLoading(true);
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
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [selectedElevation, setSelectedElevation] = useState<number>(AVAILABLE_LAKE_LEVELS[0]);
  const [currentTimestamp, setCurrentTimestamp] = useState<string>('202204191800');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  
  // Show loading for 2 seconds when component mounts, then show map
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [setIsLoading]);
  
  const handleElevationChange = (elevation: number) => {
    setSelectedElevation(elevation);
  };
  
  const handleTimestampChange = (timestamp: string) => {
    setCurrentTimestamp(timestamp);
  };
  
  const handleBackToIntro = () => {
    navigate('/');
  };
  
  const handleMapLoad = () => {
    setMapLoaded(true);
    setMapReady(true);
  };
  
  return (
    <AppContainer>
      {/* Always render Header and DustMap but hide them during loading */}
      <MapContainer $isVisible={showMap}>
        <Header elevation={selectedElevation} onBackToIntro={handleBackToIntro} />
        <DustMap 
          onElevationChange={handleElevationChange}
          onTimestampChange={handleTimestampChange}
          onBackToIntro={handleBackToIntro}
          onMapLoad={handleMapLoad}
        />
      </MapContainer>
      
      {/* Show loading animation for first 2 seconds */}
      {!showMap && <LoadingAnimation />}
    </AppContainer>
  );
};

/**
 * Main application component that renders the GSL Dust Tool with routing
 */
function App() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <Router basename="/gsl-dust-tool">
          <Routes>
            <Route path="/" element={<IntroPageWrapper />} />
            <Route path="/story" element={<StoryMapWrapper />} />
            <Route path="/map" element={<MapWrapper />} />
            <Route path="/analysis" element={<AnalysisWrapper />} />
          </Routes>
        </Router>
      </LoadingContext.Provider>
    </ThemeProvider>
  );
}

export default App;
