import { Container } from "react-bootstrap";
import truckstop from "../assets/truckstop.gif";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <span className="index-title">
        <h1 className="index-title-text">home</h1>
      </span>
      <div className="header1" id="header01-0">
        <div
          className="mbr-overlay"
          style={{ opacity: "0.4", overflow: "hidden", background: "black" }}
        ></div>
        <div className="container">
          <div className="row">
            <h1 className="header1__text mb-4">YUMTRUCKS</h1>
          </div>
        </div>
      </div>
      <div className="container homecontainer">
        <div className="d-flex justify-content-between homecontainer__sectionone">
          <div className="d-flex homecontainer__sectionone__img">
            <img
              src="https://cdn.vox-cdn.com/thumbor/AoHvVzG17dKU29RkjMhQsQSEUD4=/0x0:2046x1535/1520x1013/filters:focal(0x0:2046x1535):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/46704794/halal-nyc-guian-bolisay.0.0.jpg"
              alt=""
              className="homecontainer__sectionone__img__imgattr"
            />
          </div>
          <div className="homecontainer__sectionone__info">
            <h1 className="homecontainer__sectionone__info__heading">
              The best trucks in the world's greatest city.
            </h1>
            <div className="gradient-line is--red-line"></div>
            <div className="homecontainer__sectionone__info__par">
              <p className="homecontainer__sectionone__info__par__parbody">
                Explore the city's diverse flavors, conveniently locate trucks
                with an interactive map, and join a community of food
                enthusiasts by leaving reviews and recommendations. <br />
                <br />
                Immerse yourself in the vibrant street food culture of NYC with
                Yumtruck's central map page, featuring an extensive database of
                food trucks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
