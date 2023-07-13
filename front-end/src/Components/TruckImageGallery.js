import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TruckImageGallery.scss";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
import { GrReturn } from "react-icons/gr";
import Stars from "./Stars";
import emptyalbum from "../assets/emptyalbum.jpg";
const API = process.env.REACT_APP_API_URL;

function TruckImageGallery(props) {
  const [images, setImages] = useState([]);
  const { truck, closeModal, reviews, ratingsCalc } = props;
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API}/photos/truck/${truck.id}`);
        setImages(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="mt-3">
      <div className="gallerytop">
        <div className="gallerytop__title">
          {truck.name}
          <br />
          <Stars num={ratingsCalc(reviews)} />
        </div>
        <div className="gallerytop__backbutton" onClick={closeModal}>
          <div className="gallerytop__backbutton__text">Back</div>
          <GrReturn size="2em" />
        </div>
      </div>
      {images[0] ? (
        <div className="gallery">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.image_url} alt={image.caption} />
              <div className="truckimageinfo">
                <div className="truckimageinfo__caption">{image.caption}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="emptyalbumctr">
            <img
              src={emptyalbum}
              className="emptyalbumctr__img"
              alt="emptyalbum"
            />
          </div>
          <div className="gallerytop__backbutton__text">No photos yet</div>
        </div>
      )}
    </div>
  );
}

export default TruckImageGallery;
