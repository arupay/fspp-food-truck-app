import { useState } from "react";
import ReviewForm from "./ReviewForm";
import Stars from "./Stars";
import { useNavigate } from "react-router-dom";

import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

function Review({ review, handleDelete, handleSubmit, loggedUser }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const navigate = useNavigate();
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };
  function getHumanReadableDate(timeString) {
    const date = new Date(timeString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const humanReadableDate = date.toLocaleDateString("en-US", options);
    return humanReadableDate;
  }
  return (
    <div>
      {/**THIS TOGGABLE EDIT FORM */}
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
          loggedUser={loggedUser}
        />
      ) : (
        <div className="d-flex flex-row comment-row position-relative">
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
            <div className="text-muted small pb-2">
              {" "}
              {review.created_on && getHumanReadableDate(review.created_on)}
            </div>
            <p className="m-b-5 m-t-10 ">{review.content}</p>
            {loggedUser.id === review.reviewer && (
              <div className="protected position-absolute end-0 bottom-0">
                <FiEdit2
                  className="truck-icons mx-3 "
                  size="1.5em"
                  onClick={toggleView}
                />
                <AiOutlineDelete
                  className="truck-icons mx-3 "
                  size="1.5em"
                  onClick={() => handleDelete(review.id)}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
