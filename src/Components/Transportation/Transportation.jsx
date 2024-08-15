// import React from 'react';
// import './Transportation.css';
// import Provider0 from '../../assets/Provider0.jpg'; 
// import Provider2 from '../../assets/Provider2.jpg';
// import Provider3 from '../../assets/Provider3.jpg';
// import Provider4 from '../../assets/Provider4.jpg';

// const Transportation = () => {
//   return (
//     <div className="transportation-page">

      
//       <section className="banner">
//         <h1>Booking cab services to reach different places at your destination...</h1>
//         <div className="search-bar">
//           <input type="text" placeholder="Pick-up location" />
//           <input type="date" placeholder="Pick-up Date" />
//           <input type="time" placeholder="Pick-up Time" />
//           <button className="search-button">Book Cab</button>
//         </div>
//       </section>

//       <section className="introduction">
//         <h2>Welcome to Our Transportation Services</h2>
//         <p>At Explore Escapes, we provide reliable and affordable cab services to make your travel experience seamless and convenient. Whether you are traveling for business or leisure, our transportation services are designed to meet your needs and ensure a comfortable journey.</p>
//       </section>
      
//       <section className="cab-services">
//         <h2>Popular Cab Service Providers</h2>
//         <div className="providers">
//           <div className="provider">
//             <img src={Provider0} alt="Provider0" />
//             <p>Uber</p>
//           </div>
//           <div className="provider">
//             <img src={Provider2} alt="Provider 2" />
//             <p>B & L Service</p>
//           </div>
//           <div className="provider">
//             <img src={Provider3} alt="Provider 3" />
//             <p>Reno Cab</p>
//           </div>
//           <div className="provider">
//             <img src={Provider4} alt="Provider 4" />
//             <p>Transdev Services</p>
//           </div>
//         </div>
//       </section>
      
//       <section className="features">
//         <div className="feature">
//           <div className="feature-icon"></div>
//           <p>Customer Service</p>
//         </div>
//         <div className="feature">
//           <div className="feature-icon"></div>
//           <p>Cancellation</p>
//         </div>
//         <div className="feature">
//           <div className="feature-icon"></div>
//           <p>Reviews</p>
//         </div>
//       </section>
      
//       <section className="faq">
//         <h2>Frequently Asked Questions about the Services</h2>
//         <div className="faq-content">
//           <p>Questions and their answers will appear here when we click on the question, a drop-down will pop-up.</p>
//         </div>
//       </section>
      
//       <section className="additional-info">
//         <h2>Why Choose Our Cab Services?</h2>
//         <p>Our cab services provide reliable and affordable transportation options to get you where you need to go. We ensure safety, comfort, and convenience for all our passengers.</p>
//       </section>

//       <section className="service-highlights">
//         <h2>Service Highlights</h2>
//         <ul>
//           <li>24/7 Availability</li>
//           <li>Professional and Experienced Drivers</li>
//           <li>Wide Range of Vehicles</li>
//           <li>Affordable Pricing</li>
//           <li>Real-time GPS Tracking</li>
//         </ul>
//       </section>

//       <section className="booking-process">
//         <h2>How to Book</h2>
//         <ol>
//           <li>Select your pick-up location, date, and time.</li>
//           <li>Choose a cab service provider from our list.</li>
//           <li>Confirm your booking and make a payment.</li>
//           <li>Receive a confirmation email with booking details.</li>
//           <li>Enjoy your ride with our reliable cab service.</li>
//         </ol>
//       </section>

//       <section className="testimonials">
//         <h2>Customer Testimonials</h2>
//         <div className="testimonial">
//           <p>"Excellent service! The driver was punctual and very professional. Highly recommended!"</p>
//           <span>- Jane Doe</span>
//         </div>
//         <div className="testimonial">
//           <p>"Affordable and reliable. The booking process was smooth and hassle-free."</p>
//           <span>- John Smith</span>
//         </div>
//       </section>

//       <section className="safety-measures">
//         <h2>Safety Measures</h2>
//         <p>Your safety is our priority. All our vehicles are sanitized regularly, and our drivers follow strict safety protocols to ensure a safe and comfortable ride for all passengers.</p>
//       </section>

//       <section className="contact-info">
//         <h2>Contact Information</h2>
//         <p>If you have any questions or need assistance, feel free to contact us:</p>
//         <p>Email: support@exploreescapes.com</p>
//         <p>Phone: +1 234 567 890</p>
//       </section>
      
//     </div>
//   );
// }

// export default Transportation;

