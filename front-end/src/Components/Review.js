import { useState } from "react";
import ReviewForm from "./ReviewForm";
import Stars from "./Stars";

function Review({ review, handleDelete, handleSubmit, reviewer, loggedUser }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className={viewEditForm ? "container" : "d-flex flex-row comment-row"}>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className="d-flex flex-row comment-row">
          <div className="p-2">
            <span className="round">
              <img
                src={`https://robohash.org/${review.username}.png`}
                alt="user"
                width="75"
              />
            </span>
          </div>
          <div className="comment-text w-100">
            <h5>{review.username}</h5>
            <div className="comment-footer">
              <span className="rating">
                <Stars num={review.rating} />
              </span>
            </div>
            <p className="m-b-5 m-t-10">{review.content}</p>
            {loggedUser.id === reviewer && (
              <div className="protected">
                <button
                  onClick={toggleView}
                  type="button"
                  className="btn btn-warning btn-sm m-1"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm m-1"
                  onClick={() => handleDelete(review.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
