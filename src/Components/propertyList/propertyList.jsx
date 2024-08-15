import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./propertyList.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomPrevArrow = (props) => (
  <div {...props} className="custom-arrow custom-prev-arrow">
    {/* <FaChevronLeft /> */}
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="custom-arrow custom-next-arrow">
    {/* <FaChevronRight /> */}
  </div>
);

const PropertyList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="pList">
      <div className="pListItem">
        <img
          src="https://www.uniqhotels.com/media/current_blog/16._Royal_Suite_bedroom.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListText">
          <h1>Hotels</h1>
          <h2><i><b>233 hotels</b></i></h2>
          <p>Discover Dublin's diverse hotel options, from luxurious five-star stays in the heart of the city to cozy boutique hotels and budget-friendly accommodations. Whether you're seeking a historic setting or modern comforts, Dublin's hotels offer warm Irish hospitality and easy access to the city's top attractions, ensuring a comfortable and memorable stay.</p>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.EBz1Pcpw1AD0pNFACwtTXgHaEc&pid=Api&P=0&h=180"
          alt=""
          className="pListImg"
        />
        <div className="pListText">
          <h1>Apartments</h1>
          <h2><i><b>2331 hotels</b></i></h2>
          <p>Discover the perfect blend of comfort and convenience in our stylish apartments. Located in prime areas, these fully-equipped spaces offer a cozy home away from home, ideal for both short and long stays. Enjoy modern amenities, spacious living areas, and easy access to the city's top attractions, making your stay as comfortable as it is memorable.</p>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images2.alphacoders.com/269/269802.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListText">
          <h1>Resorts</h1>
          <h2><i><b>2331 hotels</b></i></h2>
          <p>Discover the ultimate relaxation at our luxury resorts, where pristine beaches, world-class amenities, and personalized service create an unforgettable getaway. Whether you’re seeking adventure, tranquility, or a perfect blend of both, our resorts offer everything you need for a dream vacation in paradise.</p>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.EmlOIQG_HbQ3dCXuJ3hHKwHaEK&pid=Api&P=0&h=180"
          alt=""
          className="pListImg"
        />
        <div className="pListText">
          <h1>Villas</h1>
          <h2><i><b>2331 hotels</b></i></h2>
          <p>
          Experience the ultimate in luxury and privacy with a stay in one of our exquisite villas. Nestled in stunning locations, each villa offers a serene escape, complete with spacious living areas, private pools, and breathtaking views. Perfect for families, couples, or groups, our villas provide an ideal blend of comfort and elegance, ensuring an unforgettable getaway.</p>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://media.vrbo.com/lodging/40000000/39960000/39954400/39954327/51799e5d.c10.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListText">
          <h1>Cabins</h1>
          <h2><i><b>2331 hotels</b></i></h2>
          <p>Nestled in nature, our cozy cabins offer the perfect escape for those seeking tranquility and adventure. Enjoy stunning views, modern amenities, and a peaceful retreat where you can relax by the fireplace or explore the great outdoors. Whether you're looking for a romantic getaway or a family adventure, our cabins provide a comfortable and charming home away home.</p>
        </div>
      </div>
    </Slider>
  );
};

export default PropertyList;
