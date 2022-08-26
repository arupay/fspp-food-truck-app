import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function ShowAll() {
  const [trucks, setTrucks] = useState([]);
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
    <Container className="mt-4">
      <Row xs={1} md={2} className="Trucks">
        {trucks.map((truck) => (
          <Col key={truck.id}>
            <Link to={`/trucks/${truck.id}`}>
              <Card style={{ width: "300px", height: "300px", margin: "5px" }}>
                <Card.Img variant="top" src={truck.image_url} />
                <Card.Body>
                  <Card.Title>{truck.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShowAll;
