function ErrorPage() {
  return (
    <div>
      <span className="index-title">
        <h1 className="index-title-text">Uh Oh!</h1>
      </span>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://ewscripps.brightspotcdn.com/dims4/default/d6fd899/2147483647/strip/true/crop/2048x1152+0+192/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F86%2F43%2Ff3372ff7471ea40a613c50545d91%2Funicorntruckonfire.jpeg")`,
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
