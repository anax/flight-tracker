import  { useState, useEffect } from 'react';
import Header from './components/Header'; // Import the Header
import F_Card from './components/F_Card'
import './App.css'
import SheetPane from './components/Sheet';
import flightsData from './data/flightsData';
import Hero from './components/Hero';
import Searchbar from './components/SeachBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (isDark: boolean) => {
    setIsDark(isDark);
  };

  // Effect to apply body class based on theme
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('bg-gray-700', 'text-white'); // Dark background and text
      document.body.classList.remove('bg-white', 'text-black'); // Remove light classes
    } else {
      document.body.classList.add('bg-blue-900', 'text-black'); // Light background and text
      document.body.classList.remove('bg-gray-800', 'text-white'); // Remove dark classes
    }
  }, [isDark]);

  const handleIconClick = (icon: string) => {
    switch (icon) {
      case 'settings':
        console.log('Settings icon clicked');
        break;
      case 'home':
        console.log('Home icon clicked');
        break;
      case 'notification':
        console.log('Notification icon clicked');
        break;
      default:
        break;
    }
  };

  // Filter flights based on the search term
  const filteredFlights = flightsData.filter(flight =>
    flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update body background color based on theme
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#1a202c' : '#f1efef';
  }, [isDark]);

 

  return (
    <div className={`justify-center  min-h-screen py-20 ${isDark ? '' : ''}`}>
      <Header theme={isDark ? 'dark' : 'light'} onSearch={setSearchTerm} onToggle={toggleTheme} /> {/* Pass onToggle here */}
      <Searchbar onSearch={setSearchTerm} theme={isDark ? 'dark' : 'light'} />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2 justify-center items-center p-4 space-y-3">
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
            isDark={isDark}
          />
        ))}
      </div>
      {/* For TSX uncomment the commented types below */}
      
      <SheetPane theme={isDark ? 'dark' : 'light'} onIconClick={handleIconClick}/>
    </div>
  )
}

export default App
