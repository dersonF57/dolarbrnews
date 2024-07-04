import React, { useEffect, useState } from 'react';

const DollarValue = () => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDollarValue = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://economia.awesomeapi.com.br/json/all/USD-BRL');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data && data.USD && data.USD.bid) {
        setValue(data.USD.bid);
        setError(null);
      } else {
        throw new Error('Data format is incorrect');
      }
    } catch (error) {
      setError('Erro ao buscar a taxa de câmbio');
      console.error('Error fetching the exchange rate:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDollarValue();
  }, []);

  return (
    <div style={{ color: 'black', marginBottom: '20px' }}>
      <h2>Valor do Dólar:</h2>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && value && <p>R$ {parseFloat(value).toFixed(2)}</p>}
    </div>
  );
};

export default DollarValue;

