import React from 'react';
import styled from 'styled-components';
import { X, ChevronDown } from 'lucide-react';
import { PopupInfo } from './types';
import { getAggregatedPM25Color, DustContribution } from '../../utils/dataUtils';
import { getErodibilityColor } from './constants';
import { PM25Chart } from './PM25Chart';
import { DustContributionChart } from './DustContributionChart';
import PMValue from '../common/PMValue';

// Styled components
const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 60px;
  right: ${props => props.$isOpen ? '0' : '-400px'};
  width: 400px;
  height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: ${({ theme }) => theme.zIndices.popups};
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${({ theme }) => theme.colors.moabMahogany};
`;

const SidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(117, 29, 12, 0.05),
    rgba(249, 246, 239, 0)
  );
`;

const SidebarTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 0;
  letter-spacing: 0.8px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.xs};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.moabMahogany};
    transform: scale(1.1);
  }
`;

const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(249, 246, 239, 0.5);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(117, 29, 12, 0.3);
    border-radius: 4px;
    
    &:hover {
      background: rgba(117, 29, 12, 0.5);
    }
  }
`;

// Compact info section at the top
const CompactInfoSection = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: rgba(249, 246, 239, 0.5);
  border-bottom: 1px solid rgba(117, 29, 12, 0.1);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FullWidthItem = styled.div`
  grid-column: 1 / -1;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoLabel = styled.span`
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.light};
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const InfoValue = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  letter-spacing: 0.3px;
`;

const HighlightValue = styled(InfoValue)`
  color: ${({ theme }) => theme.colors.moabMahogany};
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  font-size: 16px;
`;

const PM25Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const PM25ValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const PM25Markers = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

const PM25Marker = styled.div<{ filled: boolean; quality: string }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${({ filled, quality, theme }) => {
    if (!filled) return 'rgba(117, 29, 12, 0.1)';
    switch(quality) {
      case 'Low': return theme.colors.spiralJettySage;
      case 'Moderate': return theme.colors.canyonlandsTan;
      case 'High': return theme.colors.bonnevilleSaltFlatsBlue;
      case 'Very High': return theme.colors.rockyMountainRust;
      case 'Extreme': return theme.colors.moabMahogany;
      default: return theme.colors.textSecondary;
    }
  }};
  transition: background-color 0.3s ease;
`;

const MonitorName = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.displayFont};
`;

const QualityBadge = styled.div<{ quality: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  letter-spacing: 0.5px;
  background-color: ${({ quality, theme }) => {
    switch(quality) {
      case 'Low': return theme.colors.spiralJettySage;
      case 'Moderate': return theme.colors.canyonlandsTan;
      case 'High': return theme.colors.bonnevilleSaltFlatsBlue;
      case 'Very High': return theme.colors.rockyMountainRust;
      case 'Extreme': return theme.colors.moabMahogany;
      default: return theme.colors.textSecondary;
    }
  }};
  color: ${({ theme }) => theme.colors.snowbirdWhite};
  margin-top: ${({ theme }) => theme.spacing.xs};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Chart sections with emphasis
const ChartsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(249, 246, 239, 0.3);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(117, 29, 12, 0.2);
    border-radius: 3px;
    
    &:hover {
      background: rgba(117, 29, 12, 0.3);
    }
  }
`;

const ChartSection = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 29, 12, 0.1);
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: rgba(117, 29, 12, 0.2);
  }
`;

const ChartSectionWithArrow = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 29, 12, 0.1);
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: rgba(117, 29, 12, 0.2);
  }
`;

const DownArrowButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: ${({ theme }) => theme.colors.moabMahogany};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(117, 29, 12, 0.3);
  z-index: 10;
  
  &:hover {
    background: #8b2113;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(117, 29, 12, 0.4);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const ChartTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const NoDataMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  font-style: italic;
`;

const NoChartsMessage = styled.div`
  background: rgba(117, 29, 12, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing.md};
`;

interface InfoSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  popupInfo: PopupInfo | null;
  centroidLocations: any[];
  averagedPM25Data: Record<string, number>;
  dustContributions: Record<string, DustContribution>;
  lakeLevel?: number;
  pm25Data?: any[];
  selectedTimestampIndex?: number;
}

export function InfoSidebar({
  isOpen,
  onClose,
  popupInfo,
  centroidLocations,
  averagedPM25Data,
  dustContributions,
  lakeLevel,
  pm25Data = [],
  selectedTimestampIndex = 0,
}: InfoSidebarProps) {
  const sidebarContentRef = React.useRef<HTMLDivElement>(null);
  const chartsContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Try multiple approaches to ensure scrolling works
    const sidebarContent = sidebarContentRef.current;
    const chartsContainer = chartsContainerRef.current;
    
    if (sidebarContent) {
      // Method 1: Scroll the main sidebar content to bottom
      sidebarContent.scrollTo({
        top: sidebarContent.scrollHeight,
        behavior: 'smooth'
      });
      
      // Method 2: Also try scrolling to a large value as fallback
      setTimeout(() => {
        sidebarContent.scrollTo({
          top: 9999,
          behavior: 'smooth'
        });
      }, 100);
      
      console.log('Scrolling sidebar content. ScrollHeight:', sidebarContent.scrollHeight);
    }
    
    if (chartsContainer) {
      // Also scroll the charts container if it's scrollable
      chartsContainer.scrollTo({
        top: chartsContainer.scrollHeight,
        behavior: 'smooth'
      });
      
      console.log('Scrolling charts container. ScrollHeight:', chartsContainer.scrollHeight);
    }
  };

  const getAirQuality = (pm25Value: number) => {
    if (pm25Value < 5) return "Low";
    if (pm25Value < 10) return "Moderate";
    if (pm25Value < 15) return "High";
    if (pm25Value < 20) return "Very High";
    return "Extreme";
  };

  const getPM25FilledMarkers = (pm25Value: number) => {
    // Return how many markers should be filled (0-4)
    if (pm25Value < 5) return 1;
    if (pm25Value < 10) return 2;
    if (pm25Value < 15) return 3;
    return 4;
  };

  const getErodibilityClass = (value: number) => {
    if (value <= 0.3) return "Moderate";
    if (value <= 0.6) return "High";
    if (value <= 0.94) return "Very High";
    return "Extreme";
  };

  const getTitle = () => {
    if (!popupInfo) return 'Location Information';
    switch (popupInfo.type) {
      case 'bathymetry': return 'Lake Bathymetry';
      case 'censusTract': return 'Census Tract Data';
      case 'pm25': return 'Air Quality Monitor';
      case 'erodibility': return 'Soil Erodibility';
      default: return 'Location Information';
    }
  };

  // Get centroid data for census tracts
  const getCentroidData = () => {
    if (popupInfo?.type === 'censusTract' && popupInfo.hasPM25Data) {
      return centroidLocations.find(c => c.geoid === popupInfo.GEOID20);
    }
    return null;
  };

  const centroid = getCentroidData();
  const pm25Value = centroid ? averagedPM25Data[centroid.centroid_name] : 0;
  const dustContribution = centroid ? dustContributions[centroid.centroid_name] : null;

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarHeader>
        <SidebarTitle>{getTitle()}</SidebarTitle>
        <CloseButton onClick={onClose}>
          <X size={20} />
        </CloseButton>
      </SidebarHeader>
      
      <SidebarContent ref={sidebarContentRef}>
        {!popupInfo ? (
          <NoDataMessage>
            Click on the map to view location information
          </NoDataMessage>
        ) : (
          <>
            {/* Compact info section */}
            <CompactInfoSection>
              {popupInfo.type === 'bathymetry' && (
                <InfoGrid>
                  <InfoItem>
                    <InfoLabel>Elevation (meters)</InfoLabel>
                    <HighlightValue>{popupInfo.depth.toFixed(2)}m</HighlightValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Elevation (feet)</InfoLabel>
                    <InfoValue>{(popupInfo.depth * 3.28084).toFixed(1)}ft</InfoValue>
                  </InfoItem>
                </InfoGrid>
              )}
              
              {popupInfo.type === 'censusTract' && (
                <>
                  <FullWidthItem>
                    <InfoLabel>Census Tract</InfoLabel>
                    <HighlightValue>{popupInfo.GEOID20}</HighlightValue>
                  </FullWidthItem>
                  
                  {centroid && (
                    <>
                      <FullWidthItem>
                        <InfoLabel><PMValue type="2.5" /> Average</InfoLabel>
                        <PM25Container>
                          <PM25ValueRow>
                            <HighlightValue>{pm25Value.toFixed(1)} µg/m³</HighlightValue>
                            <PM25Markers>
                              {[1, 2, 3, 4].map((marker) => (
                                <PM25Marker 
                                  key={marker}
                                  filled={marker <= getPM25FilledMarkers(pm25Value)}
                                  quality={getAirQuality(pm25Value)}
                                />
                              ))}
                            </PM25Markers>
                            <QualityBadge quality={getAirQuality(pm25Value)}>
                              {getAirQuality(pm25Value)}
                            </QualityBadge>
                          </PM25ValueRow>
                        </PM25Container>
                      </FullWidthItem>
                      
                      <InfoGrid>
                        <InfoItem>
                          <InfoLabel>Latitude</InfoLabel>
                          <InfoValue>{centroid.lat.toFixed(6)}°</InfoValue>
                        </InfoItem>
                        <InfoItem>
                          <InfoLabel>Longitude</InfoLabel>
                          <InfoValue>{centroid.lon.toFixed(6)}°</InfoValue>
                        </InfoItem>
                      </InfoGrid>
                    </>
                  )}
                  
                  {!centroid && (
                    <InfoGrid>
                      <InfoItem>
                        <InfoLabel>Coordinates</InfoLabel>
                        <InfoValue>{popupInfo.INTPTLAT20}, {popupInfo.INTPTLON20}</InfoValue>
                      </InfoItem>
                      <InfoItem>
                        <InfoLabel><PMValue type="2.5" /> Status</InfoLabel>
                        <InfoValue>No monitoring data</InfoValue>
                      </InfoItem>
                    </InfoGrid>
                  )}
                </>
              )}
              
              {popupInfo.type === 'pm25' && (
                <>
                  <FullWidthItem>
                    <InfoLabel>Monitor Location</InfoLabel>
                    <MonitorName>{popupInfo.centroidName}</MonitorName>
                  </FullWidthItem>
                  
                  <FullWidthItem>
                    <InfoLabel><PMValue type="2.5" /> Average</InfoLabel>
                    <PM25Container>
                      <PM25ValueRow>
                        <HighlightValue>{popupInfo.pm25Value.toFixed(1)} µg/m³</HighlightValue>
                        <PM25Markers>
                          {[1, 2, 3, 4].map((marker) => (
                            <PM25Marker 
                              key={marker}
                              filled={marker <= getPM25FilledMarkers(popupInfo.pm25Value)}
                              quality={getAirQuality(popupInfo.pm25Value)}
                            />
                          ))}
                        </PM25Markers>
                        <QualityBadge quality={getAirQuality(popupInfo.pm25Value)}>
                          {getAirQuality(popupInfo.pm25Value)}
                        </QualityBadge>
                      </PM25ValueRow>
                    </PM25Container>
                  </FullWidthItem>
                  
                  <InfoGrid>
                    <InfoItem>
                      <InfoLabel>Latitude</InfoLabel>
                      <InfoValue>{popupInfo.latitude.toFixed(6)}°</InfoValue>
                    </InfoItem>
                    <InfoItem>
                      <InfoLabel>Longitude</InfoLabel>
                      <InfoValue>{popupInfo.longitude.toFixed(6)}°</InfoValue>
                    </InfoItem>
                  </InfoGrid>
                  
                  {popupInfo.geoid && (
                    <FullWidthItem style={{ marginTop: '8px' }}>
                      <InfoLabel>Census Tract</InfoLabel>
                      <InfoValue>{popupInfo.geoid}</InfoValue>
                    </FullWidthItem>
                  )}
                </>
              )}
              
              {popupInfo.type === 'erodibility' && (
                <>
                  <InfoGrid>
                    <InfoItem>
                      <InfoLabel>Erodibility Index</InfoLabel>
                      <HighlightValue>{popupInfo.erodibilityValue.toFixed(2)}</HighlightValue>
                    </InfoItem>
                    <InfoItem>
                      <InfoLabel>Risk Classification</InfoLabel>
                      <InfoValue>{getErodibilityClass(popupInfo.erodibilityValue)}</InfoValue>
                    </InfoItem>
                  </InfoGrid>
                  <QualityBadge quality={getErodibilityClass(popupInfo.erodibilityValue)}>
                    Risk Level: {getErodibilityClass(popupInfo.erodibilityValue)}
                  </QualityBadge>
                </>
              )}
            </CompactInfoSection>
            
            {/* Charts section - highlighted */}
            {popupInfo.type === 'censusTract' && centroid ? (
              <ChartsContainer ref={chartsContainerRef}>
                {/* Dust Contribution Pie Chart - Featured First */}
                {dustContribution && (
                  <ChartSectionWithArrow>
                    <DustContributionChart 
                      contribution={dustContribution} 
                      lakeLevel={lakeLevel}
                    />
                    <DownArrowButton 
                      onClick={scrollToBottom}
                      title="Scroll to bottom"
                    >
                      <ChevronDown size={28} />
                    </DownArrowButton>
                  </ChartSectionWithArrow>
                )}
                
                {/* PM₂.₅ Time Series Line Chart */}
                <ChartSection>
                  <PM25Chart centroidName={centroid.centroid_name} />
                </ChartSection>
              </ChartsContainer>
            ) : popupInfo.type === 'censusTract' && !centroid ? (
              <NoChartsMessage>
                No air quality monitoring data available for this census tract.
                <br />
                <br />
                Select a tract with monitoring stations to view <PMValue type="2.5" /> trends and dust source contributions.
              </NoChartsMessage>
            ) : popupInfo.type === 'bathymetry' || popupInfo.type === 'erodibility' ? (
              <NoChartsMessage>
                Charts are available for census tracts with air quality monitoring data.
                <br />
                <br />
                Click on a census tract to view <PMValue type="2.5" /> trends and dust source analysis.
              </NoChartsMessage>
            ) : null}
          </>
        )}
      </SidebarContent>
    </SidebarContainer>
  );
}