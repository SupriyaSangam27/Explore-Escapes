import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./hotel.css";
import NavigationalBar from "../../Components/NavigationalBar/NavigationalBar";
import Header from "../../Components/header/Header";
import Footer from "../../Components/Footer/Footer"; // Uncomment if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const { id } = useParams();
  const location = useLocation();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomNumber: ''  
  });

  // Retrieve the hotel data from location state
  const hotel = location.state?.hotel || {
    name: 'Loading...',
    address: 'Loading...',
    distance: 'Loading...',
    price: 'Loading...',
    imgUrl: 'https://via.placeholder.com/150',
    description: 'Loading...',
    photos: [
      { src: 'https://via.placeholder.com/150' }
    ],
  };

  // Curated list of hotel images
  const hotelImages = [
    hotel.imgUrl, // The main hotel image
    'https://images.rosewoodhotels.com/is/image/rwhg/hi-hgv-26330925-rhgmodelbedroom-1',
    'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp',
    'http://upload.wikimedia.org/wikipedia/commons/8/83/Imperial_Hotel_Osaka_regular_floor_standard_twin_room_20120630-001.jpg',
    'https://cache.marriott.com/marriottassets/marriott/DXBJW/dxbjw-suite-0114-hor-clsc.jpg?interpolation=progressive-bilinear&',
    'https://i.pinimg.com/originals/ab/e4/57/abe457375c4e8cb00eda3093f0f2e013.jpg',
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? hotelImages.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === hotelImages.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleReservationClick = () => {
    setShowReservation(true);
  };

  const handleCloseReservation = () => {
    setShowReservation(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  const reservation = {
    guestName: reservationData.name,
    email: reservationData.email,
    checkInDate: reservationData.checkIn,
    checkOutDate: reservationData.checkOut,
    roomNumber: reservationData.roomNumber  // Include this field
  };

  try {
    const response = await fetch('http://localhost:5000/api/reservations/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Reservation saved:', data);
  } catch (error) {
    console.error('Error submitting reservation:', error);
  }
};

  
  


  return (
    <div>
      <NavigationalBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider1">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={hotelImages[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={handleReservationClick}>Reserve or Book Now!</button>
          <h1 className="hotelTitle">{hotel.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotel.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {hotel.distance}
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${hotel.price} at this property and get a free airport taxi
          </span>

          
          {/* Display the additional hotel images */}
          <div className="hotelImages">
            {hotelImages.map((image, index) => (
              <div key={index} className="hotelImgWrapper" onClick={() => handleOpen(index)}>
                <img src={image} alt={`Hotel ${index + 1}`} className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                {[
                  "Nestled in the vibrant downtown area, Our Hotel offers an unparalleled blend of luxury and comfort. Guests can enjoy the convenience of being just steps away from the city’s most iconic landmarks, world-class dining, and exclusive shopping districts. Whether you're here for business or leisure, our spacious rooms, equipped with modern amenities, provide the perfect retreat after a day of exploration. At this hotel, we pride ourselves on exceptional service that caters to your every need. Our in-house restaurant serves gourmet cuisine crafted from the finest local ingredients, and our wellness center is designed to rejuvenate your body and mind. With an impeccable location and a commitment to excellence, Hotel A is your ultimate destination for an unforgettable stay.",
                  "Situated in the lively heart of the city, our hotel seamlessly combines elegance with comfort. Experience the ease of being mere moments from the city's top attractions, gourmet dining options, and upscale shopping venues. Ideal for both business and leisure travelers, our generously appointed rooms come with all the modern amenities you need for a restful stay. We take great pride in our personalized service, catering to all your needs. Enjoy exquisite meals at our in-house restaurant, where each dish is prepared with the finest local ingredients, and rejuvenate in our state-of-the-art wellness center. With its prime location and dedication to superior service, our hotel is the perfect choice for a memorable visit.",
                  "Located in the dynamic center of the city, our hotel offers a perfect blend of sophistication and comfort. Guests will appreciate being just steps away from the city's most celebrated landmarks, top-notch dining establishments, and exclusive shopping areas. Whether you're here for work or pleasure, our spacious and modern rooms provide a serene escape after a day of activity. We are committed to delivering exceptional service tailored to your individual needs. Our on-site restaurant features gourmet dishes crafted from premium local ingredients, while our wellness facilities are designed to restore both body and mind. With its unbeatable location and a focus on exceptional service, our hotel promises an extraordinary experience.",
                  "In the bustling downtown district, our hotel stands out with its perfect mix of luxury and ease. Enjoy the proximity to the city's key attractions, fine dining spots, and high-end shopping streets. Our expansive rooms, outfitted with modern conveniences, offer a cozy haven for both business and leisure travelers. We are dedicated to providing top-notch service that meets every guest's needs. Savor gourmet meals at our restaurant, where dishes are made from the best local produce, and unwind at our wellness center designed for ultimate rejuvenation. With a prime location and a focus on exceptional service, our hotel is the ultimate choice for an unforgettable stay.",
                  "Set in the vibrant heart of the city, our hotel combines sophistication with unparalleled comfort. Guests will enjoy the convenience of being close to the city’s premier landmarks, gourmet restaurants, and luxury shopping areas. Our spacious and well-appointed rooms provide a relaxing retreat after a day of exploring or working. We pride ourselves on delivering outstanding service tailored to your individual needs. Our restaurant offers gourmet cuisine made from the finest local ingredients, and our wellness center is designed to rejuvenate and refresh. With its prime location and commitment to excellence, our hotel ensures a memorable stay.",
                ][Math.floor(Math.random() * 5)]}
              </p>
            </div>
          </div>
        </div>
        {/* Reservation form modal */}
        {showReservation && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseReservation}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </span>
              <h2>Reservation Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={reservationData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={reservationData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Check-in Date:</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={reservationData.checkIn}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Check-out Date:</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={reservationData.checkOut}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                <label>Number of Rooms</label>
                <input
                  type="number"
                  name="roomNumber"
                  value={reservationData.roomNumber}
                  onChange={handleChange}
                  required
                />
              </div>

                <button type="submit" className="reserveButton">Submit Reservation</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
