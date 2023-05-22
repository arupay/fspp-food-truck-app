import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Container, Button } from "react-bootstrap";

const RenderMapFn = ({ trucksCoords }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });
  if (!isLoaded) return;
  <img
    src="https://mintexpresscarwash.com/images/loader-bluegif.gif"
    alt="loading"
  />;

  return <Maps trucksCoords={trucksCoords} />;
};
const containerStyle = {
  width: "auto",
  height: "100dvh",
};

const options = {
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
};
function Maps({ trucksCoords }) {
  const navigate = useNavigate();
  const center = useMemo(() => ({ lat: 40.7118, lng: -74.0131 }), []);

  const [selected, setSelected] = useState(null);
  return (
    <div>
      <span className="index-title">
        <h1 className="index-title-text">interactive map</h1>
      </span>
      <GoogleMap
        options={options}
        mapContainerStyle={containerStyle}
        zoom={12.5}
        center={center}
        mapContainerClassName="w-screen h-screen"
      >
        {trucksCoords.map((e, idx) => {
          return (
            <Marker
              key={idx}
              position={{ lat: e[1].lat, lng: e[1].lng }}
              onClick={() => {
                setSelected(e);
              }}
              title={`${e[0].name}`}
              icon={
                "https://github.com/arupay/fspp-food-truck-app/assets/96318127/381814d5-737e-4857-b67d-b8969b06cae1"
              }
            />
          );
        })}
        {selected !== null ? (
          <InfoWindow
            onCloseClick={() => {
              setSelected(null);
            }}
            position={{ lat: selected[1].lat, lng: selected[1].lng }}
          >
            <div>
              <h3>{selected[0].name}</h3>
              <Link to={`/trucks/${selected[0].id}`}>
                <img src={selected[0].image_url} alt="" width="100" />
                <br />
                More...
              </Link>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default RenderMapFn;
