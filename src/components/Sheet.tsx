import React from 'react';
import MenuBar from './Menu';

const SheetPane: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-t-lg p-4 z-10">
      <div className="p-8 rounded-t-lg">
        
        {/* You can add any additional content or styling here */}
        <MenuBar />
      </div>
    </div>
  );
};

export default SheetPane;

