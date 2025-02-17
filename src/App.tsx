import React, { useState } from 'react';
import Header from './components/Header'; // Import the Header
import F_Card from './components/F_Card'
import './App.css'

import flightsData from './data/flightsData'; // Import the dummy data
import MenuBar from './components/Menu';
import SheetPane from './components/Sheet';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (isDark: boolean) => {
    setIsDark(isDark);
    document.body.classList.toggle('bg-gray-800', isDark); // Dark background
    document.body.classList.toggle('bg-white', !isDark); // Light background
  };

  // Filter flights based on the search term
  const filteredFlights = flightsData.filter(flight =>
    flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`relative min-h-screen pt-70 ${isDark ? '' : ''}`}>
      <Header theme={isDark ? 'dark' : 'light'} onSearch={setSearchTerm} onToggle={toggleTheme} /> {/* Pass onToggle here */}
      <div className="p-4 space-y-3">
        {filteredFlights.map((flight, index) => (
          <F_Card 
            key={index} // Use index as key (or a unique identifier if available)
            flightNumber={flight.flightNumber}
            origin={flight.origin}
            destination={flight.destination}
            departureTime={flight.departureTime}
            arrivalTime={flight.arrivalTime}
            gate={flight.gate}
            belt={flight.belt}
            timeLeft={flight.timeLeft}
            status={flight.status}
          />
        ))}
      </div>
      <MenuBar />
      <SheetPane />
    </div>
  )
}

export default App
