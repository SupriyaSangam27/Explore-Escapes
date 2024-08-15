import React from 'react';
import './Contact.css';
//import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/NavigationalBar/NavigationalBar";
import "./Contact.css";
import emailIcon from '../../assets/email.png';
import mailIcon from '../../assets/mail.png';
import phoneIcon from '../../assets/phone.png';
import addressIcon from '../../assets/address.png';
import arrow from '../../assets/arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0b0009d8-fe4c-42e3-acce-1c31ef0b040d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="contact"/>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a Message <img src={emailIcon} alt="Email Icon" />
          </h3>
          <p>
            At Escape Explore, we're here to help you plan your next great
            adventure! Whether you have questions about our travel packages,
            need assistance with booking, or just want to share your travel
            experiences, we're always excited to hear from you.
          </p>
          <ul>
            <li>
              <img src={mailIcon} alt="Email Icon" />
              <a href="mailto:contact.info@escapeexplore.com">
                contact.info@escapeexplore.com
              </a>
            </li>
            <li>
              <img src={phoneIcon} alt="Phone Icon" /> +1 (705) 977-6606
            </li>
            <li>
              <img src={addressIcon} alt="Address Icon" /> 108 University
              Avenue, Waterloo,
              <br /> Ontario (ON), N2J2W2, Canada
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Enter Your Phone Number" required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your query" required></textarea>
            <button type="submit" className="btn dark-btn">
              Submit Now <img src={arrow} alt="arrow icon" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.5583569277637!2d-80.5246808245468!3d43.47220930465856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3a6d93a3e39%3A0x66c3f90b0dc9c712!2sUniversity%20of%20Waterloo!5e0!3m2!1sen!2sca!4v1623937782930!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
