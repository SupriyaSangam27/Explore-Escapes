import React from 'react'
import './About.css'
import about_img from '../../assets/BC.png'
import play_icon from '../../assets/IconPlay.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
      <img src={about_img} alt="About Us Image" className='about-img' />
      <img src={play_icon} alt="Play Button" className='play-icon' />
      </div>
      
      <div className="about-right">
        <h3>About Escape Explore...</h3>
        <h2>Unleashing Your Inner Adventurer</h2>
        <p>Escape Explore is your ultimate guide to thrilling adventures and unforgettable experiences. 
          Whether you're a seasoned traveler or an aspiring explorer, our platform offers everything you need to plan and 
          embark on your next journey.</p>
        <p>Discover hidden gems, breathtaking landscapes, and exhilarating activities across the globe. From serene hikes in
           the mountains to adrenaline-pumping water sports, Escape Explore caters to all adventure enthusiasts.</p>
        <p>Our expert guides, detailed itineraries, and practical tips ensure that your trips are not only exciting but also safe and well-organized.
           Join our community of explorers, share your stories, and inspire others to break free from the ordinary.</p>
        <p>Let Escape Explore be your companion in creating memories that last a lifetime. Adventure awaits!</p>
      </div>

    </div>
  )
}

export default About