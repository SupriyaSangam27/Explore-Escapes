import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
              </div>
            </div>
            <div className="back">
              <div className="backContent">
                <h1>More about Dublin</h1>
                <p>
                Dublin, the vibrant capital of Ireland, blends rich history with modern charm. Explore its historic landmarks, lively pub scene, and literary heritage, all set against the backdrop of stunning Georgian architecture and green parks. From the iconic Trinity College to the bustling streets of Temple Bar, Dublin offers an unforgettable experience for every traveler.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
              </div>
            </div>
            <div className="back">
              <div className="backContent">
                <h1>More about Reno</h1>
                <p>Reno, known as "The Biggest Little City in the World," offers a unique blend of outdoor adventure and vibrant city life. Nestled at the foot of the Sierra Nevada mountains, Reno is a gateway to stunning natural beauty, including Lake Tahoe. The city boasts a lively arts scene, exciting casinos, and year-round events, making it a perfect destination for both thrill-seekers and those looking to relax.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>532 properties</h2>
              </div>
            </div>
            <div className="back">
              <div className="backContent">
                <h1>More about Austin</h1>
                <p>
                Austin, Texas, known as the "Live Music Capital of the World," offers a unique blend of vibrant culture, outdoor adventure, and eclectic charm. From the bustling nightlife on Sixth Street to the serene beauty of Lady Bird Lake, Austin is a city where music, food, and creativity come together, making it a must-visit destination for any traveler.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
