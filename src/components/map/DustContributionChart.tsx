import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';
import { DustContribution } from '../../utils/dataUtils';

const ChartContainer = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 10px;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
`;

const ChartTitle = styled.h5`
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.semiBold};
  color: ${({ theme }) => theme.colors.moabMahogany};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.displayFont};
  letter-spacing: 0.5px;
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
  bottom: 15px;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
  padding: 0 20px;
  max-width: 350px;
  margin: 0 auto;
`;

const LegendItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.olympicParkObsidian};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  
  &:before {
    content: '';
    width: 16px;
    height: 16px;
    background-color: ${props => props.color};
    border-radius: 3px;
    border: 1px solid rgba(117, 29, 12, 0.2);
    flex-shrink: 0;
  }
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
    <ChartContainer>
      <ChartTitle>
        Dust Source Contributions
        <br />
        (Lake Level {lakeLevel || 1275}m)
      </ChartTitle>
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
  );
}