// import React, { useState } from 'react';
// import './Transportation.css';
// import Provider0 from '../../assets/Provider0.jpg'; 
// import Provider2 from '../../assets/Provider2.jpg';
// import Provider3 from '../../assets/Provider3.jpg';
// import Provider4 from '../../assets/Provider4.jpg';

// const Transportation = () => {
//   // State for form inputs
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [pickupDate, setPickupDate] = useState('');
//   const [pickupTime, setPickupTime] = useState('');

//   // Handler for form submission
//   const handleBookCab = () => {
//     alert(`Booking Details:\nLocation: ${pickupLocation}\nDate: ${pickupDate}\nTime: ${pickupTime}`);
//   };

//   return (
//     <div className="transportation-page">

//       <section className="banner">
//         <h1>Booking cab services to reach different places at your destination...</h1>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Pick-up location"
//             value={pickupLocation}
//             onChange={(e) => setPickupLocation(e.target.value)}
//           />
//           <input
//             type="date"
//             placeholder="Pick-up Date"
//             value={pickupDate}
//             onChange={(e) => setPickupDate(e.target.value)}
//           />
//           <input
//             type="time"
//             placeholder="Pick-up Time"
//             value={pickupTime}
//             onChange={(e) => setPickupTime(e.target.value)}
//           />
//           <button className="search-button" onClick={handleBookCab}>Book Cab</button>
//         </div>
//       </section>

//       <section className="introduction">
//         <h2>Welcome to Our Transportation Services</h2>
//         <p>At Explore Escapes, we provide reliable and affordable cab services to make your travel experience seamless and convenient. Whether you are traveling for business or leisure, our transportation services are designed to meet your needs and ensure a comfortable journey.</p>
//       </section>
      
//       <section className="cab-services">
//         <h2>Popular Cab Service Providers</h2>
//         <div className="providers">
//           <div className="provider">
//             <img src={Provider0} alt="Provider0" />
//             <p>Uber</p>
//           </div>
//           <div className="provider">
//             <img src={Provider2} alt="Provider 2" />
//             <p>B & L Service</p>
//           </div>
//           <div className="provider">
//             <img src={Provider3} alt="Provider 3" />
//             <p>Reno Cab</p>
//           </div>
//           <div className="provider">
//             <img src={Provider4} alt="Provider 4" />
//             <p>Transdev Services</p>
//           </div>
//         </div>
//       </section>
      
//       <section className="features">
//         <div className="feature">
//           <div className="feature-icon"></div>
//           <p>Customer Service</p>
//         </div>
//         <div className="feature">
//           <div className="feature-icon"></div>
//           <p>Cancellation</p>
//         </div>
//         <div className="feature">
//           <div className="feature-icon"></div>
//           <p>Reviews</p>
//         </div>
//       </section>
      
//       <section className="faq">
//         <h2>Frequently Asked Questions about the Services</h2>
//         <div className="faq-content">
//           <p>Questions and their answers will appear here when we click on the question, a drop-down will pop-up.</p>
//         </div>
//       </section>
      
//       <section className="additional-info">
//         <h2>Why Choose Our Cab Services?</h2>
//         <p>Our cab services provide reliable and affordable transportation options to get you where you need to go. We ensure safety, comfort, and convenience for all our passengers.</p>
//       </section>

//       <section className="service-highlights">
//         <h2>Service Highlights</h2>
//         <ul>
//           <li>24/7 Availability</li>
//           <li>Professional and Experienced Drivers</li>
//           <li>Wide Range of Vehicles</li>
//           <li>Affordable Pricing</li>
//           <li>Real-time GPS Tracking</li>
//         </ul>
//       </section>

//       <section className="booking-process">
//         <h2>How to Book</h2>
//         <ol>
//           <li>Select your pick-up location, date, and time.</li>
//           <li>Choose a cab service provider from our list.</li>
//           <li>Confirm your booking and make a payment.</li>
//           <li>Receive a confirmation email with booking details.</li>
//           <li>Enjoy your ride with our reliable cab service.</li>
//         </ol>
//       </section>

//       <section className="testimonials">
//         <h2>Customer Testimonials</h2>
//         <div className="testimonial">
//           <p>"Excellent service! The driver was punctual and very professional. Highly recommended!"</p>
//           <span>- Jane Doe</span>
//         </div>
//         <div className="testimonial">
//           <p>"Affordable and reliable. The booking process was smooth and hassle-free."</p>
//           <span>- John Smith</span>
//         </div>
//       </section>

//       <section className="safety-measures">
//         <h2>Safety Measures</h2>
//         <p>Your safety is our priority. All our vehicles are sanitized regularly, and our drivers follow strict safety protocols to ensure a safe and comfortable ride for all passengers.</p>
//       </section>

