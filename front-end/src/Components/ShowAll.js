import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Card, Row } from "react-bootstrap";
import ReviewStars from "./ReviewStars";
import { useNavigate } from "react-router";
import "./ShowAll.scss";

const API = process.env.REACT_APP_API_URL;

function ShowAll() {
  const [trucks, setTrucks] = useState([]);
  const [searchParams] = useSearchParams();
  const borough = searchParams.get("borough");

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`${API}/trucks`);
      setTrucks(data.payload);
    };
    fetching();
  }, [setTrucks]);
  const navigate = useNavigate();

  const renderTitle = () => {
    if (borough === null) {
      return <h1 className="index-title-text">local trucks</h1>;
    } else {
      return <h1 className="index-title-text">trucks in {borough}</h1>;
    }
  };

  const filteredTrucks =
    borough === null
      ? trucks
      : trucks.filter((truck) => truck.borough === borough);

  return (
    <section>
      <span className="index-title">{renderTitle()}</span>
      {trucks.length ? (
        <Container className="truckindex mt-4">
          <Row>
            {filteredTrucks.map((truck, i) => (
              <div className="sm-12 col-md-6 col-lg-4 mb-3" key={i}>
                <Card
                  className="backgroundimg"
                  style={{
                    backgroundImage: `url(${truck.image_url})`,
                  }}
                  onClick={() => navigate(`/trucks/${truck.id}`)}
                >
                  <div className="card-img-overlay">
                    <Card.Body>
                      <Link to={`/trucks/${truck.id}`}></Link>
                      <Card.Title className="backgroundimg__trucktitle">
                        {truck.name}
                      </Card.Title>
                      <Card.Text tag="div" style={{ fontSize: "16px" }}>
                        <ReviewStars
                          average_score={truck.average_score}
                          total_reviews={truck.total_reviews}
                        />
                      </Card.Text>
                      <Card.Text tag="div" style={{ fontSize: "13px" }}>
                        {truck.category}
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <span className="borough-tag">{truck.borough}</span>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      ) : (
        <Container className="trucks-index text-center">
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
