import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './hotels.css';

const Hotels = () => {
  const location = useLocation();
  const { destination, date, options } = location.state;
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/hotels/search', {
          location: destination,
          availableFrom: date[0].startDate,
          availableTo: date[0].endDate,
          roomsAvailable: options.room,
        });
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, [destination, date, options]);

  return (
    <div className="hotels">
      <h1>Hotels in {destination}</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel._id}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
