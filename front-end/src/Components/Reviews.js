import { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Stars from "./Stars";
const API = process.env.REACT_APP_API_URL;

const Reviews = forwardRef((props, ref) => {
  const { id, loggedUser, reviews, setReviews, ratingsCalc } = props;

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/trucks/${id}/reviews`, {
        reviewer: loggedUser.id,
        ...newReview,
      })
      .then((res) => {
        toast.success("Review added successfully");
        let sorted = res.data.sort(
          (a, b) => new Date(b.created_on) - new Date(a.created_on)
        );
        setReviews(sorted);
        window.scrollTo(0, document.body.scrollHeight);
      })
      .catch((c) => {
        toast.error("Failed to add review, please try again later.");
        console.log(c);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`${API}/trucks/${id}/reviews/${id}`)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === id;
          });
          copyReviewArray.splice(indexDeletedReview, 1);
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };
  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/trucks/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then((res) => {
        let sorted = res.data.sort(
          (a, b) => new Date(b.created_on) - new Date(a.created_on)
        );
        setReviews(sorted);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div ref={ref}>
      <span id="truck" className="index-title">
        <h1 id="truck-text" className="index-title-text">
          Reviews <br />
          <Stars num={ratingsCalc(reviews)} />
        </h1>
      </span>
      {/**THIS IS REVIEW FORM  */}

      <ReviewForm loggedUser={loggedUser} handleSubmit={handleAdd}></ReviewForm>

      <Container className="d-flex justify-content-left mb-3">
        <div className="row w-100">
          <div className="col-md-12">
            <div className="comment">
              <h5 className="card-title mt-3">Recent reviews</h5>
              <Stars num={ratingsCalc(reviews)} />
              <h6 className="card-subtitle">
                {ratingsCalc(reviews).toFixed(1)} out of 5.0{" "}
                <span className="text-muted small">
                  (
                  {reviews.length !== 1
                    ? `${reviews.length} reviews`
                    : `${reviews.length} review`}
                  )
                </span>
              </h6>
              <div className="comment-widgets">
                {/**THIS IS REVIEWS MAPPED */}
                {reviews.map((review, idx) => (
                  <Review
                    idx={idx}
                    reviewer={review.reviewer}
                    key={review.id}
                    review={review}
                    handleDelete={handleDelete}
                    handleSubmit={handleEdit}
                    loggedUser={loggedUser}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
});

export default Reviews;
