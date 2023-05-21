import truckstop from "../assets/truckstopnoloop.gif";
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
          <button
            onClick={() => navigate(`/trucks/`)}
            class="header1__content__browse"
          >
            Trucks
          </button>
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
              The greatest trucks in your favorite city.
            </h1>
            <div className="gradient-line"></div>
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
            <button className="header1__content__browse">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
