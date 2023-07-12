import React from "react";
import "./Footer.scss";
import transparentlogo from "../assets/transparent-logo-inverted.png";
import { Navigate, useNavigate } from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate();
  return (
    <footer className="py-3">
      <div className="container">
        <div className="footer-items">
          <div className="item col-xs-12 col-sm-6 col-md-3">
            <div className="logo">
              <img src={transparentlogo} alt="logo" />
              <p className="text-muted small">&copy; 2023 YumTrucks</p>
            </div>
          </div>
          <div className="item col-xs-12 col-sm-6 col-md-3 ">
            <h6>Navigation</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/trucks">Truck Gallery</a>
              </li>
              <li>
                <a href="/trucks/new">Add Your Truck</a>
              </li>
            </ul>
          </div>
          <div className="item col-xs-12 col-sm-6 col-md-3">
            <h6>Maps</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/map">Find Trucks</a>
              </li>
            </ul>
          </div>
          <div className="item col-xs-12 col-sm-6 col-md-3">
            <h6>About</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/about">Our Story</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/augusto-rupay-a07a286b/">
                  The Developer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
