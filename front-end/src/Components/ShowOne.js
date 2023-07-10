import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import TruckMap from "../Components/TruckMap";
import Reviews from "./Reviews";
import "./ShowOne.scss";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineComment } from "react-icons/ai";
import { MdOutlineAddAPhoto } from "react-icons/md";

const API = process.env.REACT_APP_API_URL;

function ShowOne({ loggedUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const reviewRef = useRef(null);

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
  const handleReviewScroll = () => {
    const reviewElement = reviewRef.current;
    if (reviewElement) {
      const y =
        reviewElement.getBoundingClientRect().top + window.pageYOffset - 145;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
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
      <Container className="aboutThisTruck my-3 ">
        <div className="aboutThisTruck__imgctr d-flex">
          <img
            alt="truck"
            src={truck.image_url}
            className="aboutThisTruck__imgctr__imgAttr"
          />
        </div>
        <div className="aboutThisTruck__right d-flex flex-column justify-content-center align-items-center">
          <div className="pt-2 aboutThisTruck__rightimage">
            <img
              className="addedbyimg"
              src={`https://robohash.org/${truck.added_by_username}.png`}
              alt="user"
            />
            <div className="aboutThisTruck__addedBy">
              {truck.added_by_username}
            </div>
          </div>
          <div
            className="gradient-line aboutThisTruck__gradient-line"
            id="truck-line"
          ></div>
          <div className="aboutThisTruck__cuisineType">{truck.category}</div>
          <div className="aboutThisTruck__address">
            {truck.address} {truck.borough}, NY, {truck.zip}
          </div>
          <div className="aboutThisTruck__about">{truck.about}</div>
          <div className="d-flex justify-content-around w-100 my-2 aboutThisTruck__icons">
            {loggedUser.id === truck.added_by && (
              <>
                <FiEdit2
                  className="truck-icons"
                  size="2em"
                  onClick={() => navigate(`/trucks/${id}/edit`)}
                />
                <AiOutlineDelete
                  className="truck-icons"
                  size="2em"
                  onClick={handleDelete}
                />
              </>
            )}
            <AiOutlineComment
              size="2em"
              className="truck-icons"
              onClick={handleReviewScroll}
            />
            <MdOutlineAddAPhoto className="truck-icons" size="2em" />
          </div>
        </div>
      </Container>
      <span id="truck" className="index-title">
        <h1 id="truck-text" className="index-title-text">
          {truck.address}, {truck.borough}, NY, {truck.zip}
        </h1>
      </span>
      {truck.id && <TruckMap latitude={truck.lat} longitude={truck.lng} />}

      <Reviews ref={reviewRef} id={id} loggedUser={loggedUser} />
    </div>
  );
}

export default ShowOne;
