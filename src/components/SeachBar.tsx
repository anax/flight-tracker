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
    onSearch(e.target.value); // Call onSearch with the input value
  };

  const handleSearch = () => {
    console.log("Searching for flight:", flightNumber);
  };

  return (
    <div
      className="p-4 rounded-lg bg-teal-900"
    >
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter your flight number"
          value={flightNumber}
          onChange={handleInputChange}
          className={`flex-1 p-2 rounded-lg border ${
            theme === "dark"
              ? "bg-grey-400 border-gray-600 text-white placeholder-teal-300"
              : "bg-teal-800 border-teal-800 text-teal-300 placeholder-gray-400"
          } focus:outline-none focus:ring-2 focus:ring-teal-700`}
        />
        <button
          onClick={handleSearch}
          className="rounded-lg px-4 py-2 transition-colors duration-200 progress-bar text-teal-800"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;