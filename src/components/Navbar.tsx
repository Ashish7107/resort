import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/js/dist/modal"; // Import the modal component
import "bootstrap/js/dist/tooltip"; // Import the tooltip component
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" style={{ height: "48px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/7387056875"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
