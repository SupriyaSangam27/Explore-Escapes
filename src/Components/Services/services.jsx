import React from 'react';
import './services.css';
import Service1 from '../../assets/Service1.png';
import Service2 from '../../assets/Service2.png';
import Service3 from '../../assets/Service3.png';
import ServiceIcon1 from '../../assets/ServiceIcon1.png'; 
import ServiceIcon2 from '../../assets/ServiceIcon2.png'; 
import ServiceIcon3 from '../../assets/ServiceIcon3.png'; 


const Services = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={Service1} alt='Accommodation_Booking'/>
        <div className="caption">
          <img src={ServiceIcon1} alt="Accommodation_Booking_Icon" />
          <p>Accommodation Booking</p>
        </div>
      </div>
      <div className="service">
        <img src={Service2} alt='Transportation'/>
        <div className="caption">
          <img src={ServiceIcon2} alt="Transportation_Icon" />
          <p>Transportation</p>
        </div>
      </div>
      <div className="service">
        <img src={Service3} alt='Travel_Information'/>
        <div className="caption">
          <img src={ServiceIcon3} alt="Travel_Information_Icon" />
          <p>Travel Information</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
