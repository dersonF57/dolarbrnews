// src/App.js
import React from 'react';
import Header from './components/Header';
import Converter from './components/Converter';
import News from './components/News';
import DollarChart from './components/DollarChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Converter />
      <DollarChart />
      <News />
    </div>
  );
}

export default App;
