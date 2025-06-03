import React from 'react';
import styled from 'styled-components';
import { metersToFeet } from '../../utils/dataUtils';

interface LakeHealthPanelProps {
  selectedLakeLevel: number; // Now expects meters
}

/**
 * Lake health panel component for displaying current lake level and impacts
 */
const LakeHealthPanel: React.FC<LakeHealthPanelProps> = ({ selectedLakeLevel }) => {
  // Convert thresholds from feet to meters for comparison
  // 4198 ft = ~1279.5 m, 4193 ft = ~1278.0 m
  const getHealthStatus = (level: number) => {
    if (level >= 1279.5) return 'healthy';
    if (level >= 1278.0) return 'adverse';
    return 'serious';
  };

  const getImpacts = (level: number) => {
    if (level >= 1279.5) {
      return {
        severity: 'low',
        impacts: [
          'Thriving ecosystem with diverse wildlife',
          'Full recreational access and tourism',
          'Minimal dust emissions',
          'Stable brine shrimp populations'
        ]
      };
    } else if (level >= 1278.0) {
      return {
        severity: 'medium',
        impacts: [
          'Increased salinity stress on ecosystem',
          'Some recreational areas becoming inaccessible',
          'Moderate dust emissions affecting air quality',
          'Declining brine shrimp populations'
        ]
      };
    } else {
      return {
        severity: 'high',
        impacts: [
          'Critical ecosystem stress and habitat loss',
          'Severe dust health risks for 2.5M residents',
          'Major economic losses in tourism and industry',
          'Potential collapse of brine shrimp fishery'
        ]
      };
    }
  };

  const healthStatus = getHealthStatus(selectedLakeLevel);
  const { severity, impacts } = getImpacts(selectedLakeLevel);

  return (
    <PanelContainer>
      <HealthLevelsTitle>Current Lake Health</HealthLevelsTitle>
      <CurrentLevelIndicator>
        {Math.round(metersToFeet(selectedLakeLevel))} ft
      </CurrentLevelIndicator>
      <HealthStatus status={healthStatus}>
        {healthStatus === 'healthy' ? 'Healthy' : 
         healthStatus === 'adverse' ? 'Moderate Risk' : 'Crisis Level'}
      </HealthStatus>
      <ImpactDetails>
        <ImpactTitle>Current Impacts</ImpactTitle>
        <ImpactList>
          {impacts.map((impact, index) => (
            <ImpactItem key={index} severity={severity}>
              {impact}
            </ImpactItem>
          ))}
        </ImpactList>
      </ImpactDetails>
    </PanelContainer>
  );
};

const PanelContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  max-width: 320px;
  z-index: 1000;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    margin: 20px 0;
    max-width: 100%;
  }
`;

const HealthLevelsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 15px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CurrentLevelIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

const HealthStatus = styled.div<{ status: string }>`
  padding: 8px 16px;
  border-radius: 20px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
  background: ${props => 
    props.status === 'healthy' ? '#27ae60' :
    props.status === 'adverse' ? '#f39c12' : '#e74c3c'
  };
  color: white;
`;

const ImpactDetails = styled.div`
  margin-top: 15px;
`;

const ImpactTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 10px 0;
`;

const ImpactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ImpactItem = styled.li<{ severity: string }>`
  padding: 8px 12px;
  margin-bottom: 6px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.4;
  border-left: 4px solid ${props => 
    props.severity === 'low' ? '#27ae60' :
    props.severity === 'medium' ? '#f39c12' : '#e74c3c'
  };
  background: ${props => 
    props.severity === 'low' ? '#d5f4e6' :
    props.severity === 'medium' ? '#fef9e7' : '#fadbd8'
  };
  color: #2c3e50;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default LakeHealthPanel; 