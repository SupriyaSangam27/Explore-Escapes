import React from 'react'
import './facilities.css'
import '../../index.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import arrow from '../../assets/arrow.png'

function facilities() {
  return (
    <div className='facility'>
      <div className="gallery">
        <img src={gallery1} alt="Expert Guides" />
        <img src={gallery2} alt="Customizable Travel Plans" />
        <img src={gallery3} alt="Adventure Gear Rentals" />
        <img src={gallery4} alt="Travel Insurance" />
      </div>
      <button className='btn dark-btn'> See More here <img src={arrow} alt="Arrow button" /></button>
    </div>
  )
}

export default facilities