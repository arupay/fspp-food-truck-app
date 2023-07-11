import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Container } from "react-bootstrap";
// import { Rating } from "@smastrom/react-rating"
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./ReviewForm.scss";

function ReviewForm(props) {
  const { reviewDetails, loggedUser } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);

  const [review, setReview] = useState({
    content: "",
    rating: "",
  });
  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
    const isRatingValid = review.rating >= 1 && review.rating <= 5;
    const isContentValid = review.content.length >= 3;
    if (isRatingValid && isContentValid) {
      setIsValid(false);
    }
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      content: "",
      rating: "",
    });
    setIsValid(true);
  };
  return (
    <Container>
      {loggedUser.email && (
        <div>
          <div className="formcontainer">
            {props.children}
            <Form
              onSubmit={handleSubmit}
              className="formcontainer__newform p-0 position-relative"
            >
              <div className="largegroup">
                <div className="smallgroup pb-3">
                  <div
                    style={{
                      fontSize: ".75em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: "550",
                      letterSpacing: "2px",
                      width: "100%",
                      color: "#444",
                    }}
                  >
                    {loggedUser.username}
                  </div>
                  <span className="round">
                    <img
                      src={`https://robohash.org/${loggedUser.username}.png`}
                      alt="user"
                      width="50"
                    />
                  </span>
                </div>
                <Form.Group className="smallgroup pb-3">
                  {/* <Form.Label>Rating</Form.Label>
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={rating}
                    onChange={setRating}
                  /> */}
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    id="rating"
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    step="1"
                    required
                    value={review.rating}
                    onChange={handleTextChange}
                  />
                </Form.Group>
              </div>
              <Form.Group className="textarea-div">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  id="content"
                  type="text"
                  required
                  name="content"
                  value={review.content}
                  placeholder="What do you think..."
                  onChange={handleTextChange}
                />
              </Form.Group>
              <div className="submit-check"></div>
              <button
                type="submit"
                className={`checkIcon position-absolute bottom-0 end-50`}
                disabled={isValid}
              >
                <AiOutlineCheckCircle
                  size="3em"
                  className={isValid ? "invalidComment" : "validComment"}
                />
              </button>
            </Form>
          </div>
        </div>
      )}
    </Container>
  );
}

export default ReviewForm;
