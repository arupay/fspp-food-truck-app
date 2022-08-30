import GoogleMaps from "simple-react-google-maps";
import { useState, useEffect } from "react";
import axios from "axios";
const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

function TruckMap({ address, borough }) {
  const [coordinates, setCoordinates] = useState([]);
  const location = address + " " + borough;

  useEffect(() => {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: location,
          key: MAP_API_KEY,
        },
      })
      .then((res) => {
        console.log(res);
        setCoordinates(res.data.results[0].geometry.location);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [location]);
  return (
    <div>
      {coordinates.lat && (
        <GoogleMaps
          apiKey={MAP_API_KEY}
          style={{ height: "400px", width: "100%" }}
          zoom={15}
          center={{ lat: coordinates.lat, lng: coordinates.lng }}
          markers={{ lat: coordinates.lat, lng: coordinates.lng }} //optional
        />
      )}
    </div>
  );
}

export default TruckMap;
