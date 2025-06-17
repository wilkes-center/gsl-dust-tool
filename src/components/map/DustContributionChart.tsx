import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LabelList } from 'recharts';
import styled from 'styled-components';
import { DustContribution } from '../../utils/dataUtils';

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 15px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

const ChartTitle = styled.h5`
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

const LoadingText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  font-size: 14px;
`;

// Color scheme for dust sources
const DUST_COLORS = {
  GSL: '#3b82f6',           // Blue for Great Salt Lake
  Misc: '#ef4444',          // Red for Miscellaneous
  SevierLake: '#22c55e',    // Green for Sevier Lake
  TooleLake: '#ca8a04',     // Yellow for Tule Dry Lake
  WestDesert: '#a855f7',    // Purple for West Desert
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
}

// Custom label function to render percentages on pie slices
const renderCustomizedLabel = (entry: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = entry;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Only show percentage if it's significant enough (>= 2%)
  if (percent < 0.02) return null;

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize="12"
      fontWeight="bold"
      style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export function DustContributionChart({ contribution }: DustContributionChartProps) {
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
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '8px',
          fontSize: '12px'
        }}>
          <p style={{ margin: 0 }}>
            <strong>{data.name}</strong>
          </p>
          <p style={{ margin: 0, color: data.payload.color }}>
            {`${data.value.toFixed(1)}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartContainer>
      <ChartTitle>Dust Source Contributions (Lake Level 1275m)</ChartTitle>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            innerRadius={30}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry: any) => (
              <span style={{ color: entry.color, fontSize: '11px' }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
} 