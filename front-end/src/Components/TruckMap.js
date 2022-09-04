import GoogleMaps from "simple-react-google-maps";
const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

function TruckMap({ latitude, longitude }) {
  const coordinates = { lat: Number(latitude), lng: Number(longitude) };

  // const location = address + " " + borough;
  // useEffect(() => {
  //   axios
  //     .get("https://maps.googleapis.com/maps/api/geocode/json", {
  //       params: {
  //         address: location,
  //         key: MAP_API_KEY,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setCoordinates(res.data.results[0].geometry.location);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, [location]);
  return (
    <div>
      {typeof coordinates.lat === "number" && (
        <GoogleMaps
          apiKey={MAP_API_KEY}
          style={{ height: "400px", width: "100%" }}
          zoom={15}
          center={coordinates}
          markers={coordinates} //optional
        />
      )}
    </div>
  );
}

export default TruckMap;
