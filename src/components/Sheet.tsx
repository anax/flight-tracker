import React from 'react';
import MenuBar from './Menu';

const SheetPane: React.FC<{ theme: string; onIconClick: (icon: string) => void }> = ({ theme, onIconClick }) => {

 
  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 rounded-t-lg z-10 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-4 rounded-t-lg">
        {/* You can add any additional content or styling here */}
        <MenuBar theme={theme} onIconClick={onIconClick} />
      </div>
    </div>
  );
};

export default SheetPane;

