import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import TruckMap from "../Components/TruckMap";
import Reviews from "./Reviews";
import "./ShowOne.scss";
import { FiEdit2 } from "react-icons/fi";
import {
  AiOutlineDelete,
  AiOutlineComment,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import ImageUpload from "../Pages/ImageUpload";
import TruckImageGallery from "./TruckImageGallery";
import { toast } from "react-toastify";
import Modal from "react-modal";
const API = process.env.REACT_APP_API_URL;

function ShowOne({ loggedUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const reviewRef = useRef(null);
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
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
    axios
      .get(`${API}/trucks/${id}/reviews`)
      .then((res) => {
        let sorted = res.data.sort(
          (a, b) => new Date(b.created_on) - new Date(a.created_on)
        );
        setReviews(sorted);
      })
      .catch((err) => {
        return err;
      });
  }, [id, navigate, loggedUser]);

  const handleReviewScroll = () => {
    const reviewElement = reviewRef.current;
    if (reviewElement) {
      const y =
        reviewElement.getBoundingClientRect().top + window.pageYOffset - 145;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const ratingsCalc = (reviews) => {
    const avg =
      reviews.reduce((r, { rating }) => r + Number(rating), 0) / reviews.length;
    let roundedDown = Math.floor(avg);
    if (isNaN(avg)) {
      return 0;
    }
    if (avg - roundedDown < 0.5) {
      return roundedDown;
    }
    return roundedDown + 0.5;
  };
  //GALLERY MODAL LOGIC
  Modal.setAppElement("#root");
  function openGalleryModal() {
    document.body.style.overflow = "hidden"; // Disable scroll
    setIsGalleryOpen(true);
  }
  function afterOpenModal() {}
  function closeGalleryModal() {
    document.body.style.overflow = "visible"; // Disable scroll
    setIsGalleryOpen(false);
  }
  const modalStyles = {
    overlay: {
      position: "fixed",
      zIndex: 1020,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(50, 50, 50, .9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      background: "white",
      width: "50rem",
      maxWidth: "calc(100vw)",
      maxHeight: "calc(100vh)",
      overflowY: "auto",
      position: "relative",
      border: "1px solid #ccc",
      borderRadius: "1rem",
    },
  };

  //File Upload MODAL LOGIC

  const handleFileUploadOpenModal = () => {
    if (loggedUser && loggedUser.id) {
      setIsFileUploadModalOpen(true);
    } else {
      toast.info("You must sign up or log in to add photos", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/login");
    }
  };

  const handleCloseFileUploadModal = () => {
    setIsFileUploadModalOpen(false);
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
        <div className="aboutThisTruck__imgctr position-relative">
          <img
            alt="truck"
            src={truck.image_url}
            className="aboutThisTruck__imgctr aboutThisTruck__imgctr__imgAttr"
          />
          <div className="gallery-modal-button" onClick={openGalleryModal}>
            <BsImages size="2em" /> Photos
          </div>
        </div>
        <div className="aboutThisTruck__right d-flex flex-column justify-content-between align-items-center">
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
            className="gradient-line aboutThisTruck-gradient-line"
            id="truck-line"
          ></div>
          <div className="aboutThisTruck__cuisineType">{truck.category}</div>
          <div className="aboutThisTruck__address">
            {truck.address} {truck.borough}, NY, {truck.zip}
          </div>
          <div className="aboutThisTruck__about">{truck.about}</div>
          <div className="d-flex justify-content-around w-100  truck_icons">
            {loggedUser.id === truck.added_by && (
              <div className="truck-icon">
                <FiEdit2
                  title="edit"
                  size="2em"
                  onClick={() => navigate(`/trucks/${id}/edit`)}
                />
                Edit
              </div>
            )}
            {loggedUser.id === truck.added_by && (
              <div className="truck-icon">
                <AiOutlineDelete size="2em" onClick={handleDelete} />
                Delete
              </div>
            )}

            <div className="truck-icon">
              <AiOutlineComment size="2em" onClick={handleReviewScroll} />
              Comment
            </div>
            <div className="truck-icon">
              <AiOutlineCloudUpload
                size="2em"
                onClick={handleFileUploadOpenModal}
              />
              Upload Photo
            </div>
          </div>
        </div>
      </Container>
      <span id="truck" className="index-title">
        <h1 id="truck-text" className="index-title-text">
          {truck.address}, {truck.borough}, NY, {truck.zip}
        </h1>
      </span>
      {truck.id && <TruckMap latitude={truck.lat} longitude={truck.lng} />}
      {/**GALLERY MODAL */}
      <Reviews
        ref={reviewRef}
        id={id}
        loggedUser={loggedUser}
        reviews={reviews}
        setReviews={setReviews}
        ratingsCalc={ratingsCalc}
      />
      <Modal
        isOpen={isGalleryOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeGalleryModal}
        className={`shadow p-4`}
        style={modalStyles}
      >
        <TruckImageGallery
          closeModal={closeGalleryModal}
          truck={truck}
          ratingsCalc={ratingsCalc}
          reviews={reviews}
        />

        {/**PHOTO UPLOAD MODAL */}
      </Modal>
      <Modal
        isOpen={isFileUploadModalOpen}
        onRequestClose={handleCloseFileUploadModal}
        style={modalStyles}
      >
        <ImageUpload userId={loggedUser.id} truckId={id} />
      </Modal>
    </div>
  );
}

export default ShowOne;
