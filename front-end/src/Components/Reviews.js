import { useState, useEffect } from "react";
import axios from "axios";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { Container } from "react-bootstrap";
import Stars from "./Stars";
const API = process.env.REACT_APP_API_URL;

function Reviews({ id, loggedUser }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/trucks/${id}/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, [id]);

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/trucks/${id}/reviews`, newReview)
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
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
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
        });
        copyReviewArray[indexUpdatedReview] = response.data;
        setReviews(copyReviewArray);
      })
      .catch((c) => console.warn("catch", c));
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

  return (
    <div>
      <span id="truck" className="index-title">
        <h1 id="truck-text" className="index-title-text">
          Reviews <br />
          <Stars num={ratingsCalc(reviews)} />
        </h1>
      </span>

      <ReviewForm handleSubmit={handleAdd}></ReviewForm>

      <Container className="d-flex justify-content-left m1 ">
        <div className="row">
          <div className="col-md-12">
            <div className="comment">
              <h4 className="card-title">Recent Reviews</h4>
              <Stars num={ratingsCalc(reviews)} />
              <h6 className="card-subtitle">
                {ratingsCalc(reviews).toFixed(1)}/ 5.0 (
                {reviews.length !== 1
                  ? `${reviews.length} reviews`
                  : `${reviews.length} review`}{" "}
                )
              </h6>
              <div className="comment-widgets">
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
}

export default Reviews;
