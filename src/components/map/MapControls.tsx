// MapControls.tsx
import styled from 'styled-components';
import { MapLayers } from './types';

const MapControlsPanel = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndices.mapControls};
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  max-width: 250px;
  max-height: 70vh;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  
  h2 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    letter-spacing: 1px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.moabMahogany};
    padding-bottom: ${({ theme }) => theme.spacing.xs};
    font-family: ${({ theme }) => theme.typography.displayFont};
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.olympicParkObsidian};
    font-size: 13px;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;

const ControlGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: 4px;
  
  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    margin-left: -4px;
    color: ${({ theme }) => theme.colors.olympicParkObsidian};
    font-size: 13px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
  
  label {
    display: block;
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    color: ${({ theme }) => theme.colors.olympicParkObsidian};
    letter-spacing: 0.5px;
    font-size: 12px;
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }
`;

const LayerToggle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 4px 0;
  
  input {
    margin-right: ${({ theme }) => theme.spacing.xs};
    flex-shrink: 0;
    cursor: pointer;
    height: 14px;
    width: 14px;
    accent-color: ${({ theme }) => theme.colors.moabMahogany};
  }
  
  label {
    margin-bottom: 0;
    cursor: pointer;
    text-transform: none;
    letter-spacing: 0.5px;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    line-height: 1.3;
  }
`;

const InfoBox = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding-top: ${({ theme }) => theme.spacing.xs};
  border-top: 1px solid ${({ theme }) => theme.colors.moabMahogany};
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: 11px;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.moabMahogany};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }
`;

const Legend = styled.div`
  font-size: 11px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(249, 246, 239, 0.95);
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border-left: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  
  h4 {
    color: ${({ theme }) => theme.colors.moabMahogany};
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.weights.semiBold};
    letter-spacing: 0.5px;
    font-family: ${({ theme }) => theme.typography.displayFont};
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  font-size: 11px;
  letter-spacing: 0.5px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ColorBox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid rgba(117, 29, 12, 0.3);
`;

interface MapControlsProps {
  layers: MapLayers;
  toggleLayer: (layerName: keyof MapLayers) => void;
}

export function MapControlsComponent({
  layers,
  toggleLayer
}: MapControlsProps) {
  return (
    <MapControlsPanel>
      <h2>MAP CONTROLS</h2>
      
      <ControlGroup>
        <h3>DATA LAYERS</h3>
        <LayerToggle>
          <input 
            type="checkbox" 
            checked={layers.satellite} 
            onChange={() => toggleLayer('satellite')} 
            id="satellite-layer"
          />
          <label htmlFor="satellite-layer">Satellite Imagery</label>
        </LayerToggle>
        
        <LayerToggle>
          <input 
            type="checkbox" 
            checked={layers.bathymetry} 
            onChange={() => toggleLayer('bathymetry')} 
            id="bathymetry-layer"
          />
          <label htmlFor="bathymetry-layer">Lake Bathymetry</label>
        </LayerToggle>
        
        <LayerToggle>
          <input
            type="checkbox"
            checked={layers.censusTracts}
            onChange={() => toggleLayer('censusTracts')}
            id="census-tracts-layer"
          />
          <label htmlFor="census-tracts-layer">Census Tracts</label>
        </LayerToggle>
        
        <LayerToggle>
          <input
            type="checkbox"
            checked={layers.pm25Data}
            onChange={() => toggleLayer('pm25Data')}
            id="pm25-layer"
          />
          <label htmlFor="pm25-layer">PM2.5 Concentrations</label>
        </LayerToggle>
        
        <LayerToggle>
          <input
            type="checkbox"
            checked={layers.erodibility}
            onChange={() => toggleLayer('erodibility')}
            id="erodibility-layer"
          />
          <label htmlFor="erodibility-layer">Soil Erodibility</label>
        </LayerToggle>
      </ControlGroup>
      
      {/* Display legends if their layers are selected */}
      <InfoBox style={{ marginTop: '4px', paddingTop: '4px' }}>
        {/* Census Tracts Brown legend */}
        {layers.censusTracts && (
          <Legend>
            <h4>CENSUS TRACTS (PM2.5)</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#f7f2e9'}} />
                <span>&lt; 5 µg/m³</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#e8dcc6'}} />
                <span>5-10 µg/m³</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#d6c5a2'}} />
                <span>10-15 µg/m³</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#c4a373'}} />
                <span>15-20 µg/m³</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#a0784a'}} />
                <span>&gt; 20 µg/m³</span>
              </LegendItem>
            </div>
          </Legend>
        )}

        {/* PM2.5 legend for point data */}
        {layers.pm25Data && (
          <Legend>
            <h4>PM2.5 POINTS</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#f7f2e9'}} />
                <span>&lt; 5 µg/m³</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#e8dcc6'}} />
                <span>5-10 µg/m³</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#d6c5a2'}} />
                <span>10-15 µg/m³</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#c4a373'}} />
                <span>15-20 µg/m³</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#a0784a'}} />
                <span>&gt; 20 µg/m³</span>
              </LegendItem>
            </div>
          </Legend>
        )}
      
        {/* Erodibility legend */}
        {layers.erodibility && (
          <Legend>
            <h4>SOIL ERODIBILITY</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#a0856b'}} />
                <span>0.2 - 0.3</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#7d6a52'}} />
                <span>0.3 - 0.6</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#5c4e3a'}} />
                <span>0.6 - 0.94</span>
              </LegendItem>
              <LegendItem>
                <ColorBox style={{backgroundColor: '#3d3025'}} />
                <span>≥ 0.94</span>
              </LegendItem>
            </div>
          </Legend>
        )}
      </InfoBox>
    </MapControlsPanel>
  );
}

export default MapControlsComponent;