import React, { useState } from 'react';

const MenuBar: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleMouseEnter = (icon: string) => {
    setActiveIcon(icon);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };

  return (
    <div className="flex justify-around items-center container rounded-full h-14 p-2">
      <i
        className={`fa fa-cog text-white ${activeIcon === 'settings' ? 'airplane-icon' : ''}`}
        onMouseEnter={() => handleMouseEnter('settings')}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      ></i> {/* Settings icon */}
      <i
        className={`fa fa-home text-white ${activeIcon === 'home' ? 'airplane-icon' : ''}`}
        onMouseEnter={() => handleMouseEnter('home')}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      ></i> {/* Home icon */}
      <i
        className={`fa fa-bell text-white ${activeIcon === 'notification' ? 'airplane-icon' : ''}`}
        onMouseEnter={() => handleMouseEnter('notification')}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      ></i> {/* Notification icon */}
    </div>
  );
};

export default MenuBar;


