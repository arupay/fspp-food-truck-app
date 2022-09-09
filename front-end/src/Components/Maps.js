import axios from "axios";
import React from "react";

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
        const coords = res.data.payload
          .filter((e) => e.lat !== null)
          .map((e) => {
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
  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  const showInfoWindow = () => {
    setInfoWindowOpen(!infoWindowOpen);
  };
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
              center={{ lat: 40.7118, lng: -74.0131 }}
            >
              {truckCoords.length &&
                truckCoords.map((e, idx) => {
                  return (
                    <MarkerF
                      key={idx}
                      position={e[1]}
                      icon={{
                        url: "https://gcdnb.pbrd.co/images/UPbgm8xNJfhS.png",
                      }}
                      title={e[0].name}
                      onClick={showInfoWindow}
                    >
                      {infoWindowOpen && (
                        <InfoWindow
                          onCloseClick={() => setInfoWindowOpen(false)}
                          // position={e[1]}
                        >
                          <div>
                            <h6>{e[0].name}</h6>
                            <Link to={`/trucks/${e[0].id}`}>
                              <img src={e[0].image_url} alt="" width="100" />
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
          <Container className="trucks-index ">
            <img
              src="https://mintexpresscarwash.com/images/loader-bluegif.gif"
              alt=""
              style={{ paddingTop: "200px" }}
            />
          </Container>
        )}
      </Container>
    </div>
  );
}

export default React.memo(Maps);
