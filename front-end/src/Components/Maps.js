import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { Container } from "react-bootstrap";

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
const API = process.env.REACT_APP_API_URL;

function Maps() {
  const [truckCoords, setTrucksCoords] = useState([]);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/trucks`)
      .then((res) => {
        const coords = res.data.payload.map((e) => {
          return [
            { name: e.name, image_url: e.image_url, id: e.id },
            { lat: Number(e.lat), lng: Number(e.lng) },
          ];
        });
        setTrucksCoords(coords);
      })
      .catch((err) => {
        return err;
      });
  }, []);
  const containerStyle = {
    width: "auto",
    height: "70vh",
  };
  console.log(truckCoords);
  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  const showInfoWindow = () => {
    setInfoWindowOpen(true);
  };
  console.log(truckCoords);
  return (
    <div>
      <span className="index-title">
        <h1 className="index-title-text">trucks near you</h1>
      </span>
      <Container>
        {truckCoords.length ? (
          <LoadScript googleMapsApiKey={MAP_API_KEY}>
            <GoogleMap
              options={options}
              mapContainerStyle={containerStyle}
              zoom={11}
              center={truckCoords[0][1]}
            >
              {truckCoords.length &&
                truckCoords.map((e, idx) => {
                  return (
                    <MarkerF
                      key={idx}
                      position={e[1]}
                      icon={{
                        // url: "https://gcdnb.pbrd.co/images/a8B831n9dfxr.jpg",
                        url: "https://gcdnb.pbrd.co/images/UPbgm8xNJfhS.png",
                      }}
                      title={e[0].name}
                      onClick={showInfoWindow}
                    >
                      {infoWindowOpen && (
                        <InfoWindow
                          onCloseClick={() => setInfoWindowOpen(false)}
                          position={e[1]}
                        >
                          <div>
                            <div>{e[0].name}</div>
                            <Link to={`/trucks/${e[0].id}`}>
                              <img src={e[0].image_url} alt="" width="75" />
                              <br />
                              More...
                            </Link>
                          </div>
                        </InfoWindow>
                      )}
                    </MarkerF>
                  );
                })}
            </GoogleMap>
          </LoadScript>
        ) : (
          "Loading Maps...."
        )}
      </Container>
    </div>
  );
}

export default Maps;