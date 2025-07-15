import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Search, X, MapPin } from 'lucide-react';

interface SearchResult {
  id: string;
  place_name: string;
  center: [number, number];
  place_type: string[];
}

interface SearchBarProps {
  onLocationSelect: (longitude: number, latitude: number, placeName: string) => void;
}

/**
 * Search bar component for location search using Mapbox Geocoding API
 */
export const SearchBar: React.FC<SearchBarProps> = ({ onLocationSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<number | undefined>(undefined);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchLocations = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}&country=US&bbox=-114.0,40.0,-109.0,42.0&limit=5`
      );

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      setResults(data.features || []);
      setIsOpen(true);
    } catch (error) {
      setError('Search failed. Please try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Clear previous debounce
    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current);
    }

    // Debounce search
    debounceRef.current = window.setTimeout(() => {
      searchLocations(value);
    }, 300);
  }, [searchLocations]);

  const handleResultClick = useCallback((result: SearchResult) => {
    const [longitude, latitude] = result.center;
    onLocationSelect(longitude, latitude, result.place_name);
    setQuery(result.place_name);
    setIsOpen(false);
    setResults([]);
  }, [onLocationSelect]);

  const handleClear = useCallback(() => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setError(null);
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  }, []);

  return (
    <SearchContainer ref={searchRef}>
      <SearchInputContainer>
        <SearchIcon>
          <Search size={16} />
        </SearchIcon>
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder="Search places / zipcode"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setIsOpen(true)}
        />
        {query && (
          <ClearButton onClick={handleClear}>
            <X size={14} />
          </ClearButton>
        )}
      </SearchInputContainer>

      {isOpen && (
        <ResultsDropdown>
          {isLoading && (
            <LoadingItem>Searching...</LoadingItem>
          )}
          
          {error && (
            <ErrorItem>{error}</ErrorItem>
          )}
          
          {!isLoading && !error && results.length === 0 && query && (
            <NoResultsItem>No results found</NoResultsItem>
          )}
          
          {!isLoading && !error && results.map((result) => (
            <ResultItem key={result.id} onClick={() => handleResultClick(result)}>
              <MapPin size={14} />
              <ResultText>
                <ResultName>{result.place_name}</ResultName>
              </ResultText>
            </ResultItem>
          ))}
        </ResultsDropdown>
      )}
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: ${({ theme }) => theme.zIndices.modals}; /* Increased from mapControls to modals */
  width: 250px;
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.2s ease;
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.bonnevilleSaltFlatsBlue};
    box-shadow: 0 0 0 3px rgba(120, 155, 168, 0.1);
  }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.bonnevilleSaltFlatsBlue};
  pointer-events: none;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xs};
  margin-right: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(117, 29, 12, 0.05);
    color: ${({ theme }) => theme.colors.moabMahogany};
  }
`;

const ResultsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.snowbirdWhite};
  border: 2px solid ${({ theme }) => theme.colors.moabMahogany};
  border-top: none;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  max-height: 200px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndices.tooltips}; /* Increased to tooltips (highest) to ensure it's above everything */
`;

const ResultItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  background: none;
  border: none;
  border-bottom: 1px solid rgba(117, 29, 12, 0.1);
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(117, 29, 12, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  svg {
    color: ${({ theme }) => theme.colors.bonnevilleSaltFlatsBlue};
    flex-shrink: 0;
  }
`;

const ResultText = styled.div`
  flex: 1;
  min-width: 0;
`;

const ResultName = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LoadingItem = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`;

const ErrorItem = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.rockyMountainRust};
`;

const NoResultsItem = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`; 