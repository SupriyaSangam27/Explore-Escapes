// import React, { useState } from 'react';
// import './Attraction.css';
// import data from '../../TemplateData.json';

// const Attraction = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = data.filter((val) => {
//     if (searchTerm === "") {
//       return false; // Do not return any data if the search term is empty
//     } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return true;
//     }
//     return false;
//   });

//   return (
//     <div className="attractions-page">
//       <section className="banner">
//         <h1>Discover the Best Attractions Around You</h1>
//         <p>Explore amazing places to visit and create unforgettable memories.</p>
//       </section>

//       <div className="templateContainer">
//       <h1 style={{ textAlign: 'center' }}>Search Your Favorite Destinations</h1><br></br>
//       <div className="searchInput_Container">
//           <input 
//             id="searchInput" 
//             type="text" 
//             placeholder="Search here..." 
//             onChange={(event) => setSearchTerm(event.target.value)} 
//           />
//         </div>
//         <div className="template_Container">
//           {filteredData.length > 0 ? (
//             filteredData.map((val) => (
//               <div className="template" key={val.id}>
//                 <img src={val.image} alt={val.title} className="template-image" /><br></br>
//                 <div className="template-details">
//                   <h3>{val.title}</h3>
//                   <p className="price">${val.price}</p>
//                   <p className="description">{val.description}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             searchTerm && <p>No results found</p>
//           )}
//         </div>
//       </div>

//       <section className="featured-attraction">
//         <h2>Featured Attraction</h2>
//         <div className="featured-content">
//           <div className="featured-image"><img src="src/assets/Attract17.jpg" alt="Attraction 17" /></div>
//           <div className="featured-description">
//             <h3>Amazing Attraction</h3>
//             <p>This attraction is a must-visit for everyone. It offers stunning views, exciting activities, and a unique cultural experience. Don't miss out on this incredible destination.</p>
//             <button className="learn-more-button">Learn More</button>
//           </div>
//         </div>
//       </section>

//       <section className="popular-attractions">
//         <h2>Popular Attractions</h2>
//         <div className="attractions-grid">
//           <div className="attraction-item">
//             <img src="src/assets/Attract13.jpg" alt="Attraction 13" />
//           </div>
//           <div className="attraction-item">
//             <img src="src/assets/Attract2.jpg" alt="Attraction 2" />
//           </div>
//           <div className="attraction-item">
//             <img src="src/assets/Attract3.jpg" alt="Attraction 3" />
//           </div>
//           <div className="attraction-item">
//             <img src="src/assets/Attract4.jpg" alt="Attraction 4" />
//           </div>
//           <div className="attraction-item">
//             <img src="src/assets/Attract10.jpg" alt="Attraction 10" />
//           </div>
//           <div className="attraction-item">
//             <img src="src/assets/Attract14.jpg" alt="Attraction 14" />
//           </div>
//         </div>
//       </section>

//       <section className="top-destinations">
//         <h2>Top Destinations</h2>
//         <div className="destinations-grid">
//           <div className="attraction-item">
//             <img src="src/assets/Attract14.jpg" alt="Attraction 14" />
//           </div>
//           <div className="attraction-item">
//             <img src="src/assets/Attract18.jpg" alt="Attraction 18" />
//           </div>
//           <div className="attraction-item">
//             <img src="src/assets/Attract17.jpg" alt="Attraction 17" />
//           </div>
//         </div>
//       </section>

//       <section className="testimonials">
//         <h2>What Our Visitors Say</h2>
//         <div className="testimonials-grid">
//           <div className="testimonial-item">
//             <p>"Amazing experience! The attractions were fantastic and well-organized."</p>
//             <span>- Rishab</span>
//           </div>
//           <div className="testimonial-item">
//             <p>"Loved every moment of my trip. Highly recommend these attractions."</p>
//             <span>- Lalit Kumar</span>
//           </div>
//           <div className="testimonial-item">
//             <p>"A wonderful way to explore new places and create memories."</p>
//             <span>- Ravi Benipal</span>
//           </div>
//         </div>
//       </section>

