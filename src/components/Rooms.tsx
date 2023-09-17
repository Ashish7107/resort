import img1 from "../assets/lawn.png";
import React from "react";
import "../styles/Rooms.css";
import rooms from "../assets/rooms.png";
import celebration from "../assets/celebration.png";
import meeting from "../assets/meeting.png";

const Rooms: React.FC = () => {
  return (
    <>
      <div className="row">
        <section className="Roomsheading">
          <u>
            <b className="Roomsheading">Our Services</b>
          </u>
        </section>
        <div className="col-md-4">
          <div className=" roomcard card image-card ">
            <img src={rooms} className="card-img-top" alt="Card Image" />
            <h4>
              <u>
                <b>Rooms and Suites</b>
              </u>
            </h4>
            <div className="card-body card-content">
              <a href="#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="roomcard card image-card ">
            <img src={celebration} className="card-img-top" alt="Card Image" />
            <h4>
              <u>
                <b>Party and Celebration</b>
              </u>
            </h4>
            <div className="card-body card-content">
              <a href="#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className=" roomcard card image-card ">
            <img src={meeting} className="card-img-top" alt="Card Image" />
            <h4>
              <u>
                <b>Seminar and Meeting</b>
              </u>
            </h4>
            <div className="card-body card-content">
              <a href="#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
