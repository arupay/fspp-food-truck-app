import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import TruckMap from "./TruckMap";
const API = process.env.REACT_APP_API_URL;

function ShowOne() {
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
        return err;
      });
  }, [id]);

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
    <Container className="text-center">
      <h3>{truck.name}</h3>
      <div>
        <img src={truck.image_url} alt={truck.name} className="img-fluid" />
        <p>
          <em>{truck.about}</em>
        </p>
        <p>
          Location: {truck.address}, {truck.borough} NY, {truck.zip}
        </p>
        <Link to="/trucks">
          <Button variant="outline-danger">Back</Button>
        </Link>{" "}
        <Link to={`/trucks/${id}/edit`}>
          <Button variant="outline-danger">Edit</Button>
        </Link>{" "}
        <Button variant="outline-danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
      {/* {truck.id && <TruckMap address={truck.address} borough={truck.borough} />} */}
    </Container>
  );
}

export default ShowOne;