//       <section className="travel-tips">
//         <h2>Travel Tips</h2>
//         <div className="tips-grid">
//           <div className="tip-item">
//             <h3>Packing Essentials</h3>
//             <p>Make sure to pack light and include all the necessary items for your trip.</p>
//           </div>
//           <div className="tip-item">
//             <h3>Health & Safety</h3>
//             <p>Stay safe by following health guidelines and keeping emergency contacts handy.</p>
//           </div>
//           <div className="tip-item">
//             <h3>Local Etiquette</h3>
//             <p>Respect the local culture and traditions to enhance your travel experience.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Attraction;

import React, { useState } from 'react';
import './Attraction.css';
import data from '../../TemplateData.json';


const Attraction = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((val) => {
    if (searchTerm === "") {
      return false; // Do not return any data if the search term is empty
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <div className="attractions-page">
      <section className="banner">
        <h1>Discover the Best Attractions Around You</h1>
        <p>Explore amazing places to visit and create unforgettable memories.</p>
      </section>

      <div className="templateContainer">
        <h1 style={{ textAlign: 'center' }}>Search Your Favorite Destinations</h1><br />
        <div className="searchInput_Container">
          <input 
            id="searchInput" 
            type="text" 
            placeholder="Search here..." 
            className='searchInput'
            onChange={(event) => setSearchTerm(event.target.value)} 
          />
        </div>
        <div className="template_Container">
          {filteredData.length > 0 ? (
            filteredData.map((val) => (
              <div className="template" key={val.id}>
                <img src={val.image} alt={val.title} className="template-image" />
                <div className="template-details">
                  <h3>{val.title}</h3>
                  <p className="price">${val.price}</p>
                  <p className="description">{val.description}</p>
                </div>
              </div>
            ))
          ) : (
            searchTerm && <p>No results found</p>
          )}
        </div>
      </div>

      <section className="featured-attraction">
        <h2>Featured Attraction</h2>
        <div className="featured-content">
          <div className="featured-image"><img src="src/assets/Attract17.jpg" alt="Attraction 17" /></div>
          <div className="featured-description">
            <h3>Amazing Attraction</h3>
            <p>This attraction is a must-visit for everyone. It offers stunning views, exciting activities, and a unique cultural experience. Don't miss out on this incredible destination.</p>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </section>

      <section className="popular-attractions">
        <h2>Popular Attractions</h2>
        <div className="attractions-grid">
          <div className="attraction-item">
            <img src="src/assets/Attract13.jpg" alt="Attraction 13" />
          </div>
          <div className="attraction-item">
            <img src="src/assets/Attract2.jpg" alt="Attraction 2" />
          </div>
          <div className="attraction-item">
            <img src="src/assets/Attract3.jpg" alt="Attraction 3" />
          </div>
          <div className="attraction-item">
            <img src="src/assets/Attract4.jpg" alt="Attraction 4" />
          </div>
          <div className="attraction-item">
            <img src="src/assets/Attract10.jpg" alt="Attraction 10" />
          </div>
          <div className="attraction-item">
            <img src="src/assets/Attract14.jpg" alt="Attraction 14" />
          </div>
        </div>
      </section>

      <section className="top-destinations">
        <h2>Top Destinations</h2>
        <div className="destinations-grid">
          <div className="attraction-item">
            <img src="src/assets/Attract14.jpg" alt="Attraction 14" />
          </div>
          <div className="attraction-item">
            <img src="src/assets/Attract18.jpg" alt="Attraction 18" />
          </div>
          <div className="attraction-item">
            <img src="src/assets/Attract17.jpg" alt="Attraction 17" />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Visitors Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>"Amazing experience! The attractions were fantastic and well-organized."</p>
            <span>- Rishab</span>
          </div>
          <div className="testimonial-item">
            <p>"Loved every moment of my trip. Highly recommend these attractions."</p>
            <span>- Lalit Kumar</span>
          </div>
          <div className="testimonial-item">
            <p>"A wonderful way to explore new places and create memories."</p>
            <span>- Ravi Benipal</span>
          </div>
        </div>
      </section>

      <section className="travel-tips">
        <h2>Travel Tips</h2>
        <div className="tips-grid">
          <div className="tip-item">
            <h3>Packing Essentials</h3>
            <p>Make sure to pack light and include all the necessary items for your trip.</p>
          </div>
          <div className="tip-item">
            <h3>Health & Safety</h3>
            <p>Stay safe by following health guidelines and keeping emergency contacts handy.</p>
          </div>
          <div className="tip-item">
            <h3>Local Etiquette</h3>
            <p>Respect the local culture and traditions to enhance your travel experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attraction;



