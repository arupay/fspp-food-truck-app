function ErrorPage() {
  return (
    <div>
      <span className="index-title">
        <h1 className="index-title-text">Uh Oh!</h1>
      </span>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://pizzaluca.com/wp-content/uploads/2020/08/pizza-luca-in-brooklyn.jpg")`,
          height: "600px",
          marginTop: "-12px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">PAGE NOT FOUND OR UNDER MAINTENANCE</h1>

              <a
                className="btn btn-outline-light btn-lg"
                href="/trucks"
                role="button"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
