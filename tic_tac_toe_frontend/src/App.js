import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './components/Game';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        style={{ zIndex: 2, position: "fixed", top: 22, right: 20 }}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <Game />
    </div>
  );
}

export default App;
