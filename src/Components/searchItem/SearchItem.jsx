// SearchItem.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './searchItem.css';

const SearchItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/hotels/search', {
          location: location.state.destination,
          availableFrom: location.state.date[0].startDate,
          availableTo: location.state.date[0].endDate,
          roomsAvailable: location.state.options.room
        });
        setHotels(response.data);
      } catch (err) {
        console.error('Error fetching hotels:', err);
        setError('Failed to fetch hotels. Please try again later.');
      }
    };

    if (location.state) {
      fetchHotels();
    }
  }, [location]);

  const handleNavigate = (hotel) => {
    navigate(`/hotels/${hotel._id}`, { state: { hotel } });
  };

  return (
    <div className="searchItems">
      {error && <div className="error">{error}</div>}
      {hotels.length === 0 && !error && (
        <div className="no-availability">Sorry, we don't have availability for these days.</div>
      )}
      {hotels.map((hotel) => (
        <div key={hotel._id} className="searchItem">
          <img src={hotel.imgUrl} alt={hotel.name} className="siImg" />
          <div className="siDesc">
            <span className="siBadge">10% OFF IN 2024</span>
            <h1 className="siTitle">{hotel.name}</h1>
            <span className="siDistance">{hotel.distance}</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">{hotel.features}</span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>{hotel.rating}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siOldPrice">$112</span>
              <span className="siPrice">${hotel.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton" onClick={() => handleNavigate(hotel)}>See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
