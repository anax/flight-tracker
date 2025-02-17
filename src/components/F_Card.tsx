import React from 'react';

interface FlightCardProps {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  gate: string;
  belt: string;
  timeLeft: string;
  status: string;
  isDark?: boolean;
}

const F_Card: React.FC<FlightCardProps> = ({
  flightNumber,
  origin,
  destination, 
  departureTime,
  arrivalTime,
  gate,
  belt,
  timeLeft,
  status,
  isDark = false
}) => {
 // Determine the status tag style based on the flight status
 let statusStyle = '';
 if (status === "On Time") {
   statusStyle = "bg-green-500"; // Green for On Time
 } else if (status === "Delayed") {
   statusStyle = "bg-gray-500"; // Gray for Delayed
 } else if (status === "Cancelled") {
   statusStyle = "bg-red-500"; // Red for Cancelled
 }



  return (
    <div className={`rounded-xl p-6 w-full max-w-md ${isDark ? 'bg-gray-800' : 'container'} text-white`}>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">{flightNumber}</div>
        <img src="/src/assets/maldivian.svg" alt="Maldivian Airlines" className="h-6" />
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="text-left">
          <div className="text-4xl font-bold">{origin}</div>
          <div className="text-sm opacity-70">SRILANKA</div>
          <div className="mt-1">
            <div className="text-xl">{departureTime}</div>
            {/* Status Tag */}
             <div className={`${statusStyle} text-white text-sm rounded-full px-3 py-1 inline-block mb-4`}>
              {status}
            </div>
            <div className="text-sm">Gate {gate}</div>
          </div>
        </div>

        <div className="flex flex-col items-center mx-4">
          <div className="w-24 h-0.5 relative bg-gray-400">
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
              <span className="text-xl airplane-icon">✈</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-4xl font-bold">{destination}</div>
          <div className="text-sm opacity-70">MALDIVES</div>
          <div className="mt-1">
            <div className="text-xl">{arrivalTime}</div>
            {/* Status Tag */}
            <div className={`${statusStyle} text-white text-sm rounded-full px-3 py-1 inline-block mb-4`}>
              {status}
            </div>
            <div className="text-sm">Gate {gate}</div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 rounded-full mb-4 progress-container">
        <div 
          className="h-full rounded-full progress-bar"
          style={{ width: '60%' }}
        ></div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-700">
        <div className="text-sm">
          Belt {belt}
        </div>
        <div className="text-sm">
          {timeLeft} left
        </div>
      </div>
    </div>
  );
};

export default F_Card;
