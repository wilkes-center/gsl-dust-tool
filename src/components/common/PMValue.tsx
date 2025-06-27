import React from 'react';

interface PMValueProps {
  type: '2.5' | '10';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Component for displaying PM values with proper subscript formatting
 */
const PMValue: React.FC<PMValueProps> = ({ type, className, style }) => {
  return (
    <span className={className} style={style}>
      PM<sub>{type}</sub>
    </span>
  );
};

export default PMValue; 