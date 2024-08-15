import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/featuredProperties";
//import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
//import MailList from "../../Components/mailList/MailList";
import NavigationalBar from "../../Components/NavigationalBar/NavigationalBar";
import PropertyList from "../../Components/propertyList/propertyList";
import "./accomodation.css";

const Accommodation = () => {
  return (
    <div>
      <NavigationalBar />
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">Popular Destinations</h1>
        <Featured/>
        <h1 className="homeTitle">Search Accommodation Property Type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Budget Friendly Accommodation</h1>
        <FeaturedProperties/>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Accommodation;
