import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import '../styles/Header.css';

function Header({ searchTerm, setSearchTerm, filter, setFilter, darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1>Todo List</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}

export default Header;
