import { Container } from "react-bootstrap";
import truckstop from "../assets/truckstop.gif";
import "./Home.scss";

function Home() {
  return (
    <div className="main">
      <span className="index-title">
        <h1 className="index-title-text">home</h1>
      </span>
      <div className="header1" id="header01-0">
        <div
          className="mbr-overlay"
          style={{ opacity: "0.1", backgroundColor: "rbg(255,255,255" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 align-left">
              <h2 className="header1__text mb-3">Hello</h2>
              <h1 className="header1__text mb-4">Hello2</h1>
              <p className="header1__text mb-4">Text goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
