import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function ReviewForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    content: "",
    rating: "",
    trucks_id: id,
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
      reviewer: "",
      content: "",
      rating: "",
      trucks_id: id,
    });
  };
  return (
    <div className="Edit">
      {props.children}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="reviewer"
            value={review.reviewer}
            type="text"
            onChange={handleTextChange}
            placeholder="Your name"
            required
          />
        </Form.Group>
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
  );
}

export default ReviewForm;
