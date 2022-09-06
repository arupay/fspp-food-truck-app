function About() {
  return (
    <div>
      <span className="index-title">
        <h1 className="index-title-text">about yumtrucks</h1>
      </span>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://pizzaluca.com/wp-content/uploads/2020/08/pizza-luca-in-brooklyn.jpg")`,
          height: "600px",
          marginTop: "-12px",
          backgroundSize: "cover",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            width: "60%",
            margin: "auto",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <div className="mb-3">
                Food connects us no matter who we are, and the best food in the
                world is found right here in New York City. YumTrucks brings
                together foodies and vendors to create communities and long
                lasting memories.
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="index-title">
        <h1 className="index-title-text">about the developer</h1>
      </span>
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <div
          className="d-flex justify-content-center align-items-center h-100 "
          style={{ marginTop: "-12px", width: "60%" }}
        >
          <div className="text-black">
            <h3
              style={{
                color: "#000000",
                fontSize: "20px",
                fontFamily: "'Crete Round',sans-serif",
                fontStyle: "italic",
                fontWeight: "400",
              }}
            >
              Augusto Rupay
            </h3>
            <div>
              Hello there, my name is Augusto Rupay and I'm a software developer
              currently enrolled in Pursuit NYC. YumTrucks is a full stack
              passion project created using JS, React, SQL, Express, Postgres,
              Postman, Bootstrap, Google Maps API, & Heroku. Potential future
              development includes log in capabitlies for foodies and vendors.
              Reach out to me on LinkedIn.
            </div>
            <a
              className="btn btn-outline-dark btn-sm"
              href="https://www.linkedin.com/in/augusto-rupay-a07a286b/"
              role="button"
            >
              Linkdin
            </a>
            <a
              className="btn btn-outline-dark btn-sm"
              href="https://github.com/arupay"
              role="button"
            >
              Github
            </a>
            <a
              className="btn btn-outline-dark btn-sm"
              href="https://github.com/arupay/fspp-food-truck-app"
              role="button"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
