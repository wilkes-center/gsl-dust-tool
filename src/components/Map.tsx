import DustMap from './map/DustMap';

interface MapProps {
  onElevationChange?: (elevation: number) => void;
  onTimestampChange?: (timestamp: string) => void;
  onBackToIntro?: () => void;
  onMapLoad?: () => void;
}

export default function Map(props: MapProps) {
  return <DustMap {...props} />;
}