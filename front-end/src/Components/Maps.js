import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;
const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

function Maps() {
  const [trucks, setTrucks] = useState([]);
  const [coordsArr, setCoordsArr] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/trucks`)
      .then((res) => {
        const addressMap = res.data.payload.map(
          (e) => e.address + " " + e.borough
        );
        setTrucks(addressMap.slice(0, 2));
      })
      .catch((err) => {
        return err;
      });
  }, []);
  const fetchCoords = async () => {
    try {
      const req = await Promise.all(
        trucks.map((address) => {
          return axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            {
              params: {
                address: address,
                key: MAP_API_KEY,
              },
            }
          );
        })
      );
      setCoordsArr(req);
    } catch (err) {
      console.error(err);
    }
  }
  return <div>hello</div>;
}

export default Maps;
