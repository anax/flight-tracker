import React from 'react';
import Searchbar from './SeachBar';
import ToggleSwitch from './ThemeToggle';

const Header: React.FC<{ theme: string; onSearch: (term: string) => void; onToggle: (isDark: boolean) => void }> = ({ theme, onSearch, onToggle }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 rounded-b-lg shadow-lg w-full fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between p-8">
        <div className="flex items-center">
          <img 
            src="./src/assets/logo_white.svg" // Replace with your logo path
            alt="Logo"
            className="h-10 mr-2" // Adjust height and margin as needed
          />
          <ToggleSwitch isDark={theme === 'dark'} onToggle={onToggle} />
        </div>
        <div className="text-white text-3xl font-bold">Flight Tracker</div>
      </div>
      <p className="text-white text-lg mt-2">Track your flights in real-time</p>
      <Searchbar theme={theme} onSearch={onSearch} />
    </header>
  );
};

export default Header;
