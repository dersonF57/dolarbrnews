// src/components/Converter.js
import React, { useState } from 'react';
import './Converter.css';

const Converter = () => {
  const [rate, setRate] = useState(null);
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [direction, setDirection] = useState('BRLtoUSD');

  const fetchRate = async () => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    setRate(data.rates.BRL);
  };

  const handleConversion = () => {
    if (!rate) {
      fetchRate();
      return;
    }
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum)) {
      setConvertedAmount('Invalid input');
      return;
    }
    if (direction === 'BRLtoUSD') {
      setConvertedAmount((amountNum / rate).toFixed(2) + ' USD');
    } else {
      setConvertedAmount((amountNum * rate).toFixed(2) + ' BRL');
    }
  };

  return (
    <div className="converter-container bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto mt-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Conversor de Moeda</h2>
    <div className="converter-controls space-y-4">
      <div>
        <label htmlFor="amount" className="block text-gray-700 font-medium">Valor</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Digite o valor"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label htmlFor="direction" className="block text-gray-700 font-medium">Direção</label>
        <select
          id="direction"
          name="direction"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
      <p className="mt-4 text-center text-gray-700 font-semibold">Resultado: {convertedAmount}</p>
    )}
  </div>
);
}
 
export default Converter;

