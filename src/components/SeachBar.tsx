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
    
    <div className="flex flex-row justify-center p-2 container-search mx-0 rounded-full cursor-pointer mr-8 sm:mr-20 ml-8 sm:ml-20 min-w-75">
        <div className="flex w-full text-gray-400 ">
          <button className="ml-2 p-2">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <input
            type="text"
            placeholder="Enter your flight number"
            value={flightNumber}
            onChange={handleInputChange}
            className={`flex-1 p-2 rounded-full  ${
              theme === "dark"
                ? "bg-gray-00  text-white"
                : "bg-white  text-blue-900"
            } focus:outline-none `}
          />
          <button onClick={handleSearch} className="ml-4 p-2 cursor-pointer">
            <i className="fas fa-search"></i>
          </button>
        </div>
    </div>
  
  );
};

export default Searchbar;