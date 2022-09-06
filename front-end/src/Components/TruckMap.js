import { Container } from "react-bootstrap";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

function TruckMap({ latitude, longitude }) {
  const coordinates = { lat: Number(latitude), lng: Number(longitude) };
  const containerStyle = {
    width: "100%",
    height: "50vh",
  };

  return (
    <Container>
      {coordinates.lat && (
        <LoadScript googleMapsApiKey={MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={20}
          >
            <MarkerF
              position={coordinates}
              icon={{
                // url: "https://gcdnb.pbrd.co/images/a8B831n9dfxr.jpg",
                url: "https://gcdnb.pbrd.co/images/UPbgm8xNJfhS.png",
              }}
            />
          </GoogleMap>
        </LoadScript>
      )}
    </Container>
  );
}

export default TruckMap;
