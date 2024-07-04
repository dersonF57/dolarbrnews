import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar backdrop-blur-md bg-white/30 shadow-md p-4 rounded-lg flex items-center justify-between">
      <div className="navbar-brand text-2xl font-bold text-purple-600">
        As Notícias do Momento
      </div>
    </nav>

  );
};

export default Navbar;
