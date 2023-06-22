import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

function ReviewForm(props) {
  const { reviewDetails, loggedUser } = props;
  const { id } = useParams();
  const [review, setReview] = useState({
    content: "",
    rating: "",
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
          <h3>Add Review</h3>
          <div className="Edit">
            {props.children}
            <Form onSubmit={handleSubmit} id="addreview">
              <Form.Group>
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

              <Form.Group>
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
        <div
          className="logInOverLay"
          style={{
            margin: "10px 0",
            width: "100%",
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgrey",
          }}
        >
          Login/Sign Up To Leave A Review
        </div>
      )}
    </Container>
  );
}

export default ReviewForm;
