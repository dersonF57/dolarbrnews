import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DollarValue from './components/DollarValue';
import Converter from './components/Converter';
import News from './components/News';
import DollarChart from './components/DollarChart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="App flex flex-col min-h-screen">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-purple-600 text-white rounded-full shadow-md fixed top-4 right-4"
      >
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      <Header />
      <div className="container mx-auto flex-grow p-4 space-y-8">
        <Navbar />
        <DollarValue />
        <Converter />
        <DollarChart />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
