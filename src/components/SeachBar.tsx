import React, { useState } from "react";

// Define the props interface
interface SearchbarProps {
  theme: "light" | "dark"; // Explicitly define the type for `theme`
  onSearch: (term: string) => void; // Add onSearch prop
}

const Searchbar: React.FC<SearchbarProps> = ({ theme, onSearch }) => {
  const [flightNumber, setFlightNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlightNumber(e.target.value);
    onSearch(e.target.value); // Call onSearch with the input value
  };

  const handleSearch = () => {
    console.log("Searching for flight:", flightNumber);
  };

  return (
    <div
      className={`p-4 rounded-lg ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter your flight number"
          value={flightNumber}
          onChange={handleInputChange}
          className={`flex-1 p-2 rounded-lg border ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <button
          onClick={handleSearch}
          className={`px-4 py-2 rounded-lg ${
            theme === "dark"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } transition-colors duration-200`}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;