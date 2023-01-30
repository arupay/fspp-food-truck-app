import React from "react";
import "./Footer.css";
import transparentlogo from "../assets/transparent-logo-inverted.png";

function Footer(props) {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <img src={transparentlogo} alt="logo" className="footer-logo" />
            <p className="text-muted small">&copy; 2023 YumTrucks</p>
          </div>
          <div className="col-6 col-md-2 ml-auto ">
            <h6>Navigation</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/trucks">Trucks</a>
              </li>
              <li>
                <a href="/trucks/new">Add Your Truck</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 ml-auto ">
            <h6>Maps</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/map">Find Us</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 ml-auto ">
            <h6>About</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/about">Our Story</a>
              </li>
              <li>
                <a href="/about">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
