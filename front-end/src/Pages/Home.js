import truckstop from "../assets/truckstopnoloop.gif";
import aione from "../assets/AItruckimage1.jpeg";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <span className="index-title">
        <h1 className="index-title-text">NYC'S BEST FOOD TRUCKS</h1>
      </span>
      <div className="header1">
        <div className="header1__content">
          <img className="header1__content__img" src={truckstop} alt="logo" />
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
              The best trucks in your favorite city.
            </h1>
            <div className="gradient-line"></div>
            <div className="homecontainer__sectionone__info__par">
              <p className="homecontainer__sectionone__info__par__parbody">
                Explore New York's diverse flavors, conveniently locate trucks
                with an interactive map, and join a community of food
                enthusiasts by leaving reviews and recommendations.
              </p>
            </div>
            <button
              onClick={() => navigate(`/login`)}
              className="header1__content__browse"
            >
              sign up
            </button>
          </div>
        </div>
        <div
          className="d-flex justify-content-between homecontainer__sectionone"
          id="sec-two"
        >
          <div className="homecontainer__sectionone__info rlm">
            <h1 className="homecontainer__sectionone__info__heading">
              Interactive Maps
            </h1>
            <div className="gradient-line"></div>
            <div className="homecontainer__sectionone__info__par">
              <p className="homecontainer__sectionone__info__par__parbody">
                Immerse yourself in the vibrant street food culture of NYC with
                Yumtruck's central map page, featuring an extensive database of
                food trucks.
              </p>
            </div>
            <button
              onClick={() => navigate(`/map/`)}
              className="header1__content__browse"
            >
              View Map
            </button>
          </div>
          <div className="d-flex homecontainer__sectionone__imgtwo">
            <img
              src={aione}
              alt="truckinthecity"
              className="homecontainer__sectionone__imgtwo__imgattr"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
