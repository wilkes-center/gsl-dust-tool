/**
 * Utility functions for formatting PM values with subscripts
 */

export const formatPM25 = () => 'PM₂.₅';
export const formatPM10 = () => 'PM₁₀';

export const formatPMValue = (type: '2.5' | '10') => {
  return type === '2.5' ? 'PM₂.₅' : 'PM₁₀';
}; 