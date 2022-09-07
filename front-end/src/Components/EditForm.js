import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;
const boroughs = require("../Components/boroughs");

function EditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    axios.get(`${API}/trucks/${id}`).then((res) => {
      console.log(res);
      setTruck(res.data.payload);
    });
  }, [id]);

  const handleChange = (e) => {
    setTruck({ ...truck, [e.target.id]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/trucks/${id}`, truck)
      .then(() => {
        navigate(`/trucks`);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(truck);
  };

  return (
    <Container>
      {console.log(truck)}
      <h3>Edit Your Truck</h3>
      <div style={{ display: "block", padding: 30 }}>
        <Form onSubmit={handleEdit}>
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
              value={truck.zip}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Borough</Form.Label>
            <Form.Control
              as="select"
              value={truck.borough}
              id="borough"
              name="borough"
              onChange={handleChange}
              required
            >
              <option value={null}></option>
              {boroughs.map((borough, idx) => {
                return (
                  <option key={idx} value={borough}>
                    {borough}
                  </option>
                );
              })}
            </Form.Control>
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
              id="about"
              as="textarea"
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
  );
}

export default EditForm;
