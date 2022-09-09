import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReviewStars from "./ReviewStars";

const API = process.env.REACT_APP_API_URL;

function ShowAll() {
  const [trucks, setTrucks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchParams] = useSearchParams();
  const borough = searchParams.get("borough");

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`${API}/trucks`);
      const reviews = await axios.get(`${API}/trucks/all/reviews`);
      setTrucks(data.payload);
      setReviews(reviews.data);
    };
    fetching();
  }, [setTrucks, setReviews]);

  const filterReviews = (reviews, truckId) => {
    const x = reviews.filter((review) => {
      return review.trucks_id === truckId;
    });
    return x;
  };

  return (
    <section>
      {borough === null ? (
        <span className="index-title">
          <h1 className="index-title-text">our food trucks</h1>
        </span>
      ) : (
        <span className="index-title">
          <h1 className="index-title-text">trucks in {borough}</h1>
        </span>
      )}
      {trucks.length ? (
        <Container className="trucks-index ">
          <Row className="row-cols-sm1 row-cols-md4">
            {borough === null
              ? trucks.map((truck) => (
                  <Col sm={4} key={truck.id}>
                    <Card id="index-card" className="flex-fill mt-2">
                      <Link to={`/trucks/${truck.id}`}>
                        <Card.Img variant="top" src={truck.image_url} />
                      </Link>

                      <Card.Body>
                        <Card.Title className="truck-title">
                          {truck.name}
                        </Card.Title>
                        <Card.Text tag="div" style={{ fontSize: "11px" }}>
                          <ReviewStars
                            newReviews={filterReviews(reviews, truck.id)}
                          />
                        </Card.Text>
                        <Card.Text tag="div" style={{ fontSize: "11px" }}>
                          {truck.category}

                          <span className="borough-tag">{truck.borough}</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : trucks
                  .filter((truck) => truck.borough === borough)
                  .map((truck) => (
                    <Col sm={4} key={truck.id}>
                      <Card id="index-card" className="flex-fill mt-2">
                        <Link to={`/trucks/${truck.id}`}>
                          <Card.Img variant="top" src={truck.image_url} />
                        </Link>
                        <Card.Body>
                          <Card.Title className="truck-title">
                            {truck.name}
                          </Card.Title>
                          <Card.Text tag="div" style={{ fontSize: "11px" }}>
                            <ReviewStars
                              newReviews={filterReviews(reviews, truck.id)}
                            />
                          </Card.Text>
                          <Card.Text tag="div" style={{ fontSize: "11px" }}>
                            {truck.category}

                            <span className="borough-tag">
                              {" "}
                              {truck.borough}
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
          </Row>
        </Container>
      ) : (
        <Container className="trucks-index ">
          <img
            src="https://mintexpresscarwash.com/images/loader-bluegif.gif"
            alt=""
            style={{ paddingTop: "200px" }}
          />
        </Container>
      )}
    </section>
  );
}

export default ShowAll;
