import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function ShowAll() {
  const [trucks, setTrucks] = useState([]);
  const [searchParams] = useSearchParams();
  const borough = searchParams.get("borough");
  console.log(borough);
  useEffect(() => {
    axios
      .get(`${API}/trucks`)
      .then((res) => {
        setTrucks(res.data.payload);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <Container className="trucks-index ">
      {borough === null ? <h2> All Trucks</h2> : <h2> {borough} Trucks</h2>}
      <Row className="row-cols-sm1 row-cols-md4">
        {borough === null
          ? trucks.map((truck) => (
              <Col sm={4} key={truck.id}>
                <Card className="truck-card flex-fill mt-2">
                  <Link to={`/trucks/${truck.id}`}>
                    <Card.Img variant="top" src={truck.image_url} />{" "}
                  </Link>
                  <Card.Body>
                    <Card.Title className="truck-title">
                      {truck.name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "11px" }}>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star-half-full"></span>
                      <span className="fa fa-star"></span>
                      <span id="reviews">3 Reviews</span>
                    </Card.Text>
                    <Card.Text style={{ fontSize: "11px" }}>
                      {truck.category}
                      <span className="borough-tag"> {truck.borough}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : trucks
              .filter((truck) => truck.borough === borough)
              .map((truck) => (
                <Col sm={4} key={truck.id}>
                  <Card className="flex-fill mt-2">
                    <Link to={`/trucks/${truck.id}`}>
                      <Card.Img variant="top" src={truck.image_url} />{" "}
                    </Link>
                    <Card.Body>
                      <Card.Title>{truck.name}</Card.Title>
                      <Card.Text style={{ fontSize: "10px" }}>
                        {truck.category}
                        <span className="borough-tag"> {truck.borough}}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
      </Row>
    </Container>
  );
}

export default ShowAll;
