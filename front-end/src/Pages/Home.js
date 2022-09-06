import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <span className="index-title">
        <h1 className="index-title-text">NYC's best food trucks</h1>
      </span>
      <Container className="homepage">
        <img
          // src="https://i.pinimg.com/originals/39/f1/d0/39f1d0a2707646b575cdba91d34f41a5.gif
          // "
          src="https://s1.gifyu.com/images/ezgif.com-gif-maker55c41b8f9baa3b98.gif"
          alt=""
          width="80%"
          style={{ marginTop: "100px" }}
        />
        <br />
      </Container>
    </div>
  );
}
export default Home;
