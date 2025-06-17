import React from 'react';
import { Popup } from 'react-map-gl';
import { PopupContent, ColorBar } from '../MapStyled';
import { PopupInfo } from './types';
import { getAggregatedPM25Color, DustContribution } from '../../utils/dataUtils';
import { getErodibilityColor } from './constants';
import { PM25Chart } from './PM25Chart';
import { DustContributionChart } from './DustContributionChart';

interface MapPopupProps {
  popupInfo: PopupInfo | null;
  onClose: () => void;
  centroidLocations: any[];
  averagedPM25Data: Record<string, number>;
  dustContributions: Record<string, DustContribution>;
  mapRef?: React.RefObject<any>;
}

export function MapPopup({
  popupInfo,
  onClose,
  centroidLocations,
  averagedPM25Data,
  dustContributions,
  mapRef,
}: MapPopupProps) {
  if (!popupInfo) return null;

  // Calculate the best anchor position to keep popup within viewport
  const getOptimalAnchor = () => {
    if (!mapRef?.current) return 'bottom';
    
    const map = mapRef.current.getMap();
    const bounds = map.getBounds();
    const center = map.getCenter();
    
    const popupLng = popupInfo.longitude;
    const popupLat = popupInfo.latitude;
    
    // Calculate relative position within the viewport
    const lngRange = bounds.getEast() - bounds.getWest();
    const latRange = bounds.getNorth() - bounds.getSouth();
    
    const relativeX = (popupLng - bounds.getWest()) / lngRange;
    const relativeY = (bounds.getNorth() - popupLat) / latRange;
    
    // Choose anchor based on position within viewport
    if (relativeY < 0.3) {
      // Near top of viewport
      return relativeX < 0.5 ? 'top-left' : 'top-right';
    } else if (relativeY > 0.7) {
      // Near bottom of viewport
      return relativeX < 0.5 ? 'bottom-left' : 'bottom-right';
    } else {
      // Middle of viewport vertically
      return relativeX < 0.5 ? 'left' : 'right';
    }
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
      maxWidth="400px"
      style={{
        zIndex: 1000
      }}
    >
      <PopupContent>
        {popupInfo.type === 'bathymetry' ? (
          <>
            <h4>Bathymetry Data</h4>
            <p>Elevation: <span className="highlight">{popupInfo.depth.toFixed(2)} meters</span> above sea level</p>
          </>
        ) : popupInfo.type === 'censusTract' ? (
          <>
            <h4>Census Tract Information</h4>
            <p>Census Tract ID: <span className="highlight">{popupInfo.GEOID20}</span></p>
            <p>Location: <span className="highlight">{popupInfo.INTPTLAT20}, {popupInfo.INTPTLON20}</span></p>
            
            {popupInfo.hasPM25Data ? (
              <>
                <p>PM2.5 Monitoring: <span className="highlight">Active</span></p>
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
                      <p>Monitoring Point: <span className="highlight">{centroid.centroid_name}</span></p>
                      <p>Average PM2.5 (All Periods): <span className="highlight">{pm25Value.toFixed(1)} µg/m³</span></p>
                      <p>Air Quality: <span className="highlight">{
                        pm25Value < 5 ? "Low" :
                        pm25Value < 10 ? "Moderate" :
                        pm25Value < 15 ? "High" :
                        pm25Value < 20 ? "Very High" : "Extreme"
                      }</span></p>
                      <ColorBar backgroundColor={getAggregatedPM25Color(pm25Value)} />
                      <PM25Chart centroidName={centroid.centroid_name} />
                      {dustContribution && <DustContributionChart contribution={dustContribution} />}
                    </>
                  );
                })()}
              </>
            ) : (
              <p>PM2.5 Monitoring: <span className="highlight">Not available for this tract</span></p>
            )}
          </>
        ) : popupInfo.type === 'pm25' ? (
          <>
            <h4>PM2.5 Concentration Data (Averaged)</h4>
            <p>Monitoring Point: <span className="highlight">{popupInfo.centroidName}</span></p>
            <p>Average PM2.5 (All Periods): <span className="highlight">{popupInfo.pm25Value.toFixed(1)} µg/m³</span></p>
            <p>Air Quality: <span className="highlight">{
              popupInfo.pm25Value < 5 ? "Low" :
              popupInfo.pm25Value < 10 ? "Moderate" :
              popupInfo.pm25Value < 15 ? "High" :
              popupInfo.pm25Value < 20 ? "Very High" : "Extreme"
            }</span></p>
            {popupInfo.geoid && <p>Census Tract: <span className="highlight">{popupInfo.geoid}</span></p>}
            <ColorBar backgroundColor={getAggregatedPM25Color(popupInfo.pm25Value)} />
          </>
        ) : popupInfo.type === 'erodibility' ? (
          <>
            <h4>Soil Erodibility Data</h4>
            <p>Erodibility Index: <span className="highlight">{popupInfo.erodibilityValue.toFixed(2)}</span></p>
            <p>Erodibility Class: <span className="highlight">{
              popupInfo.erodibilityValue <= 0.3 ? "Moderate" : 
              popupInfo.erodibilityValue <= 0.6 ? "High" : 
              popupInfo.erodibilityValue <= 0.94 ? "Very High" : "Extreme"
            }</span></p>
            <ColorBar backgroundColor={getErodibilityColor(popupInfo.erodibilityValue)} />
          </>
        ) : null}
      </PopupContent>
    </Popup>
  );
} 