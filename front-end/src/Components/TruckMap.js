import GoogleMaps from "simple-react-google-maps";
import { Container } from "react-bootstrap";
const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

function TruckMap({ latitude, longitude }) {
  const coordinates = { lat: Number(latitude), lng: Number(longitude) };

  return (
    <Container className="mt-1 mb-1">
      {typeof coordinates.lat === "number" && (
        <GoogleMaps
          apiKey={MAP_API_KEY}
          style={{ height: "400px", width: "100%" }}
          zoom={15}
          center={coordinates}
          markers={coordinates} //optional
        />
      )}
    </Container>
  );
}

export default TruckMap;
