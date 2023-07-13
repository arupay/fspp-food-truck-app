import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Card, Row } from "react-bootstrap";
import ReviewStars from "./ReviewStars";
import { useNavigate } from "react-router";
import "./ShowAll.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";

const API = process.env.REACT_APP_API_URL;

function ShowAll({ loggedUser }) {
  const [trucks, setTrucks] = useState([]);
  const [faveList, setFaveList] = useState([]);
  const [searchParams] = useSearchParams();
  const borough = searchParams.get("borough");
  const fetchFavoriteTrucks = useCallback(async () => {
    if (loggedUser && loggedUser.id) {
      try {
        const { data } = await axios.get(`${API}/favorite/${loggedUser.id}`);
        setFaveList(data.payload);
      } catch (error) {
        console.log(error); // Handle the error or display an error message
      }
    }
  }, [loggedUser]);
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`${API}/trucks`);
      setTrucks(data.payload);
      fetchFavoriteTrucks();
    };
    fetching();
  }, [setTrucks, loggedUser, fetchFavoriteTrucks]);

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

  const handleIconClick = (event, truckId) => {
    // Prevent event propagation to the card
    event.stopPropagation();
    if (loggedUser && loggedUser.id) {
      axios
        .post(`${API}/favorite`, {
          user_id: loggedUser.id,
          truck_id: truckId,
        })
        .then((response) => {
          if (response.data.payload === null) {
            toast.warning("Truck removed from favorites", { autoClose: 1000 }); // Show for 1 second
          } else {
            toast.info("Truck added to favorites", { autoClose: 1000 }); // Show for 1 second
          }
          fetchFavoriteTrucks(); // Fetch favorite trucks after the API request is completed
        })
        .catch((error) => {
          console.log("we are here");
          // Handle the error if needed
        });
    } else {
      toast.info("You must log in or sign up to favorite a truck", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/login");
    }
  };
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
                >
                  <div
                    className="card-img-overlay"
                    onClick={() => navigate(`/trucks/${truck.id}`)}
                  >
                    <Card.Body>
                      <Card.Title className="backgroundimg__trucktitle">
                        {truck.name}
                      </Card.Title>
                      <Card.Text tag="div" style={{ fontSize: "16px" }}>
                        <ReviewStars
                          average_score={truck.average_score}
                          total_reviews={truck.total_reviews}
                        />
                      </Card.Text>
                      <Card.Text tag="div" style={{ fontSize: "15px" }}>
                        {truck.category}
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div
                    className={`hearticon ${
                      faveList.length > 0 &&
                      faveList.find(
                        (favorite) => parseInt(favorite.truck_id) === truck.id
                      )
                        ? "bounce"
                        : ""
                    }`}
                    onClick={(event) => handleIconClick(event, truck.id)}
                  >
                    {faveList.length > 0 &&
                    faveList.find(
                      (favorite) => parseInt(favorite.truck_id) === truck.id
                    ) ? (
                      <AiFillHeart size="2em" color="crimson" />
                    ) : (
                      <AiOutlineHeart size="2em" color="grey" />
                    )}
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
