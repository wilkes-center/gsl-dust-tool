import React from 'react';
import styled from 'styled-components';

interface ElevationChartProps {
  currentYear?: number;
}

/**
 * Great Salt Lake elevation chart component showing historical water levels
 */
const ElevationChart: React.FC<ElevationChartProps> = ({ currentYear = 2023 }) => {
  // Digitized elevation data from the graph (1980-2023)
  const elevationData = [
    { year: 1980, elevation: 4200.5 },
    { year: 1981, elevation: 4200.8 },
    { year: 1982, elevation: 4201.2 },
    { year: 1983, elevation: 4202.8 },
    { year: 1984, elevation: 4211.6 }, // Record high period
    { year: 1985, elevation: 4210.8 },
    { year: 1986, elevation: 4209.2 },
    { year: 1987, elevation: 4208.5 },
    { year: 1988, elevation: 4206.8 },
    { year: 1989, elevation: 4204.2 },
    { year: 1990, elevation: 4202.1 },
    { year: 1991, elevation: 4199.8 },
    { year: 1992, elevation: 4194.2 },
    { year: 1993, elevation: 4192.8 },
    { year: 1994, elevation: 4194.5 },
    { year: 1995, elevation: 4196.2 },
    { year: 1996, elevation: 4198.1 },
    { year: 1997, elevation: 4200.3 },
    { year: 1998, elevation: 4202.8 },
    { year: 1999, elevation: 4205.2 },
    { year: 2000, elevation: 4202.1 },
    { year: 2001, elevation: 4199.8 },
    { year: 2002, elevation: 4197.2 },
    { year: 2003, elevation: 4194.8 },
    { year: 2004, elevation: 4196.5 },
    { year: 2005, elevation: 4198.2 },
    { year: 2006, elevation: 4195.8 },
    { year: 2007, elevation: 4193.2 },
    { year: 2008, elevation: 4194.8 },
    { year: 2009, elevation: 4196.2 },
    { year: 2010, elevation: 4197.8 },
    { year: 2011, elevation: 4200.2 },
    { year: 2012, elevation: 4196.8 },
    { year: 2013, elevation: 4194.2 },
    { year: 2014, elevation: 4192.8 },
    { year: 2015, elevation: 4191.2 },
    { year: 2016, elevation: 4190.8 },
    { year: 2017, elevation: 4193.2 },
    { year: 2018, elevation: 4195.8 },
    { year: 2019, elevation: 4194.2 },
    { year: 2020, elevation: 4191.8 },
    { year: 2021, elevation: 4190.2 },
    { year: 2022, elevation: 4188.5 }, // Near record low
    { year: 2023, elevation: 4194.8 }
  ];

  const minYear = 1980;
  const maxYear = 2023;
  const minElevation = 4188;
  const maxElevation = 4214;
  const chartWidth = 400;
  const chartHeight = 200;

  // Convert data to SVG coordinates
  const getX = (year: number) => ((year - minYear) / (maxYear - minYear)) * chartWidth;
  const getY = (elevation: number) => chartHeight - ((elevation - minElevation) / (maxElevation - minElevation)) * chartHeight;

  // Create path string for the elevation line
  const pathData = elevationData
    .map((point, index) => {
      const x = getX(point.year);
      const y = getY(point.elevation);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  // Find current year data point
  const currentYearData = elevationData.find(d => d.year === currentYear);
  const currentX = currentYearData ? getX(currentYearData.year) : 0;
  const currentY = currentYearData ? getY(currentYearData.elevation) : 0;

  // Generate grid lines and labels
  const yearTicks = [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2023];
  const elevationTicks = [4190, 4195, 4200, 4205, 4210];

  return (
    <ChartContainer>
      <ChartTitle>Great Salt Lake Elevation (1980-2023)</ChartTitle>
      <ChartWrapper>
        <svg width={chartWidth + 80} height={chartHeight + 60} viewBox={`0 0 ${chartWidth + 80} ${chartHeight + 60}`}>
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect x="50" y="10" width={chartWidth} height={chartHeight} fill="url(#grid)" />

          {/* Y-axis labels (elevation) */}
          {elevationTicks.map(elevation => (
            <g key={elevation}>
              <line
                x1="45"
                y1={getY(elevation) + 10}
                x2="50"
                y2={getY(elevation) + 10}
                stroke="#666"
                strokeWidth="1"
              />
              <text
                x="40"
                y={getY(elevation) + 15}
                textAnchor="end"
                fontSize="10"
                fill="#666"
              >
                {elevation}
              </text>
            </g>
          ))}

          {/* X-axis labels (years) */}
          {yearTicks.map(year => (
            <g key={year}>
              <line
                x1={getX(year) + 50}
                y1={chartHeight + 10}
                x2={getX(year) + 50}
                y2={chartHeight + 15}
                stroke="#666"
                strokeWidth="1"
              />
              <text
                x={getX(year) + 50}
                y={chartHeight + 28}
                textAnchor="middle"
                fontSize="9"
                fill="#666"
              >
                {year}
              </text>
            </g>
          ))}

          {/* Elevation line */}
          <path
            d={pathData}
            fill="none"
            stroke="#2980b9"
            strokeWidth="2"
            transform="translate(50, 10)"
          />

          {/* Fill area under the curve */}
          <path
            d={`${pathData} L ${getX(maxYear)} ${chartHeight} L ${getX(minYear)} ${chartHeight} Z`}
            fill="rgba(41, 128, 185, 0.1)"
            transform="translate(50, 10)"
          />

          {/* Record high annotation */}
          <g transform="translate(50, 10)">
            <circle
              cx={getX(1984)}
              cy={getY(4211.6)}
              r="4"
              fill="#e74c3c"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={getX(1984)}
              y={getY(4211.6) - 10}
              textAnchor="middle"
              fontSize="8"
              fill="#e74c3c"
              fontWeight="bold"
            >
              Record High
            </text>
          </g>

          {/* Record low annotation */}
          <g transform="translate(50, 10)">
            <circle
              cx={getX(2022)}
              cy={getY(4188.5)}
              r="4"
              fill="#e74c3c"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={getX(2022)}
              y={getY(4188.5) + 20}
              textAnchor="middle"
              fontSize="8"
              fill="#e74c3c"
              fontWeight="bold"
            >
              Record Low
            </text>
          </g>

          {/* Current year highlight */}
          {currentYearData && (
            <g transform="translate(50, 10)">
              <circle
                cx={currentX}
                cy={currentY}
                r="6"
                fill="#f39c12"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1={currentX}
                y1="0"
                x2={currentX}
                y2={chartHeight}
                stroke="#f39c12"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.7"
              />
              <text
                x={currentX}
                y={currentY - 15}
                textAnchor="middle"
                fontSize="10"
                fill="#f39c12"
                fontWeight="bold"
              >
                {currentYear}: {currentYearData.elevation.toFixed(1)} ft
              </text>
            </g>
          )}

          {/* Axes */}
          <line x1="50" y1="10" x2="50" y2={chartHeight + 10} stroke="#333" strokeWidth="2" />
          <line x1="50" y1={chartHeight + 10} x2={chartWidth + 50} y2={chartHeight + 10} stroke="#333" strokeWidth="2" />

          {/* Axis labels */}
          <text
            x="25"
            y={chartHeight / 2 + 10}
            textAnchor="middle"
            fontSize="12"
            fill="#333"
            transform={`rotate(-90, 25, ${chartHeight / 2 + 10})`}
          >
            Elevation (feet)
          </text>
          <text
            x={chartWidth / 2 + 50}
            y={chartHeight + 50}
            textAnchor="middle"
            fontSize="12"
            fill="#333"
          >
            Year
          </text>
        </svg>
      </ChartWrapper>
      
      <ChartLegend>
        <LegendItem>
          <LegendColor color="#2980b9" />
          <span>Lake Elevation</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#f39c12" />
          <span>Current Year (Timelapse)</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#e74c3c" />
          <span>Record High/Low</span>
        </LegendItem>
      </ChartLegend>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const ChartTitle = styled.h3`
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${props => props.color};
  border-radius: 2px;
`;

export default ElevationChart; 