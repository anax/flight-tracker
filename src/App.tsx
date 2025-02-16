import Searchbar from './components/SeachBar'
import F_Card from './components/F_Card'
import './App.css'
import MenuBar from './components/Menu';

function App() {
  const theme = 'light'; // Define the theme variable

  return (
    <>
      <Searchbar theme={theme} />
      <div style={{ marginBottom: '90px' }}></div>

      <F_Card 
        flightNumber="FL123"
        origin="LAX"
        destination="JFK"
        departureTime="10:00"
        arrivalTime="13:00"
        gate="A1"
        belt="B2"
        timeLeft="2h 30m"
        status="On Time"
      />
      <div style={{ marginBottom: '30px' }}></div>
      
      <MenuBar />
    </>
  )
}

export default App
