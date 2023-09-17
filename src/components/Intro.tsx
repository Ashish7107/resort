import "../styles/Intro.css";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/.avif";
import hotel from "../assets/logo.png";
import img1 from "../assets/lawn.png";
import img2 from "../assets/reception.jpg";
const Intro = () => {
  return (
    <>
      <div className=" row intro">
        <div className="col-md-4 aa ">
          <span>
            <i className=" fas fa-star" style={{ color: "#FFD700" }}></i>
            <i className=" fas fa-star" style={{ color: "#FFD700" }}></i>
            <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
            <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
            <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
          </span>
          <h1 className="heading1">Suwalka Resort in Kota:</h1>
          <h3>
            " Nature's Retreat, Luxury's Embrace."
            <br></br>
          </h3>

          <p className="intro_content">
            "Suwalka Resort in Kota: Where Nature Embraces Luxury. Nestled
            amidst the serene beauty of Kota's natural landscapes, Suwalka
            Resort beckons you to experience a harmonious blend of tranquility
            and opulence. Our resort, located near the pristine wonders of
            nature, offers elegantly appointed rooms, perfect for a peaceful
            retreat. From intimate gatherings to grand celebrations, and
            productive meetings, Suwalka Resort is your haven of choice. Immerse
            yourself in the beauty of Kota's natural surroundings while
            indulging in unmatched hospitality. Discover the essence of
            relaxation, celebration, and successful meetings in the lap of
            nature at Suwalka Resort - Where Nature and Luxury Unite!"
          </p>
        </div>
        <div className="col-md-3  aa">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-3 aab">
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
