import React from "react";
import "./Footer.scss";
import transparentlogo from "../assets/transparent-logo-inverted.png";

function Footer(props) {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="logo">
              <img src={transparentlogo} alt="logo" />
              <p className="text-muted small">&copy; 2023 YumTrucks</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 ">
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
          <div className="col-xs-12 col-sm-6 col-md-3">
            <h6>Maps</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/map">Find Us</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
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
