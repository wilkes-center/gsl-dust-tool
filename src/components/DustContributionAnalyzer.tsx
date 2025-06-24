import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import Papa from 'papaparse';

interface DustDataRow {
  centroid: string;
  centroid_name: string;
  GSL: number;
  Misc: number;
  SevierLake: number;
  TooleLake: number;
  WestDesert: number;
}

interface ChartDataItem {
  name: string;
  value: number;
  rawValue: number;
  source: string;
}

interface ComparisonDataItem {
  level: string;
  GSL?: number;
  Misc?: number;
  SevierLake?: number;
  TooleLake?: number;
  WestDesert?: number;
}

const DustContributionAnalyzer: React.FC = () => {
  const [dustData, setDustData] = useState<Record<string, DustDataRow[]>>({});
  const [selectedLevel, setSelectedLevel] = useState<string>('1275');
  const [loading, setLoading] = useState<boolean>(true);
  const [aggregatedData, setAggregatedData] = useState<Record<string, ChartDataItem[]>>({});

  const lakeLevels = ['1275', '1276', '1277', '1278', '1279', '1280', '1281', '1282'];
  
  // Colors matching the Census Tract Information popup
  const colors: Record<string, string> = {
    GSL: '#4A90E2', // Blue for Great Salt Lake
    Misc: '#E94B3C', // Red for Miscellaneous  
    SevierLake: '#50C878', // Green for Sevier Lake
    TooleLake: '#D2691E', // Brown/Orange for Tule Dry Lake
    WestDesert: '#9B59B6' // Purple for West Desert
  };

  const sourceLabels: Record<string, string> = {
    GSL: 'Great Salt Lake',
    Misc: 'Miscellaneous',
    SevierLake: 'Sevier Lake', 
    TooleLake: 'Toole Lake',
    WestDesert: 'West Desert'
  };

  useEffect(() => {
    loadAllDustData();
  }, []);

  const loadAllDustData = async (): Promise<void> => {
    setLoading(true);
    const allData: Record<string, DustDataRow[]> = {};
    const allAggregated: Record<string, ChartDataItem[]> = {};

    try {
      for (const level of lakeLevels) {
        console.log(`Loading data for level ${level}...`);
        const response = await fetch(`/gsl-dust-tool/assets/Dust_Contribution_${level}.csv?t=${Date.now()}`);
        
        if (!response.ok) {
          console.error(`Failed to fetch ${level}: ${response.status} ${response.statusText}`);
          continue;
        }
        
        const csvText = await response.text();
        console.log(`CSV text length for ${level}:`, csvText.length);
        console.log(`First 100 chars for ${level}:`, csvText.substring(0, 100));
        
        const result = Papa.parse<DustDataRow>(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true
        });

        console.log(`Parsed ${result.data.length} rows for level ${level}`);
        if (result.data.length > 0) {
          console.log(`First row for ${level}:`, result.data[0]);
        }
        allData[level] = result.data;
        
        // Calculate aggregated totals for this lake level
        const totals = {
          GSL: 0,
          Misc: 0,
          SevierLake: 0,
          TooleLake: 0,
          WestDesert: 0
        };

        result.data.forEach((row: DustDataRow) => {
          totals.GSL += row.GSL || 0;
          totals.Misc += row.Misc || 0;
          totals.SevierLake += row.SevierLake || 0;
          totals.TooleLake += row.TooleLake || 0;
          totals.WestDesert += row.WestDesert || 0;
        });

        console.log(`Totals for ${level}:`, totals);

        // Convert to percentages and create chart data
        const totalSum = Object.values(totals).reduce((sum, val) => sum + val, 0);
        allAggregated[level] = Object.entries(totals).map(([source, value]) => ({
          name: sourceLabels[source],
          value: parseFloat(((value / totalSum) * 100).toFixed(1)),
          rawValue: value,
          source: source
        }));

        console.log(`Aggregated data for ${level}:`, allAggregated[level]);
      }

      console.log('Final aggregated data:', allAggregated);
      setDustData(allData);
      setAggregatedData(allAggregated);
    } catch (error) {
      console.error('Error loading dust data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTooltip = (value: number, name: string): [string, string] => [
    `${value}%`,
    name
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any): React.ReactElement | null => {
    if (percent < 0.05) return null;
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="14"
        fontWeight="600"
        fontFamily="Sora, sans-serif"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  const getComparisonData = (): ComparisonDataItem[] => {
    return lakeLevels.map(level => {
      const data = aggregatedData[level] || [];
      const result: ComparisonDataItem = { level: `${level}m` };
      
      data.forEach(item => {
        (result as any)[item.source] = item.value;
      });
      
      return result;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg font-sora">Loading dust contribution data...</div>
      </div>
    );
  }

  const currentData = aggregatedData[selectedLevel] || [];
  const comparisonData = getComparisonData();

  console.log(`Selected level: ${selectedLevel}`);
  console.log(`Current data for ${selectedLevel}:`, currentData);
  console.log('Available levels in aggregatedData:', Object.keys(aggregatedData));

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6 font-sora">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-3 font-sora">
          Great Salt Lake Dust Contribution Analysis
        </h1>
        <p className="text-lg text-gray-600 font-sora font-light">
          Dust source contributions across different lake levels (1275-1282 mASL)
        </p>
      </div>

      {/* Lake Level Selector */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-6">
          <label className="block text-base font-medium text-gray-700 mb-3 font-sora">
            Select Lake Level:
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sora text-base"
          >
            {lakeLevels.map(level => (
              <option key={level} value={level}>
                {level} meters above sea level
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Current Lake Level Pie Chart */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center font-sora">
          Dust Source Distribution - Lake Level {selectedLevel}m ASL
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={currentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomLabel}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {currentData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={colors[entry.source]} 
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={formatTooltip}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '14px'
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  wrapperStyle={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '14px'
                  }}
                  formatter={(value: string, entry: any) => (
                    <span style={{ color: entry.color, fontFamily: 'Sora, sans-serif', fontSize: '14px' }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Data Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900 font-sora">
              Detailed Breakdown
            </h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider font-sora">
                      Dust Source
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider font-sora">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentData
                    .sort((a, b) => b.value - a.value)
                    .map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div 
                            className="w-4 h-4 rounded mr-3"
                            style={{ backgroundColor: colors[item.source] }}
                          ></div>
                          <span className="text-base font-medium text-gray-900 font-sora">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 font-sora">
                        {item.value}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Chart Across All Lake Levels */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center font-sora">
          Dust Source Comparison Across Lake Levels
        </h2>
        
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={comparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="level" 
                tick={{ fontFamily: 'Sora, sans-serif', fontSize: 12 }}
                axisLine={{ stroke: '#6b7280' }}
              />
              <YAxis 
                label={{ 
                  value: 'Percentage (%)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fontFamily: 'Sora, sans-serif', fontSize: '12px' }
                }}
                tick={{ fontFamily: 'Sora, sans-serif', fontSize: 12 }}
                axisLine={{ stroke: '#6b7280' }}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, '']}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '14px'
                }}
              />
              <Legend 
                wrapperStyle={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '14px'
                }}
              />
              
              {Object.entries(colors).map(([source, color]) => (
                <Bar 
                  key={source}
                  dataKey={source} 
                  fill={color}
                  name={sourceLabels[source]}
                  radius={[2, 2, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-sora">
          Summary Statistics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(sourceLabels).map(([source, label]) => {
            const values = lakeLevels.map(level => 
              aggregatedData[level]?.find(item => item.source === source)?.value || 0
            );
            const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
            const min = Math.min(...values);
            const max = Math.max(...values);
            
            return (
              <div key={source} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div 
                    className="w-4 h-4 rounded mr-3"
                    style={{ backgroundColor: colors[source] }}
                  ></div>
                  <h3 className="font-medium text-gray-900 text-base font-sora">{label}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600 font-sora">
                  <div>Avg: {avg.toFixed(1)}%</div>
                  <div>Min: {min.toFixed(1)}%</div>
                  <div>Max: {max.toFixed(1)}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DustContributionAnalyzer; 