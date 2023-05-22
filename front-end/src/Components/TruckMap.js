import { Container } from "react-bootstrap";
import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

function TruckMap({ latitude, longitude }) {
  const coordinates = { lat: Number(latitude), lng: Number(longitude) };
  const containerStyle = {
    width: "100%",
    height: "50vh",
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });
  console.log(coordinates);

  return (
    <Container>
      {coordinates.lat && isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={16}
        >
          <MarkerF
            position={coordinates}
            icon={{
              url: "https://github.com/arupay/fspp-food-truck-app/assets/96318127/381814d5-737e-4857-b67d-b8969b06cae1",
            }}
          />
        </GoogleMap>
      )}
    </Container>
  );
}

export default React.memo(TruckMap);
