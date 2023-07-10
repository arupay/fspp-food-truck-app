import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

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

function shortenString(str) {
  return str.length <= 60 ? str : str.slice(0, 60) + "...";
}

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
            <div onClick={() => navigate(`/trucks/${selected[0].id}`)}>
              <div
                style={{
                  fontSize: "15px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {selected[0].name}
              </div>
              <img src={selected[0].image_url} alt="" width="125" />
              <div style={{ fontSize: "10px", marginTop: "7px" }}>
                {shortenString(selected[0].about)}
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default RenderMapFn;
