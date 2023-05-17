import { Autocomplete } from "@react-google-maps/api";

function About() {
  return (
    <div className="main">
      <span className="index-title">
        <h1 className="index-title-text">about yumtrucks</h1>
      </span>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://github.com/arupay/fspp-food-truck-app/assets/96318127/7e3cb4b2-6951-4b93-854e-e5edfb6c85b9")`,
          height: "60vh",
          marginTop: "-12px",
          backgroundSize: "cover",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            width: "70%",
            margin: "auto",
          }}
        >
          <div className="d-flex justify-content-center h-100">
            <div className="text-white m-1">
              <div className="about-text mb-1">
                Food connects us no matter who we are, and the best food in the
                world can be found right here in New York City. YumTrucks brings
                together foodies and food truck endors to to celebrate the food
                trucks they love. Whether is veggie momo, al pastor tacos, or
                spicy lamb over rice, you can always find what you're looking
                for here at Yum Trucks -- your spot for the best food trucks in
                the 5 boroughs.
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="index-title">
        <h1 className="index-title-text">about the developer</h1>
      </span>

      <div className="p-5 text-center">
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
      </div>
    </div>
  );
}

export default About;
