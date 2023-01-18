import { Container } from "react-bootstrap";
import truckstop from "../assets/truckstop.gif";

function Home() {
  return (
    <div>
      <span className="index-title">
        <h1 className="index-title-text">NYC's best food trucks</h1>
      </span>
      <Container className="homepage">
        <img src={truckstop} alt="" width="80%" />
        <br />
      </Container>
    </div>
  );
}
export default Home;
