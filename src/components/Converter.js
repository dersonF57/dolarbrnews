import React, { useState } from 'react';

const Converter = () => {
  const [amount, setAmount] = useState('');
  const [direction, setDirection] = useState('BRLtoUSD');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleConversion = () => {
    // Lógica de conversão aqui (para simplicidade, está omitida)
    const conversionRate = direction === 'BRLtoUSD' ? 0.19 : 5.25;
    setConvertedAmount((amount * conversionRate).toFixed(2));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="converter-container bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-lg mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">Conversor de Moeda</h2>
        <div className="converter-controls space-y-4">
          <div>
            <label htmlFor="amount" className="block text-gray-700 dark:text-gray-300 font-medium">Valor</label>
            <input
              id="amount"
              name="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Digite o valor"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div>
            <label htmlFor="direction" className="block text-gray-700 dark:text-gray-300 font-medium">Direção</label>
            <select
              id="direction"
              name="direction"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="BRLtoUSD">Reais para Dólar</option>
              <option value="USDtoBRL">Dólar para Reais</option>
            </select>
          </div>
          <button
            onClick={handleConversion}
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Converter
          </button>
        </div>
        {convertedAmount && (
          <p className="mt-4 text-center text-gray-700 dark:text-gray-300 font-semibold">Resultado: {convertedAmount}</p>
        )}
      </div>
    </div>
  );
};

export default Converter;
