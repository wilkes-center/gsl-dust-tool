// Header.tsx
import styled from 'styled-components';
import { getFormattedElevation } from '../utils/formatUtils';

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.moabMahogany};
  color: ${({ theme }) => theme.colors.snowbirdWhite};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndices.mapOverlays};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.displayFont};
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  font-size: 28px;
  margin: 0;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InfoLabel = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.light};
  opacity: 0.8;
`;

const InfoValue = styled.span`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

interface HeaderProps {
  elevation: number;
  onBackToIntro: () => void;
}

function Header({ elevation, onBackToIntro }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title onClick={onBackToIntro}>GREAT SALT LAKE BASIN DUST EXPOSURE MODELING TOOL</Title>
      <InfoContainer>
        <InfoItem>
          <InfoLabel>Lake Level</InfoLabel>
          <InfoValue>{getFormattedElevation(elevation)}</InfoValue>
        </InfoItem>
      </InfoContainer>
    </HeaderContainer>
  );
}

export default Header;