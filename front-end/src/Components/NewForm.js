import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";

function NewForm() {
  const navigate = useNavigate();
  const [truck, setTruck] = useState({
    name: "",
    address: "",
    zip: "",
    borough: "",
    category: "",
    image_url: "",
    about: "",
  });

  const handleChange = (e) => {
    setTruck({ ...truck, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/trucks/new`, truck)
      .then(() => {
        navigate(`/trucks`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <h3>Add A Truck</h3>
      <div style={{ display: "block", padding: 30 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={truck.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              type="text"
              id="address"
              name="address"
              value={truck.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="number"
              id="zip"
              name="zip"
              value={truck.zip}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Borough</Form.Label>
            <Form.Control
              type="text"
              id="borough"
              name="borough"
              value={truck.borough}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="category"
              id="category"
              name="category"
              value={truck.category}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link an Image</Form.Label>
            <Form.Control
              type="text"
              id="image_url"
              name="image_url"
              value={truck.image_url}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>About</Form.Label>
            <Form.Control
              type="textarea"
              id="about"
              name="about"
              value={truck.about}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="outline-danger" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default NewForm;