//       <section className="contact-info">
//         <h2>Contact Information</h2>
//         <p>If you have any questions or need assistance, feel free to contact us:</p>
//         <p>Email: support@exploreescapes.com</p>
//         <p>Phone: +1 234 567 890</p>
//       </section>
      
//     </div>
//   );
// }

// export default Transportation;

import React, { useState } from 'react';
import './Transportation.css';
import Provider0 from '../../assets/Provider0.jpg'; 
import Provider2 from '../../assets/Provider2.jpg';
import Provider3 from '../../assets/Provider3.jpg';
import Provider4 from '../../assets/Provider4.jpg';

const Transportation = () => {
  // State for form inputs
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  // State for displaying booking details
  const [bookingDetails, setBookingDetails] = useState(null);

  // Handler for form submission
  const handleBookCab = () => {
    setBookingDetails({
      location: pickupLocation,
      date: pickupDate,
      time: pickupTime
    });
  };

  return (
    <div className="transportation-page">

      <section className="banner">
        <h1>Booking cab services to reach different places at your destination...</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pick-up location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
          <input
            type="date"
            placeholder="Pick-up Date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
          <input
            type="time"
            placeholder="Pick-up Time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
          />
          <button className="search-button" onClick={handleBookCab}>Book Cab</button>
        </div><br></br>
        {/* Display booking details */}
        {bookingDetails && (
          <div className="booking-details">
            <br></br>
            <h2>Booking Details:</h2>
            <p><strong>Location:</strong> {bookingDetails.location}</p>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Time:</strong> {bookingDetails.time}</p>
          </div>
        )}
      </section>

      <section className="introduction">
        <h2>Welcome to Our Transportation Services</h2>
        <p>At Explore Escapes, we provide reliable and affordable cab services to make your travel experience seamless and convenient. Whether you are traveling for business or leisure, our transportation services are designed to meet your needs and ensure a comfortable journey.</p>
      </section>
      
      <section className="cab-services">
        <h2>Popular Cab Service Providers</h2>
        <div className="providers">
          <div className="provider">
            <img src={Provider0} alt="Provider0" />
            <p>Uber</p>
          </div>
          <div className="provider">
            <img src={Provider2} alt="Provider 2" />
            <p>B & L Service</p>
          </div>
          <div className="provider">
            <img src={Provider3} alt="Provider 3" />
            <p>Reno Cab</p>
          </div>
          <div className="provider">
            <img src={Provider4} alt="Provider 4" />
            <p>Transdev Services</p>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="feature">
          <div className="feature-icon"></div>
          <p>Customer Service</p>
        </div>
        <div className="feature">
          <div className="feature-icon"></div>
          <p>Cancellation</p>
        </div>
        <div className="feature">
          <div className="feature-icon"></div>
          <p>Reviews</p>
        </div>
      </section>
      
      <section className="faq">
        <h2>Frequently Asked Questions about the Services</h2>
        <div className="faq-content">
          <p>Questions and their answers will appear here when we click on the question, a drop-down will pop-up.</p>
        </div>
      </section>
      
      <section className="additional-info">
        <h2>Why Choose Our Cab Services?</h2>
        <p>Our cab services provide reliable and affordable transportation options to get you where you need to go. We ensure safety, comfort, and convenience for all our passengers.</p>
      </section>

      <section className="service-highlights">
        <h2>Service Highlights</h2>
        <ul>
          <li>24/7 Availability</li>
          <li>Professional and Experienced Drivers</li>
          <li>Wide Range of Vehicles</li>
          <li>Affordable Pricing</li>
          <li>Real-time GPS Tracking</li>
        </ul>
      </section>

      <section className="booking-process">
        <h2>How to Book</h2>
        <ol>
          <li>Select your pick-up location, date, and time.</li>
          <li>Choose a cab service provider from our list.</li>
          <li>Confirm your booking and make a payment.</li>
          <li>Receive a confirmation email with booking details.</li>
          <li>Enjoy your ride with our reliable cab service.</li>
        </ol>
      </section>

      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial">
          <p>"Excellent service! The driver was punctual and very professional. Highly recommended!"</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial">
          <p>"Affordable and reliable. The booking process was smooth and hassle-free."</p>
          <span>- John Smith</span>
        </div>
      </section>

      <section className="safety-measures">
        <h2>Safety Measures</h2>
        <p>Your safety is our priority. All our vehicles are sanitized regularly, and our drivers follow strict safety protocols to ensure a safe and comfortable ride for all passengers.</p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions or need assistance, feel free to contact us:</p>
        <p>Email: support@exploreescapes.com</p>
        <p>Phone: +1 234 567 890</p>
      </section>
      
    </div>
  );
}

export default Transportation;


