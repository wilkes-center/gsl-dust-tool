import { Popup } from 'react-map-gl';
import { PopupContent, ColorBar } from '../MapStyled';
import { PopupInfo } from './types';
import { getAggregatedPM10Color } from '../../utils/dataUtils';
import { getErodibilityColor } from './constants';
import { PM10Chart } from './PM10Chart';

interface MapPopupProps {
  popupInfo: PopupInfo | null;
  onClose: () => void;
  averagedPM10Data: Record<string, number>;
  centroidLocations: any[];
}

export function MapPopupComponent({
  popupInfo,
  onClose,
  averagedPM10Data,
  centroidLocations
}: MapPopupProps) {
  if (!popupInfo) return null;

  return (
    <Popup
      longitude={popupInfo.longitude}
      latitude={popupInfo.latitude}
      closeButton={true}
      closeOnClick={false}
      onClose={onClose}
      anchor="bottom"
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
            
            {popupInfo.hasPM10Data ? (
              <>
                <p>PM10 Monitoring: <span className="highlight">Active</span></p>
                {/* Find the corresponding centroid and display its PM10 value */}
                {centroidLocations.find(c => c.geoid === popupInfo.GEOID20) && (
                  (() => {
                    const centroid = centroidLocations.find(c => c.geoid === popupInfo.GEOID20);
                    if (centroid) {
                      const pm10Value = averagedPM10Data[centroid.centroid_name] as number;
                      return (
                        <>
                          <p>Monitoring Point: <span className="highlight">{centroid.centroid_name}</span></p>
                          <p>Average PM10 (All Periods): <span className="highlight">{pm10Value.toFixed(1)} µg/m³</span></p>
                          <p>Risk Level: <span className="highlight">{
                            pm10Value < 5 ? "Low" : 
                            pm10Value < 10 ? "Moderate" : 
                            pm10Value < 15 ? "High" : 
                            pm10Value < 20 ? "Very High" : "Extreme"
                          }</span></p>
                          <ColorBar backgroundColor={getAggregatedPM10Color(pm10Value)} />
                          <PM10Chart centroidName={centroid.centroid_name} />
                        </>
                      );
                    }
                    return null;
                  })()
                )}
              </>
            ) : (
              <p>PM10 Monitoring: <span className="highlight">Not available for this tract</span></p>
            )}
          </>
        ) : popupInfo.type === 'pm10' ? (
          <>
            <h4>PM10 Concentration Data (Averaged)</h4>
            <p>Monitoring Point: <span className="highlight">{popupInfo.centroidName}</span></p>
            <p>Average PM10 (All Periods): <span className="highlight">{popupInfo.pm10Value.toFixed(1)} µg/m³</span></p>
            <p>Risk Level: <span className="highlight">{
              popupInfo.pm10Value < 5 ? "Low" : 
              popupInfo.pm10Value < 10 ? "Moderate" : 
              popupInfo.pm10Value < 15 ? "High" : 
              popupInfo.pm10Value < 20 ? "Very High" : "Extreme"
            }</span></p>
            {popupInfo.geoid && <p>Census Tract: <span className="highlight">{popupInfo.geoid}</span></p>}
            <ColorBar backgroundColor={getAggregatedPM10Color(popupInfo.pm10Value)} />
          </>
        ) : popupInfo.type === 'erodibility' && (
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
        )}
      </PopupContent>
    </Popup>
  );
} 