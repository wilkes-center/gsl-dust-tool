import React from 'react';
import { Popup } from 'react-map-gl';
import styled from 'styled-components';
import { PopupInfo } from './types';
import { getAggregatedPM25Color, DustContribution } from '../../utils/dataUtils';
import { getErodibilityColor } from './constants';
import { PM25Chart } from './PM25Chart';
import { DustContributionChart } from './DustContributionChart';

// Styled components following the brand guide
const StyledPopupContent = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  min-width: 280px;
  max-width: 400px;
`;

const PopupHeader = styled.h4`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  letter-spacing: 0.8px;
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  border-bottom: 2px solid ${({ theme }) => theme.colors.moabMahogany};
`;

const InfoRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: 1.5;
`;

const InfoLabel = styled.span`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.weights.light};
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.5px;
  margin-right: ${({ theme }) => theme.spacing.xs};
  text-transform: uppercase;
  min-width: 120px;
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
`;

const QualityIndicator = styled.div<{ quality: string }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  letter-spacing: 0.5px;
  margin-left: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ quality, theme }) => {
    switch(quality) {
      case 'Low': return 'rgba(153, 170, 136, 0.2)';
      case 'Moderate': return 'rgba(206, 162, 93, 0.2)';
      case 'High': return 'rgba(120, 155, 168, 0.2)';
      case 'Very High': return 'rgba(221, 59, 0, 0.2)';
      case 'Extreme': return 'rgba(117, 29, 12, 0.2)';
      default: return theme.colors.backgroundSecondary;
    }
  }};
  color: ${({ quality, theme }) => {
    switch(quality) {
      case 'Low': return theme.colors.spiralJettySage;
      case 'Moderate': return theme.colors.canyonlandsTan;
      case 'High': return theme.colors.bonnevilleSaltFlatsBlue;
      case 'Very High': return theme.colors.rockyMountainRust;
      case 'Extreme': return theme.colors.moabMahogany;
      default: return theme.colors.olympicParkObsidian;
    }
  }};
`;

const StatusValue = styled(InfoValue)<{ status?: string }>`
  color: ${({ status, theme }) => 
    status === 'Active' ? theme.colors.spiralJettySage : theme.colors.textSecondary
  };
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const ColorBarContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid rgba(117, 29, 12, 0.1);
`;

const ColorBarLabel = styled.div`
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.light};
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
  text-transform: uppercase;
`;

const ColorBar = styled.div<{ backgroundColor: string }>`
  height: 8px;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(117, 29, 12, 0.1);
`;

const ChartContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(117, 29, 12, 0.1);
`;

interface MapPopupProps {
  popupInfo: PopupInfo | null;
  onClose: () => void;
  centroidLocations: any[];
  averagedPM25Data: Record<string, number>;
  dustContributions: Record<string, DustContribution>;
  mapRef?: React.RefObject<any>;
  lakeLevel?: number;
}

