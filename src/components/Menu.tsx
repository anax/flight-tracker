import React from 'react';

const MenuBar: React.FC = () => {
  return (
    <div className="flex justify-around items-center bg-teal-500 rounded-full h-14 p-2">
      <i className="fa fa-cog text-white" aria-hidden="true"></i> {/* Settings icon */}
      <i className="fa fa-home text-white" aria-hidden="true"></i> {/* Home icon */}
      <i className="fa fa-bell text-white" aria-hidden="true"></i> {/* Notification icon */}
    </div>
  );
};

export default MenuBar;
