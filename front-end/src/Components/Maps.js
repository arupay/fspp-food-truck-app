import axios from "axios";
import { useState, useEffect } from "react";
import GoogleMaps from "simple-react-google-maps";

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
const API = process.env.REACT_APP_API_URL;

function Maps() {
  const [truckCoords, setTrucksCoords] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/trucks`)
      .then((res) => {
        const coords = res.data.payload.map((e) => {
          return { lat: Number(e.lat), lng: Number(e.lng) };
        });
        console.log("here are the cords", coords);
        setTrucksCoords(coords);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div>
      {truckCoords.length ? (
        <GoogleMaps
          apiKey={MAP_API_KEY}
          style={{ height: "700px", width: "700px" }}
          zoom={10}
          center={truckCoords[5]}
          markers={truckCoords} //optional
        />
      ) : (
        "Loading Maps...."
      )}
    </div>
  );
}

export default Maps;
