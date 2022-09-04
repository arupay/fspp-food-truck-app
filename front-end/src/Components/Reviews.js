import { useState, useEffect } from "react";
import axios from "axios";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
const API = process.env.REACT_APP_API_URL;

function Reviews({ id }) {
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
  console.log(reviews[0]);
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

  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          handleSubmit={handleEdit}
        />
      ))}
    </section>
  );
}

export default Reviews;
