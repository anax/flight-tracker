import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter your flight number"
        className="bg-teal-500 h-14 w-full px-12 text-white placeholder-white focus:outline-none rounded-lg"
      />
      <i className="fa fa-search text-white absolute left-4 top-1/2 transform -translate-y-1/2"></i>
    </div>
  );
};

export default SearchBar;