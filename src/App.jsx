import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationalBar from './Components/NavigationalBar/NavigationalBar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/services';
import Title from './Components/Title/title';
import About from './Components/About/About';
import Facilities from './Components/Facilities/facilities';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/ContactUs/Contact';
import Footer from './Components/Footer/Footer';
import SignUpLogin from './Components/SignUpLogin/SignUpLogin';
import Hotel from './pages/hotel/hotel.jsx';
import List from './pages/list/List.jsx'; // Ensure the file exists and the path is correct
import Accommodation from './pages/accomodation/accomodation.jsx';
import Transportation from './Components/Transportation/Transportation.jsx';
import Attraction from './Components/Attraction/Attraction.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationalBar />
        <Hero />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/attractions" element={<Attraction />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/signup-login" element={<SignUpLogin />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <Title subTitle='Our Services' title='Services We Offer' />
    <Services />
    <About />
    <Title subTitle='Gallery' title='Facilities' />
    <Facilities />
    <Title subTitle='TESTIMONIALS' title='What Our Customers Say' />
    <Testimonials />
    <Title subTitle='Contact Us' title='Get in Touch with Us' />
    <Contact />
  </>
);

// const Accommodation = () => (
//   <div>
//     <h2>Accommodation</h2>
//     <p>Information about accommodation.</p>
//   </div>
// );

// const Transportation = () => (
//   <div>
//     <h2>Transportation</h2>
//     <p>Information about transportation.</p>
//   </div>
// );

// const Attractions = () => (
//   <div>
//     <h2>Attractions</h2>
//     <p>Information about attractions.</p>
//   </div>
// );

export default App;
