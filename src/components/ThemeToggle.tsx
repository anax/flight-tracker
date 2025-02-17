import React from 'react';

interface ToggleSwitchProps {
  isDark: boolean;
  onToggle: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ToggleSwitchProps> = ({ isDark, onToggle }) => {
  return (
    <div 
      className={`flex items-center justify-between w-24 h-10 rounded-full cursor-pointer transition-all duration-300 ${isDark ? 'bg-gray-800' : 'progress-bar'}`} 
      onClick={() => onToggle(!isDark)}
    >
      <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 ${isDark ? 'translate-x-14 bg-gray-900' : 'bg-white'}`}>
        <i className={`fas fa-${isDark ? 'moon' : 'sun'} text-l ${isDark ? 'text-secondary ml-3' : 'text-secondary'}`}></i>
      </div>
      <span className={`ml-2 text-lg font-bold ${isDark ? 'text-white mr-180' : 'progress-bar mr-7'}`}>{isDark ? 'N' : 'D'}</span>
    </div>
  );
};

export default ThemeToggle; 