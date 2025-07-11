import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { getPM10DataForAllLakeLevels, metersToFeet } from '../../utils/dataUtils';
import PMValue from '../common/PMValue';

const ChartContainer = styled.div`
  width: 100%;
  height: 200px;
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

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #dc3545;
  font-size: 14px;
`;

interface PM10ChartProps {
  centroidName: string;
}

export function PM10Chart({ centroidName }: PM10ChartProps) {
  const [data, setData] = useState<{lakeLevel: number, lakeLevelFeet: number, pm10Value: number}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadChartData() {
      setLoading(true);
      setError(null);
      
      try {
        const chartData = await getPM10DataForAllLakeLevels(centroidName);
        if (chartData.length === 0) {
          setError('No data available for this monitoring point');
        } else {
          // Keep original meter values for data positioning, add feet for display
          const dataWithFeet = chartData.map((item: {lakeLevel: number, pm10Value: number}) => ({
            ...item,
            lakeLevelFeet: metersToFeet(item.lakeLevel) // Don't round - keep precise conversion
          }));
          setData(dataWithFeet);
        }
      } catch (err) {
        console.error('Error loading PM₁₀ chart data:', err);
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
        <ChartTitle><PMValue type="10" /> Levels by Lake Elevation</ChartTitle>
        <LoadingText>Loading chart data...</LoadingText>
      </ChartContainer>
    );
  }

  if (error) {
    return (
      <ChartContainer>
        <ChartTitle><PMValue type="10" /> Levels by Lake Elevation</ChartTitle>
        <ErrorText>{error}</ErrorText>
      </ChartContainer>
    );
  }

  return (
    <ChartContainer>
      <ChartTitle><PMValue type="10" /> Levels by Lake Elevation</ChartTitle>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart 
          data={data} 
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="lakeLevel" 
            stroke="#666"
            fontSize={11}
            tickFormatter={(value) => `${Math.round(metersToFeet(value))}ft`}
            type="number"
            scale="linear"
            domain={['dataMin', 'dataMax']}
            ticks={data.map(d => d.lakeLevel)}
          />
          <YAxis 
            stroke="#666"
            fontSize={11}
            tickFormatter={(value) => `${value.toFixed(1)}`}
            width={35}
          />
          <Tooltip 
            formatter={(value: number) => [`${value.toFixed(2)} µg/m³`, 'PM₁₀']}
            labelFormatter={(label) => `Lake Level: ${Math.round(metersToFeet(label))}ft (${label.toFixed(1)}m ASL)`}
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="pm10Value" 
            stroke="#8884d8" 
            strokeWidth={2}
            dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2 }}
            animationBegin={0}
            animationDuration={400}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
} 