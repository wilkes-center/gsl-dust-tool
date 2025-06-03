import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import ElevationChart from './ElevationChart';

interface TimelapseWithChartProps {
  // No props needed for now
}

/**
 * Component that combines Google Earth Engine timelapse with elevation chart
 */
const TimelapseWithChart: React.FC<TimelapseWithChartProps> = () => {
  const [currentYear, setCurrentYear] = useState(1984);
  const [isSynced, setIsSynced] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Available years in the timelapse (1984-2022 based on Google Earth Engine data)
  const availableYears = [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

  // Listen for messages from the iframe to sync with timelapse
  const handleMessage = useCallback((event: MessageEvent) => {
    // Check if message is from Google Earth Engine
    if (event.origin.includes('earthengine.google.com')) {
      try {
        const data = event.data;
        
        // Look for year information in various possible message formats
        if (data && typeof data === 'object') {
          // Try to extract year from different possible message structures
          let year = null;
          
          if (data.year) {
            year = parseInt(data.year);
          } else if (data.time) {
            // Convert time to year if it's a timestamp
            const date = new Date(data.time);
            year = date.getFullYear();
          } else if (data.currentYear) {
            year = parseInt(data.currentYear);
          } else if (typeof data === 'string' && data.includes('year')) {
            // Try to parse year from string
            const match = data.match(/year[:\s]*(\d{4})/i);
            if (match) {
              year = parseInt(match[1]);
            }
          }
          
          if (year && year >= 1984 && year <= 2022) {
            setCurrentYear(year);
            setIsSynced(true);
          }
        }
      } catch (error) {
        console.log('Could not parse iframe message:', error);
      }
    }
  }, []);

  // Set up message listener
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  // Update timelapse when year changes manually
  const updateTimelapseYear = useCallback((year: number) => {
    if (iframeRef.current) {
      try {
        // Calculate time parameter (0-1 range for the timelapse)
        const yearIndex = availableYears.indexOf(year);
        const timeParam = yearIndex / (availableYears.length - 1);
        
        // Update iframe src with new time parameter
        const baseUrl = 'https://earthengine.google.com/iframes/timelapse_player_embed.html';
        const params = `#v=41.10477,-112.94087,7.175,latLng&t=${timeParam.toFixed(3)}&ps=50&bt=19840101&et=20221231`;
        const newUrl = baseUrl + params;
        
        iframeRef.current.src = newUrl;
        setIsSynced(false); // Reset sync flag when manually controlling
      } catch (error) {
        console.log('Could not update timelapse year:', error);
      }
    }
  }, [availableYears]);

  // Handle year change from slider
  const handleYearChange = (year: number) => {
    setCurrentYear(year);
    updateTimelapseYear(year);
  };

  // Get elevation data for the current year
  const getCurrentElevation = () => {
    // This should match the elevation data from ElevationChart component
    const elevationData: { [key: number]: number } = {
      1984: 4211.6, 1985: 4210.8, 1986: 4209.2, 1987: 4208.5, 1988: 4206.8,
      1989: 4204.2, 1990: 4202.1, 1991: 4199.8, 1992: 4194.2, 1993: 4192.8,
      1994: 4194.5, 1995: 4196.2, 1996: 4198.1, 1997: 4200.3, 1998: 4202.8,
      1999: 4205.2, 2000: 4202.1, 2001: 4199.8, 2002: 4197.2, 2003: 4194.8,
      2004: 4196.5, 2005: 4198.2, 2006: 4195.8, 2007: 4193.2, 2008: 4194.8,
      2009: 4196.2, 2010: 4197.8, 2011: 4200.2, 2012: 4196.8, 2013: 4194.2,
      2014: 4192.8, 2015: 4191.2, 2016: 4190.8, 2017: 4193.2, 2018: 4195.8,
      2019: 4194.2, 2020: 4191.8, 2021: 4190.2, 2022: 4188.5
    };
    return elevationData[currentYear] || 4194.8;
  };

  return (
    <Container>
      <TimelapseContainer>
        <iframe 
          ref={iframeRef}
          width="100%" 
          height="100%" 
          src="https://earthengine.google.com/iframes/timelapse_player_embed.html#v=41.10477,-112.94087,7.175,latLng&t=0.43&ps=50&bt=19840101&et=20221231" 
          frameBorder="0" 
          allowFullScreen
          style={{
            border: 'none',
            display: 'block'
          }}
        />
      </TimelapseContainer>
      
      <ChartContainer>
        <ElevationChart currentYear={currentYear} />
        
        <InteractiveControls>
          <YearSliderContainer>
            <SliderHeader>
              <YearDisplay>{currentYear}</YearDisplay>
              <ElevationDisplay>{getCurrentElevation().toFixed(1)} ft</ElevationDisplay>
            </SliderHeader>
            
            <SliderWrapper>
              <YearSlider
                type="range"
                min={0}
                max={availableYears.length - 1}
                value={availableYears.indexOf(currentYear)}
                onChange={(e) => handleYearChange(availableYears[parseInt(e.target.value)])}
              />
              <SliderLabels>
                <span>1984</span>
                <span>1990</span>
                <span>1995</span>
                <span>2000</span>
                <span>2005</span>
                <span>2010</span>
                <span>2015</span>
                <span>2020</span>
                <span>2022</span>
              </SliderLabels>
            </SliderWrapper>
            
            <SliderDescription>
              Drag the slider to explore different years and see how the Great Salt Lake changed over time
            </SliderDescription>
          </YearSliderContainer>
        </InteractiveControls>
        
        <ChartNote>
          The orange highlight shows the current year ({currentYear}) from the satellite timelapse above. 
          Use the slider below to navigate through different years and observe how lake levels changed over time.
        </ChartNote>
      </ChartContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const TimelapseContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 0;
`;

const ChartContainer = styled.div`
  flex: 0 0 auto;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-top: 2px solid #3498db;
  max-height: 450px;
  overflow-y: auto;
`;

const InteractiveControls = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-top: 1px solid #e0e0e0;
`;

const YearSliderContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const YearDisplay = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
`;

const ElevationDisplay = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #3498db;
`;

const SliderWrapper = styled.div`
  margin-bottom: 15px;
`;

const YearSlider = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #ddd;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  margin-bottom: 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f39c12;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;

    &:hover {
      background: #e67e22;
      transform: scale(1.1);
    }
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f39c12;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;

    &:hover {
      background: #e67e22;
      transform: scale(1.1);
    }
  }

  &::-webkit-slider-track {
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, #e74c3c 0%, #f39c12 50%, #27ae60 100%);
  }

  &::-moz-range-track {
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, #e74c3c 0%, #f39c12 50%, #27ae60 100%);
    border: none;
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

const SliderDescription = styled.div`
  text-align: center;
  font-size: 14px;
  color: #666;
  font-style: italic;
`;

const ChartNote = styled.div`
  padding: 15px 20px;
  font-size: 14px;
  color: #666;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  background: #f8f9fa;
`;

export default TimelapseWithChart; 