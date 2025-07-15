import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';
import { HelpCircle, X } from 'lucide-react';
import { DustContribution } from '../../utils/dataUtils';

const ChartContainer = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 10px;
  padding: 12px 8px;
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
`;

const ChartTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const ChartTitle = styled.h5`
  margin: 0;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.displayFont};
  letter-spacing: 0.5px;
`;

const HelpIcon = styled.button`
  background: rgba(117, 29, 12, 0.1);
  border: 1px solid rgba(117, 29, 12, 0.2);
  color: ${({ theme }) => theme.colors.moabMahogany};
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    background: rgba(117, 29, 12, 0.2);
    border-color: rgba(117, 29, 12, 0.4);
    transform: scale(1.05);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const LoadingText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

// Custom legend component
const LegendContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px 16px;
  padding: 0 16px;
  max-width: 320px;
  margin: 0 auto;
`;

const LegendItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  
  &:before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${props => props.color};
    border-radius: 3px;
    border: 1px solid rgba(117, 29, 12, 0.2);
    flex-shrink: 0;
  }
`;

const StoryMapModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
`;

const StoryMapContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  height: 80%;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const StoryMapCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10001;
  backdrop-filter: blur(4px);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #666;
  }
`;

const StoryMapIframe = styled.iframe`
  flex: 1;
  border: none;
  width: 100%;
  height: 100%;
`;

// Color scheme using style guide colors
const DUST_COLORS = {
  GSL: '#2d5954',           // Great Salt Lake Green
  Misc: '#cea25d',          // Canyonlands Tan
  SevierLake: '#789ba8',    // Bonneville Salt Flats Blue
  TooleLake: '#99aa88',     // Spiral Jetty Sage
  WestDesert: '#751d0c',    // Moab Mahogany
};

// Friendly names for dust sources
const DUST_SOURCE_NAMES = {
  GSL: 'Great Salt Lake',
  Misc: 'Miscellaneous',
  SevierLake: 'Sevier Lake',
  TooleLake: 'Tule Dry Lake',
  WestDesert: 'West Desert',
};

interface DustContributionChartProps {
  contribution: DustContribution;
  lakeLevel?: number;
}

// Custom label function to render names and percentages on pie slices
const renderCustomizedLabel = (entry: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = entry;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Only show label if it's significant enough (>= 2%)
  if (percent < 0.02) return null;

  return (
    <text 
      x={x} 
      y={y} 
      fill="#f9f6ef"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ 
        textShadow: '1px 1px 3px rgba(26, 26, 26, 0.9)',
        fontFamily: 'Red Hat Display, sans-serif',
        pointerEvents: 'none'
      }}
    >
      <tspan x={x} dy="-0.3em" fontSize="13" fontWeight="600">
        {entry.name}
      </tspan>
      <tspan x={x} dy="1.2em" fontSize="16" fontWeight="700">
        {`${(percent * 100).toFixed(1)}%`}
      </tspan>
    </text>
  );
};

export function DustContributionChart({ contribution, lakeLevel }: DustContributionChartProps) {
  const [showStoryMap, setShowStoryMap] = React.useState(false);

  // Transform data for the pie chart
  const chartData = [
    { name: DUST_SOURCE_NAMES.GSL, value: contribution.GSL, color: DUST_COLORS.GSL },
    { name: DUST_SOURCE_NAMES.Misc, value: contribution.Misc, color: DUST_COLORS.Misc },
    { name: DUST_SOURCE_NAMES.SevierLake, value: contribution.SevierLake, color: DUST_COLORS.SevierLake },
    { name: DUST_SOURCE_NAMES.TooleLake, value: contribution.TooleLake, color: DUST_COLORS.TooleLake },
    { name: DUST_SOURCE_NAMES.WestDesert, value: contribution.WestDesert, color: DUST_COLORS.WestDesert }
  ].filter(item => item.value > 0); // Only show sources with contributions

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div style={{
          backgroundColor: '#f9f6ef',
          border: '1px solid #751d0c',
          borderRadius: '4px',
          padding: '8px',
          fontSize: '12px',
          fontFamily: 'Red Hat Display, sans-serif'
        }}>
          <p style={{ 
            margin: 0, 
            fontWeight: 600,
            color: '#1a1a1a'
          }}>
            {data.name}
          </p>
          <p style={{ 
            margin: 0, 
            color: data.payload.color,
            fontWeight: 500
          }}>
            {`${data.value.toFixed(1)}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <ChartContainer>
        <ChartTitleContainer>
          <ChartTitle>
            Dust Source Contributions
            <br />
            (Lake Level {lakeLevel || 1275}m)
          </ChartTitle>
          <HelpIcon
            onClick={() => setShowStoryMap(true)}
            title="Learn more about dust source contributions"
          >
            <HelpCircle />
          </HelpIcon>
        </ChartTitleContainer>
        <ResponsiveContainer width="100%" height="75%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius={50}
              outerRadius={130}
              paddingAngle={2}
              dataKey="value"
              animationBegin={0}
              animationDuration={400}
              isAnimationActive={true}
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke="rgba(117, 29, 12, 0.1)"
                  strokeWidth={1}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Custom legend */}
        <LegendContainer>
          {chartData.map((entry, index) => (
            <LegendItem key={`legend-${index}`} color={entry.color}>
              {entry.name}
            </LegendItem>
          ))}
        </LegendContainer>
      </ChartContainer>

      {/* Story Map Modal */}
      {showStoryMap && (
        <StoryMapModal onClick={() => setShowStoryMap(false)}>
          <StoryMapContent onClick={(e) => e.stopPropagation()}>
            <StoryMapCloseButton onClick={() => setShowStoryMap(false)}>
              <X />
            </StoryMapCloseButton>
            <StoryMapIframe
              src="https://storymaps.arcgis.com/stories/8e1c5b2194184d54b89662719439dddd#ref-n-GA7AVq"
              allowFullScreen
              allow="geolocation"
              title="Dust Source Contributions Interactive Story"
            />
          </StoryMapContent>
        </StoryMapModal>
      )}
    </>
  );
}