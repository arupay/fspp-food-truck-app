import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
// import { Rating } from "@smastrom/react-rating";
import "./ReviewForm.scss";

function ReviewForm(props) {
  const { reviewDetails, loggedUser } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({
    content: "",
    rating: 0,
  });
  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
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
  };
  return (
    <Container>
      {loggedUser.email ? (
        <div>
          <div className="formcontainer">
            {props.children}
            <Form
              onSubmit={handleSubmit}
              className="formcontainer__newform p-0"
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
                    min="0"
                    max="5"
                    step="1"
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
                  name="content"
                  value={review.content}
                  placeholder="What do you think..."
                  onChange={handleTextChange}
                />
              </Form.Group>
              <Button variant="outline-danger" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <div className="logInOverLay">
          <span onClick={() => navigate(`/login`)}>
            Login To Leave A Review
          </span>
        </div>
      )}
    </Container>
  );
}

export default ReviewForm;
