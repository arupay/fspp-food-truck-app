import { useState } from "react";
import ReviewForm from "./ReviewForm";
import Stars from "./Stars";

function Review({ review, handleDelete, handleSubmit, loggedUser }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className={viewEditForm ? "container" : "d-flex flex-row comment-row"}>
      {/**THIS TOGGABLE EDIT FORM */}
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
          loggedUser={loggedUser}
        />
      ) : (
        <div className="d-flex flex-row comment-row">
          {/**THIS IS INDIVIDUAL CSS REVIEW  */}

          <div className="p-2">
            <span className="round">
              <img
                src={`https://robohash.org/${review.username}.png`}
                alt="user"
                width="75"
              />
            </span>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "800",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {review.username}
            </div>
          </div>
          <div className="comment-text w-100">
            <div className="comment-footer">
              <span className="rating">
                <Stars num={review.rating} />
              </span>
            </div>
            <p className="m-b-5 m-t-10">{review.content}</p>
            {loggedUser.id === review.reviewer && (
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