export function MapPopup({
  popupInfo,
  onClose,
  centroidLocations,
  averagedPM25Data,
  dustContributions,
  mapRef,
  lakeLevel,
}: MapPopupProps) {
  if (!popupInfo) return null;

  // Calculate the best anchor position to keep popup within viewport
  const getOptimalAnchor = () => {
    if (!mapRef?.current) return 'bottom';
    
    const map = mapRef.current.getMap();
    const bounds = map.getBounds();
    
    const popupLng = popupInfo.longitude;
    const popupLat = popupInfo.latitude;
    
    // Calculate relative position within the viewport
    const lngRange = bounds.getEast() - bounds.getWest();
    const latRange = bounds.getNorth() - bounds.getSouth();
    
    const relativeX = (popupLng - bounds.getWest()) / lngRange;
    const relativeY = (bounds.getNorth() - popupLat) / latRange;
    
    // Choose anchor based on position within viewport
    if (relativeY < 0.3) {
      return relativeX < 0.5 ? 'top-left' : 'top-right';
    } else if (relativeY > 0.7) {
      return relativeX < 0.5 ? 'bottom-left' : 'bottom-right';
    } else {
      return relativeX < 0.5 ? 'left' : 'right';
    }
  };

  const getAirQuality = (pm25Value: number) => {
    if (pm25Value < 5) return "Low";
    if (pm25Value < 10) return "Moderate";
    if (pm25Value < 15) return "High";
    if (pm25Value < 20) return "Very High";
    return "Extreme";
  };

  const getErodibilityClass = (value: number) => {
    if (value <= 0.3) return "Moderate";
    if (value <= 0.6) return "High";
    if (value <= 0.94) return "Very High";
    return "Extreme";
  };

  // Debug logging
  console.log('MapPopup - dustContributions keys:', Object.keys(dustContributions));
  console.log('MapPopup - popupInfo:', popupInfo);

  return (
    <Popup
      longitude={popupInfo.longitude}
      latitude={popupInfo.latitude}
      closeButton={true}
      closeOnClick={false}
      onClose={onClose}
      anchor={getOptimalAnchor()}
      maxWidth="none"
      style={{
        zIndex: 1000
      }}
    >
      <StyledPopupContent>
        {popupInfo.type === 'bathymetry' ? (
          <>
            <PopupHeader>Lake Bathymetry</PopupHeader>
            <InfoRow>
              <InfoLabel>Elevation</InfoLabel>
              <HighlightValue>{popupInfo.depth.toFixed(2)} meters</HighlightValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Above Sea Level</InfoLabel>
              <InfoValue>{(popupInfo.depth * 3.28084).toFixed(1)} feet</InfoValue>
            </InfoRow>
          </>
        ) : popupInfo.type === 'censusTract' ? (
          <>
            <PopupHeader>Census Tract Information</PopupHeader>
            <InfoRow>
              <InfoLabel>Tract ID</InfoLabel>
              <HighlightValue>{popupInfo.GEOID20}</HighlightValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Coordinates</InfoLabel>
              <InfoValue>{popupInfo.INTPTLAT20}, {popupInfo.INTPTLON20}</InfoValue>
            </InfoRow>
            
            {popupInfo.hasPM25Data ? (
              <>
                <InfoRow>
                  <InfoLabel>PM2.5 Status</InfoLabel>
                  <StatusValue status="Active">Active</StatusValue>
                </InfoRow>
                {/* Find the corresponding centroid and display its PM2.5 value */}
                {(() => {
                  const centroid = centroidLocations.find(c => c.geoid === popupInfo.GEOID20);
                  if (!centroid) return null;
                  
                  const pm25Value = averagedPM25Data[centroid.centroid_name] as number;
                  if (typeof pm25Value !== 'number') return null;
                  
                  const dustContribution = dustContributions[centroid.centroid_name];
                  
                  // Debug logging
                  console.log('Looking for dust contribution for:', centroid.centroid_name);
                  console.log('Found dust contribution:', dustContribution);
                  
                  return (
                    <>
                      <InfoRow>
                        <InfoLabel>Monitor</InfoLabel>
                        <HighlightValue>{centroid.centroid_name}</HighlightValue>
                      </InfoRow>
                      <InfoRow>
                        <InfoLabel>PM2.5 Average</InfoLabel>
                        <HighlightValue>{pm25Value.toFixed(1)} µg/m³</HighlightValue>
                        <QualityIndicator quality={getAirQuality(pm25Value)}>
                          {getAirQuality(pm25Value)}
                        </QualityIndicator>
                      </InfoRow>
                      
                      <ColorBarContainer>
                        <ColorBarLabel>Concentration Level</ColorBarLabel>
                        <ColorBar backgroundColor={getAggregatedPM25Color(pm25Value)} />
                      </ColorBarContainer>
                      
                      <ChartContainer>
                        <PM25Chart centroidName={centroid.centroid_name} />
                      </ChartContainer>
                      
                      {dustContribution && (
                        <ChartContainer>
                          <DustContributionChart 
                            contribution={dustContribution} 
                            lakeLevel={lakeLevel}
                          />
                        </ChartContainer>
                      )}
                    </>
                  );
                })()}
              </>
            ) : (
              <InfoRow>
                <InfoLabel>PM2.5 Status</InfoLabel>
                <InfoValue>Not available for this tract</InfoValue>
              </InfoRow>
            )}
          </>
        ) : popupInfo.type === 'pm25' ? (
          <>
            <PopupHeader>PM2.5 Monitoring Point</PopupHeader>
            <InfoRow>
              <InfoLabel>Location</InfoLabel>
              <HighlightValue>{popupInfo.centroidName}</HighlightValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>PM2.5 Average</InfoLabel>
              <HighlightValue>{popupInfo.pm25Value.toFixed(1)} µg/m³</HighlightValue>
              <QualityIndicator quality={getAirQuality(popupInfo.pm25Value)}>
                {getAirQuality(popupInfo.pm25Value)}
              </QualityIndicator>
            </InfoRow>
            {popupInfo.geoid && (
              <InfoRow>
                <InfoLabel>Census Tract</InfoLabel>
                <InfoValue>{popupInfo.geoid}</InfoValue>
              </InfoRow>
            )}
            
            <ColorBarContainer>
              <ColorBarLabel>Concentration Level</ColorBarLabel>
              <ColorBar backgroundColor={getAggregatedPM25Color(popupInfo.pm25Value)} />
            </ColorBarContainer>
          </>
        ) : popupInfo.type === 'erodibility' ? (
          <>
            <PopupHeader>Soil Erodibility</PopupHeader>
            <InfoRow>
              <InfoLabel>Index Value</InfoLabel>
              <HighlightValue>{popupInfo.erodibilityValue.toFixed(2)}</HighlightValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Risk Level</InfoLabel>
              <QualityIndicator quality={getErodibilityClass(popupInfo.erodibilityValue)}>
                {getErodibilityClass(popupInfo.erodibilityValue)}
              </QualityIndicator>
            </InfoRow>
            
            <ColorBarContainer>
              <ColorBarLabel>Erodibility Level</ColorBarLabel>
              <ColorBar backgroundColor={getErodibilityColor(popupInfo.erodibilityValue)} />
            </ColorBarContainer>
          </>
        ) : null}
      </StyledPopupContent>
    </Popup>
  );
}