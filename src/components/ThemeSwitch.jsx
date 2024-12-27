import React from 'react';
import '../styles/ThemeSwitch.css';

function ThemeSwitch({ darkMode, setDarkMode }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <span className="slider round"></span>
    </label>
  );
}

export default ThemeSwitch;
