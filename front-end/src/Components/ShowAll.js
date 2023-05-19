import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReviewStars from "./ReviewStars";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
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
                    <Card
                      id="index-card"
                      className="flex-fill background-img-card"
                      style={{
                        backgroundImage: `url(${truck.image_url})`,
                      }}
                      onClick={() => navigate(`/trucks/${truck.id}`)}
                    >
                      <div className="card-img-overlay d-flex flex-column">
                        <Card.Body className="card-text">
                          <Link to={`/trucks/${truck.id}`}></Link>
                          <Card.Title className="truck-title">
                            {truck.name}
                          </Card.Title>
                          <Card.Text tag="div" style={{ fontSize: "16px" }}>
                            <ReviewStars
                              newReviews={filterReviews(reviews, truck.id)}
                            />
                          </Card.Text>
                          <Card.Text tag="div" style={{ fontSize: "13px" }}>
                            {truck.category}
                            <span className="borough-tag">{truck.borough}</span>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                ))
              : trucks
                  .filter((truck) => truck.borough === borough)
                  .map((truck) => (
                    <Col sm={4} key={truck.id}>
                      <Card
                        id="index-card"
                        className="flex-fill background-img-card"
                        style={{
                          backgroundImage: `url(${truck.image_url})`,
                        }}
                        onClick={() => navigate(`/trucks/${truck.id}`)}
                      >
                        <div className="card-img-overlay d-flex flex-column">
                          <Card.Body className="card-text">
                            <Link to={`/trucks/${truck.id}`}></Link>
                            <Card.Title className="truck-title">
                              {truck.name}
                            </Card.Title>
                            <Card.Text tag="div" style={{ fontSize: "16px" }}>
                              <ReviewStars
                                newReviews={filterReviews(reviews, truck.id)}
                              />
                            </Card.Text>
                            <Card.Text tag="div" style={{ fontSize: "13px" }}>
                              {truck.category}
                              <span className="borough-tag">
                                {truck.borough}
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </div>
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
