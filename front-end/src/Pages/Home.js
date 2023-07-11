import truckstop from "../assets/truckstopnoloop.gif";
import image1 from "../assets/main-image-1.jpeg";
import image2 from "../assets/main-image-2.jpeg";
import image3 from "../assets/main-image-3.jpeg";
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
              src="https://th.bing.com/th/id/OIG.r3tgoz__VK2KW3vXVFoF?pid=ImgGn"
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
                Explore a wide range of food trucks located throughout the city
                in our food truck gallery. Want to share your favorite spot?
                Sign up and add your favorite truck.
              </p>
            </div>
            <button
              onClick={() => navigate(`/trucks`)}
              className="header1__content__browse"
            >
              Gallery
            </button>
          </div>
        </div>
        <div
          className="d-flex justify-content-between homecontainer__sectionone"
          id="sec-two"
        >
          <div className="homecontainer__sectionone__info rlm">
            <h1 className="homecontainer__sectionone__info__heading">
              Discover with TruckMaps
            </h1>
            <div className="gradient-line"></div>
            <div className="homecontainer__sectionone__info__par">
              <p className="homecontainer__sectionone__info__par__parbody">
                Immerse yourself in the vibrant street food culture of NYC, or
                even in your own neighborhood. Discover and explore a wide
                variety of food trucks in the NYC area, all powered by Google
                Maps.
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
              src={image2}
              alt="truckinthecity"
              className="homecontainer__sectionone__imgtwo__imgattr"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between homecontainer__sectionone">
          <div className="d-flex homecontainer__sectionone__img">
            <img
              src={image3}
              alt=""
              className="homecontainer__sectionone__img__imgattr"
            />
          </div>
          <div className="homecontainer__sectionone__info">
            <h1 className="homecontainer__sectionone__info__heading">
              Join the conversation
            </h1>
            <div className="gradient-line"></div>
            <div className="homecontainer__sectionone__info__par">
              <p className="homecontainer__sectionone__info__par__parbody">
                Share your experiences, leave reviews, and discover what fellow
                food enthusiasts are raving about. With access to our extensive
                database and interactive platform, you'll stay connected to the
                latest trends, recommendations, and flavors from the food truck
                scene.
              </p>
            </div>
            <button
              onClick={() => navigate(`/login`)}
              className="header1__content__browse"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
