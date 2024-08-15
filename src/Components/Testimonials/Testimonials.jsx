import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next from '../../assets/next.png';
import back from '../../assets/back.png';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';

const Testimonials = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    if (tx > -50) { 
      setTx(tx - 25);
      slider.current.style.transform = `translateX(${tx - 25}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(tx + 25);
      slider.current.style.transform = `translateX(${tx + 25}%)`;
    }
  };

  return (
    <div className='reviews'>
      <img src={back} alt="back Button" className='back-btn' onClick={slideBackward} />
      <img src={next} alt="Next Button" className='next-btn' onClick={slideForward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user1} alt="User1" />
                <div>
                  <h3>Manikanta Gurrala</h3>
                  <span>Escape Explore, Canada</span>
                </div>
              </div>
              <p>Escape Explore has completely transformed the way I travel. The detailed itineraries and expert guides
                make planning a breeze. I’ve discovered so many hidden gems that I would have otherwise missed.
                Highly recommend to all adventure seekers!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user2} alt="User2" />
                <div>
                  <h3>Anish Naidu</h3>
                  <span>Escape Explore, USA</span>
                </div>
              </div>
              <p>Escape Explore made my trip to the mountains unforgettable. The adventure gear rentals and accommodation
                booking services were seamless. The guides were knowledgeable and helpful. This platform is a must for
                anyone looking to explore and adventure.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user3} alt="User3" />
                <div>
                  <h3>Supriya Sangam</h3>
                  <span>Escape Explore, India</span>
                </div>
              </div>
              <p>I had an amazing experience with Escape Explore. The safety measures and expert advice gave me confidence
                during my hikes and water sports adventures. The community forums are also a great place to share tips and
                stories. Will definitely use it for my next trip!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user4} alt="User4" />
                <div>
                  <h3>Dhisanth</h3>
                  <span>Escape Explore, Canada</span>
                </div>
              </div>
              <p>A fantastic platform for planning adventurous trips! The customizable travel plans are a great feature,
                and the local experiences added so much value to my travels. The only improvement I’d suggest is faster
                customer support response times.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
