import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

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
    lat: null,
    lng: null,
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
    <div>
      {console.log()}
      <span className="index-title">
        <h1 className="index-title-text">add your truck</h1>
      </span>
      <Container>
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
                placeholder="Mom's Momo"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nearest Address or Cross Streets</Form.Label>
              <Form.Control
                type="text"
                id="address"
                name="address"
                value={truck.address}
                onChange={handleChange}
                placeholder="Roosevelt Ave & 74th St"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="number"
                id="zip"
                name="zip"
                onChange={handleChange}
                placeholder="11377"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Borough</Form.Label>
              <Form.Control
                type="text"
                id="borough"
                name="borough"
                placeholder="Queens"
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
                placeholder="Asian"
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
                placeholder="...foodtruck.jpg"
                value={truck.image_url}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>About / Mission </Form.Label>
              <Form.Control
                type="textarea"
                id="about"
                rows="3"
                name="about"
                value={truck.about}
                onChange={handleChange}
                placeholder="We strive to deliver the best of the Himalayas..."
                required
              />
            </Form.Group>
            <Button variant="outline-danger" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default NewForm;
