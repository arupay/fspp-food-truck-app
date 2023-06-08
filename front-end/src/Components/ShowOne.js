import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import TruckMap from "../Components/TruckMap";
import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function ShowOne({ loggedUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [truck, setTruck] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/trucks/${id}`)
      .then((res) => {
        setTruck(res.data.payload);
      })
      .catch((err) => {
        navigate("/not-found");
      });
  }, [id, navigate]);

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${API}/trucks/${id}`, truck)
      .then(() => {
        navigate(`/trucks`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <span id="truck" className="index-title">
        <h1 id="truck-text" className="index-title-text">
          {truck.name}
        </h1>
      </span>
      <Container className="text-center">
        <div>
          <img src={truck.image_url} alt={truck.name} className="img-fluid" />

          <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.08)",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center h-100 "
              style={{ width: "60%", margin: "auto" }}
            >
              <div className="text-black align-items-center ">
                <div className="p-2"></div>
                <h3
                  style={{
                    color: "#000000",
                    fontSize: "14px",
                    fontFamily: "'Crete Round',sans-serif",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    letterSpacing: "1px",
                  }}
                >
                  {truck.category}
                </h3>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "23px",
                  }}
                >
                  {truck.about}
                </div>
                {loggedUser.id === truck.added_by && (
                  <div>
                    <a
                      className="btn btn-outline-dark btn-sm m-1"
                      href={`/trucks/${id}/edit`}
                      role="button"
                    >
                      Edit Truck
                    </a>
                    <a
                      className="btn btn-outline-dark btn-sm m-1"
                      href="/trucks"
                      role="button"
                      onClick={handleDelete}
                    >
                      Delete Truck
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <span id="truck" className="index-title">
        <h1 id="truck-text" className="index-title-text">
          {truck.address} {truck.borough}, NY, {truck.zip}
        </h1>
      </span>
      {truck.id && <TruckMap latitude={truck.lat} longitude={truck.lng} />}
      <Reviews id={id} loggedUser={loggedUser} />
    </div>
  );
}

export default ShowOne;
