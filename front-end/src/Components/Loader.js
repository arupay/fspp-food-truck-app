import React from "react";
import { Container } from "react-bootstrap";

function Loader(props) {
  return (
    <Container className="trucks-index text-center">
      <img
        src="https://mintexpresscarwash.com/images/loader-bluegif.gif"
        alt=""
        style={{ paddingTop: "200px" }}
      />
    </Container>
  );
}

export default Loader;
