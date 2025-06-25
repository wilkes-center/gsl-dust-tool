import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { getPM25DataForAllLakeLevels, metersToFeet } from '../../utils/dataUtils';

const ChartContainer = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 10px;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.colors.snowbirdWhite};
  border-radius: ${({ theme }) => theme.borderRadius.md};
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

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.rockyMountainRust};
  font-size: 12px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

interface PM25ChartProps {
  centroidName: string;
}

export function PM25Chart({ centroidName }: PM25ChartProps) {
  const [data, setData] = useState<{lakeLevel: number, lakeLevelFeet: number, pm25Value: number}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadChartData() {
      setLoading(true);
      setError(null);
      
      try {
        const chartData = await getPM25DataForAllLakeLevels(centroidName);
        if (chartData.length === 0) {
          setError('No data available for this monitoring point');
        } else {
          // Convert to feet and add to data
          const dataWithFeet = chartData.map((item: {lakeLevel: number, pm25Value: number}) => ({
            ...item,
            lakeLevelFeet: Math.round(metersToFeet(item.lakeLevel))
          }));
          setData(dataWithFeet);
        }
      } catch (err) {
        console.error('Error loading PM2.5 chart data:', err);
        setError('Failed to load chart data');
      } finally {
        setLoading(false);
      }
    }

    if (centroidName) {
      loadChartData();
    }
  }, [centroidName]);

  if (loading) {
    return (
      <ChartContainer>
        <ChartTitle>PM2.5 Levels by Lake Elevation</ChartTitle>
        <LoadingText>Loading chart data...</LoadingText>
      </ChartContainer>
    );
  }

  if (error) {
    return (
      <ChartContainer>
        <ChartTitle>PM2.5 Levels by Lake Elevation</ChartTitle>
        <ErrorText>{error}</ErrorText>
      </ChartContainer>
    );
  }

  return (
    <ChartContainer>
      <ChartTitle>PM2.5 Levels by Lake Elevation</ChartTitle>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart 
          data={data} 
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(117, 29, 12, 0.1)" 
          />
          <XAxis 
            dataKey="lakeLevelFeet" 
            stroke="#2d5954"
            fontSize={11}
            tickFormatter={(value) => `${value}ft`}
            type="number"
            scale="linear"
            domain={['dataMin', 'dataMax']}
            ticks={data.map(d => d.lakeLevelFeet)}
            style={{ fontFamily: 'Red Hat Display, sans-serif' }}
          />
          <YAxis 
            stroke="#2d5954"
            fontSize={11}
            tickFormatter={(value) => `${value.toFixed(1)}`}
            width={35}
            style={{ fontFamily: 'Red Hat Display, sans-serif' }}
          />
          <Tooltip 
            formatter={(value: number) => [`${value.toFixed(2)} µg/m³`, 'PM2.5']}
            labelFormatter={(label) => `Lake Level: ${label}ft (${(label / 3.28084).toFixed(1)}m ASL)`}
            contentStyle={{
              backgroundColor: '#f9f6ef',
              border: '1px solid #751d0c',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'Red Hat Display, sans-serif',
              padding: '8px'
            }}
            itemStyle={{
              color: '#1a1a1a'
            }}
            labelStyle={{
              color: '#751d0c',
              fontWeight: 600
            }}
          />
          <Line 
            type="monotone" 
            dataKey="pm25Value" 
            stroke="#751d0c"
            strokeWidth={2.5}
            dot={{ 
              fill: '#751d0c', 
              strokeWidth: 2, 
              r: 4,
              stroke: '#f9f6ef'
            }}
            activeDot={{ 
              r: 6, 
              stroke: '#751d0c', 
              strokeWidth: 2,
              fill: '#f9f6ef'
            }}
            animationBegin={0}
            animationDuration={400}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}