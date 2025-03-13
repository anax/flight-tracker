import React from 'react';

const MenuBar: React.FC<{ theme: string; onIconClick: (icon: string) => void }> = ({ theme, onIconClick }) => {

  
  return (
    <div className={`flex justify-around items-center p-4 rounded-lg  ${theme === 'dark' ? 'bg-gray-800' : 'bg-sky-50 shadow-2xs'}`}>
      <i 
        className={`fa fa-cog ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`} 
        onClick={() => onIconClick('settings')} 
        aria-hidden="true"
        style={{ cursor: 'pointer' }}
      ></i> {/* Settings icon */}
      <i 
        className={`fa fa-home ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`} 
        onClick={() => onIconClick('home')} 
        aria-hidden="true"
        style={{ cursor: 'pointer' }}
      ></i> {/* Home icon */}
      <i 
        className={`fa fa-bell ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`} 
        onClick={() => onIconClick('notification')} 
        aria-hidden="true"
        style={{ cursor: 'pointer' }}
      ></i> {/* Notification icon */}
    </div>
  );
};

export default MenuBar;