import React, { useState } from "react";

// Define the props interface
interface SearchbarProps {
  theme: string; // Change from "light" | "dark" to string
  onSearch: (term: string) => void; // Add onSearch prop
}

const Searchbar: React.FC<SearchbarProps> = ({ theme, onSearch }) => {
  const [flightNumber, setFlightNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlightNumber(e.target.value);
  };

  const handleSearch = () => {
    onSearch(flightNumber);
  };

  return (
    <div className="flex items-center p-8">
      <input
        type="text"
        placeholder="Enter your flight number"
        value={flightNumber}
        onChange={handleInputChange}
        className={`flex-1 p-2 rounded-lg border ${
          theme === "dark"
            ? "bg-gray-700 border-blue-100 text-white"
            : "bg-white border-blue-100 text-black"
        } focus:outline-none focus:ring-2`}
      />
      <button onClick={handleSearch} className="ml-4 progress-bar">
        <i className="fas fa-search text-xl text-white-600"></i>
      </button>
    </div>
  );
};

export default Searchbar;