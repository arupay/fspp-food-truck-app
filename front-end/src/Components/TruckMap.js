import { Container } from "react-bootstrap";
import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

function TruckMap({ latitude, longitude }) {
  const coordinates = { lat: Number(latitude), lng: Number(longitude) };
  const containerStyle = {
    width: "100%",
    height: "50vh",
  };
  console.log(coordinates);

  return (
    <Container>
      {coordinates.lat && (
        <LoadScript googleMapsApiKey={MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={16}
          >
            <MarkerF
              position={coordinates}
              icon={{
                url: "https://gcdnb.pbrd.co/images/NaSvWDMhan6Q.jpg",
              }}
            />
          </GoogleMap>
        </LoadScript>
      )}
    </Container>
  );
}

export default React.memo(TruckMap);
