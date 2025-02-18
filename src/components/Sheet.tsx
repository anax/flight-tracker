import React from 'react';
import MenuBar from './Menu';

const SheetPane: React.FC<{ theme: string; onIconClick: (icon: string) => void }> = ({ theme, onIconClick }) => {

  const handleIconClick = (icon: string) => {
    switch (icon) {
      case 'settings':
        console.log('Settings icon clicked');
        // Add your settings logic here
        break;
      case 'home':
        console.log('Home icon clicked');
        // Add your home logic here
        break;
      case 'notification':
        console.log('Notification icon clicked');
        // Add your notification logic here
        break;
      default:
        break;
    }
  };
  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 rounded-t-lg z-10 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-800 to-teal-500'}`}>
      <div className="p-4 rounded-t-lg">
        {/* You can add any additional content or styling here */}
        <MenuBar theme={theme} onIconClick={handleIconClick} />
      </div>
    </div>
  );
};

export default SheetPane;

