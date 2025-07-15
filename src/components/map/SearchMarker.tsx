import React from 'react';
import { Marker } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import styled from 'styled-components';

/**
 * SearchMarker component displays a marker on the map for search results.
 * Shows the location name in a popup and provides a close button.
 */

interface SearchMarkerProps {
  longitude: number;
  latitude: number;
  placeName: string;
  onClose: () => void;
}

const MarkerContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const MarkerIcon = styled(MapPin)`
  color: ${({ theme }) => theme.colors.moabMahogany};
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  background: white;
  border-radius: 50%;
  padding: 2px;
`;

const MarkerPopup = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 6px;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.moabMahogany};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  background: ${({ theme }) => theme.colors.moabMahogany};
  color: white;
  border: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({ theme }) => theme.colors.olympicParkObsidian};
  }
`;

export const SearchMarker: React.FC<SearchMarkerProps> = ({
  longitude,
  latitude,
  placeName,
  onClose,
}) => {
  return (
    <Marker longitude={longitude} latitude={latitude}>
      <MarkerContainer>
        <MarkerIcon size={24} fill="white" />
        <MarkerPopup>
          <CloseButton onClick={onClose}>×</CloseButton>
          {placeName}
        </MarkerPopup>
      </MarkerContainer>
    </Marker>
  );
}; 