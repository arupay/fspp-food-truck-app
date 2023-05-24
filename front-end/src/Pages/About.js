import "./About.scss";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function About() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <span className="index-title">
        <h1 className="index-title-text">about yumtrucks</h1>
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

      {/*ABOUT DEVELOPER */}
      <div className="container aboutcontainer">
        <div className="d-flex justify-content-center aboutcontainer__sectionone">
          <div className=" aboutcontainer__sectionone__img m-5">
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
                food and community. Inspired by the vibrant culinary culture of
                Woodside and Jackson Heights, two melting pot neighborhoods I've
                proudly called home, I created YumTrucks. Drawing from my
                personal experiences and deep-rooted Peruvian heritage, this app
                was designed to celebrate the flavors that unites people in the
                heart of these dynamic neighborhoods and many others across New
                York City.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="p-5 text-center">
        <div
          className="mask"
          style={{
            backgroundColor: "white",
            marginTop: "-50px",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center h-100 "
            style={{ width: "60%", margin: "auto" }}
          >
            <div className="align-items-center ">
              <div className="p-2">
                <span className="round">
                  <img
                    src={`https://github.com/arupay/fspp-food-truck-app/assets/96318127/68aa94c1-d82d-46b1-a4dc-78536e636250`}
                    alt="user"
                    width="100"
                  />
                </span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontFamily: "'Crete Round',sans-serif",
                  fontStyle: "italic",
                  fontWeight: "400",
                  color: "#052d44",
                }}
              >
                Augusto Rupay
              </h3>
              <h3
                style={{
                  color: "#fec309",
                  fontSize: "14px",
                  fontFamily: "'Crete Round',sans-serif",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                Developer
              </h3>

              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  color: "#052d44",
                }}
              >
                I'm a software developer from Queens, NY, and a big foodie.
                YumTrucks is a full stack passion project created using JS,
                React, SQL, Express, Postgres, Postman, Bootstrap, Google Maps
                API, & Render. Potential future development includes log in
                authentication for foodies and vendors profiles. Reach out to me
                on LinkedIn.
              </div>
              <br />
              <a
                className="btn btn-outline-warning btn-sm m-2"
                href="https://www.linkedin.com/in/augusto-rupay-a07a286b/"
                role="button"
              >
                Linkdin
              </a>
              <a
                className="btn btn-outline-warning btn-sm"
                href="https://github.com/arupay"
                role="button"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
