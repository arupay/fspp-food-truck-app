import "./About.scss";

import { SocialIcon } from "react-social-icons";

function About() {
  return (
    <div className="main">
      <span className="index-title">
        <h1 className="index-title-text">about us</h1>
      </span>
      <div className="aboutimg text-center">
        <div className="d-flex justify-content-center">
          <div className="aboutimg__mask">
            <div className="aboutimg__abouttext text-white m-1">
              YumTrucks unites foodies and vendors to celebrate the food trucks
              they love. Whether is veggie momo or birria tacos, you can always
              find what you're looking for here at Yum Trucks -- New York's
              premier food truck hub.
            </div>
          </div>
        </div>
      </div>

      <div className="container aboutcontainer">
        <div className="d-flex justify-content-evenly aboutcontainer__sectionone">
          <div className="aboutcontainer__sectionone__info">
            <div className="aboutcontainer__sectionone__info__heading">
              under the hood
              <div id="socials">
                <SocialIcon
                  url="https://github.com/arupay/fspp-food-truck-app"
                  className="socialicon"
                  bgColor="#fec309"
                />
              </div>
            </div>
            <h3 className="aboutcontainer__sectionone__info__title">source</h3>
            <div className="gradient-line"></div>
            <div className="aboutcontainer__sectionone__info__par">
              <p className="aboutcontainer__sectionone__info__par__parbody">
                YumTrucks is a fullstack PERN web application that aims to unite
                foodies and food trucks across New York City. User
                authentication is made possible by Firebase, while mapping and
                geocoding is done by the GoogleMaps API. Styling was
                accomplished through CSS frameworks Bootstrap/SASS.
              </p>
            </div>
          </div>
          <div className=" aboutcontainer__sectionone__img m-4">
            <img
              src="https://skillicons.dev/icons?i=react,firebase,nodejs,express,aws,postgres,sass,bootstrap&perline=3&theme=light"
              alt="skills"
            />
          </div>
        </div>
      </div>
      {/*ABOUT DEVELOPER */}
      <span className="index-title">
        <h1 className="index-title-text">about the developer</h1>
      </span>

      <div className="container aboutcontainer">
        <div className="d-flex justify-content-evenly aboutcontainer__sectionone">
          <div className=" aboutcontainer__sectionone__img m-4">
            <img
              src="https://github.com/arupay/fspp-food-truck-app/assets/96318127/68aa94c1-d82d-46b1-a4dc-78536e636250"
              alt=""
              className="aboutcontainer__sectionone__img__imgattr"
            />
          </div>
          <div className="aboutcontainer__sectionone__info">
            <div className="aboutcontainer__sectionone__info__heading">
              Augusto Rupay
              <div id="socials">
                <SocialIcon
                  url="https://www.linkedin.com/in/augusto-rupay-a07a286b/"
                  className="socialicon"
                />
                <SocialIcon
                  url="https://github.com/arupay"
                  className="socialicon"
                />
                <SocialIcon
                  url="mailto:augustorupay@pursuit.org"
                  className="email"
                />
              </div>
            </div>
            <h3 className="aboutcontainer__sectionone__info__title">
              Developer
            </h3>
            <div className="gradient-line"></div>
            <div className="aboutcontainer__sectionone__info__par">
              <p className="aboutcontainer__sectionone__info__par__parbody">
                Hello, I'm a Queens-based software developer with a passion for
                food and community. Yumtrucks was inspired by the vibrant
                communities of Woodside and Jackson Heights, two melting pot
                neighborhoods I've had the privilege to call home. Drawing from
                personal experiences and my Peruvian heritage, I created
                YumTrucks to celebrate flavors that unites people in the heart
                of dynamic neighborhoods across New York City. Feel free to send
                questions my way on Linkdn, or just say hi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
