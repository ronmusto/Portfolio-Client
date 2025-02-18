import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for the user's theme preference
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // Apply the theme on initial load
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <nav className="navbar">
      <h1 className="site-name">Renaldo Musto</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <label className="theme-toggle">
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </nav>
  );
}

export default Navbar;
