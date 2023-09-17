import React from "react";
import "bootstrap/js/dist/modal"; // Import the modal component
import "bootstrap/js/dist/tooltip"; // Import the tooltip component
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Services.css";
const Services = () => {
  return (
    <div className="container services">
      <div className="row">
        <section className="serviceheading">
          <u>
            <b className="Roomsheading">We Provide</b>
          </u>
        </section>

        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <i className="fa-solid fa-taxi icons"></i>
              <h5 className="card-title">Pickup and Drop</h5>

              <p className="card-text">
                We provide hassle-free and comfortable ride to and from the
                resort. Enjoy a smooth and comfortable journey with our
                effortless transportation service.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <i className="fa-solid fa-wifi icons"></i>

              <h5 className="card-title">Seamless Conectivity</h5>
              <p className="card-text">
                Enjoy an uninterrupted connection with high-speed data.
                Experience smooth connectivity ensuring that you stay productive
                throughout your stay.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <i className="fa-sharp fa-solid fa-water-ladder icons"></i>
              <h5 className="card-title">Outdoor Pool</h5>

              <p className="card-text">
                Take a cool dip and enjoy a splash in our glistening clean
                swimming pool. Surrounded by lush greenery, the pool offers the
                perfect retreat for a refreshing experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <i className="fa-solid fa-square-parking icons"></i>
              <h5 className="card-title">Valet Parking</h5>

              <p className="card-text">
                We will help you park your car for hassle-free entry into the
                resort. Leave the parking to us and enjoy a smooth arrival with
                our convenient valet service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
