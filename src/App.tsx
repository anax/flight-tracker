import React, { useState } from 'react';
import Searchbar from './components/SeachBar'
import F_Card from './components/F_Card'
import './App.css'
import MenuBar from './components/Menu';
import flightsData from './data/flightsData'; // Import the dummy data

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const theme = 'teal'; // Define the theme variable

  // Filter flights based on the search term
  const filteredFlights = flightsData.filter(flight =>
    flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Searchbar theme={theme} onSearch={setSearchTerm} />
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
      <div style={{ marginBottom: '90px' }}></div>
      
      <MenuBar />
    </>
  )
}

export default App
