import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { alpha, styled } from '@mui/material/styles';
import './DollarChart.css'; // Importando o arquivo CSS

const ChartContainer = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
  padding: '1rem',
  borderRadius: theme.shape.borderRadius * 1.25,
  boxShadow: theme.shadows[3], // Utilizando uma sombra padrão do tema
  width: '90%',
  maxWidth: '1200px',
  margin: '2rem auto',
  height: '35%',
  '@media (min-width: 768px)': {
    padding: '2rem',
  },
  '@media (min-width: 1024px)': {
    width: '100%',
    height: '45%',
    margin: '0 auto',
  },
  '& .chart-header': {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  '& .chart-header p:first-of-type': {
    fontSize: '1rem',
    color: '#7E44F5',
  },
  '& .chart-header p:last-of-type': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#7E44F5',
  },
  '& .recharts-tooltip-wrapper .recharts-default-tooltip': {
    backgroundColor: alpha(theme.palette.background.default, 0.8),
    borderRadius: theme.shape.borderRadius * 1.25,
    boxShadow: theme.shadows[3], // Utilizando uma sombra padrão do tema
    color: theme.palette.text.primary,
  },
}));

const DollarChart = () => {
  const [data, setData] = useState([
    { name: 'Jan', value: 5.10 },
    { name: 'Feb', value: 5.20 },
    { name: 'Mar', value: 5.00 },
    { name: 'Apr', value: 5.30 },
    { name: 'May', value: 5.60 },
    { name: 'Jun', value: 5.40 },
  ]);
  const [latestValue, setLatestValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDollarValue = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/all/USD-BRL');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result && result.USD && result.USD.bid) {
          const newValue = parseFloat(result.USD.bid);
          setData(prevData => [...prevData, { name: 'Jul', value: newValue }]);
          setLatestValue(newValue);
        } else {
          throw new Error('Data format is incorrect');
        }
      } catch (error) {
        setError('Erro ao buscar a taxa de câmbio');
        console.error('Error fetching the exchange rate:', error);
      }
    };

    fetchDollarValue();
  }, []);

  return (
    <ChartContainer>
      <div className="chart-header">
        <p>1 Dólar</p>
        <p>{latestValue ? `R$ ${latestValue.toFixed(2)}` : 'Carregando...'}</p>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7E44F5" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#7E44F5" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              borderRadius: '10px',
              color: '#fff',
              padding: '10px',
            }}
            itemStyle={{ color: '#fff', margin: '3px 0', fontSize: '14px' }}
            labelStyle={{ fontWeight: 'bold', color: '#fff', marginBottom: '5px' }}
          />
          <Area type="monotone" dataKey="value" stroke="#7E44F5" fill="url(#colorUv)" />
          <Line type="monotone" dataKey="value" stroke="#7E44F5" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </ChartContainer>
  );
}

export default DollarChart;

