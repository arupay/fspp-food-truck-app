import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "./NewForm.scss";
import addtruckimg from "../assets/addtruck2.jpg";

const API = process.env.REACT_APP_API_URL;
const boroughs = require("../Components/boroughs");
function NewForm({ loggedUser }) {
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
      .post(`${API}/trucks/new`, { ...truck, added_by: loggedUser.id })
      .then(() => {
        toast.success("Truck added successfully!");
        setTimeout(() => {
          navigate("/trucks");
        }, 2000);
      })
      .catch((e) => {
        toast.error("Failed to add the truck. Please try again.");
        console.log(e);
      });
  };

  return (
    <div>
      <span className="index-title">
        <h1 className="index-title-text">add your truck</h1>
      </span>
      <div className="container">
        <div className="formcontainer">
          <Form
            onSubmit={handleSubmit}
            className="addtruckform formcontainer__newform"
          >
            <div className="largegroup">
              <Form.Group className="smallgroup">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  value={truck.name}
                  onChange={handleChange}
                  placeholder="Truck Name"
                  required
                />
              </Form.Group>
              <Form.Group className="smallgroup">
                <Form.Label>Nearest Address or Cross Streets</Form.Label>
                <Form.Control
                  type="text"
                  id="address"
                  name="address"
                  value={truck.address}
                  onChange={handleChange}
                  placeholder="Street Address Or Cross Street"
                />
              </Form.Group>
              <Form.Group className="smallgroup">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="number"
                  id="zip"
                  name="zip"
                  onChange={handleChange}
                  placeholder="Zip Code"
                  required
                />
              </Form.Group>

              <Form.Group className="smallgroup">
                <Form.Label>Borough</Form.Label>
                <Form.Control
                  as="select"
                  value={truck.borough}
                  id="borough"
                  name="NYC Borough"
                  onChange={handleChange}
                  required
                >
                  <option value={null}> Choose A Borough...</option>
                  {boroughs.map((borough, idx) => {
                    return (
                      <option key={idx} value={borough}>
                        {borough}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group className="smallgroup">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="category"
                  id="category"
                  name="category"
                  placeholder="Cuisine Type"
                  value={truck.category}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="smallgroup">
                <Form.Label>Link an Image</Form.Label>
                <Form.Control
                  type="text"
                  id="image_url"
                  name="image_url"
                  placeholder="..imageurl.jpg"
                  value={truck.image_url}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="textarea-div">
                <Form.Label>About / Mission </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="6"
                  id="about"
                  name="about"
                  value={truck.about}
                  onChange={handleChange}
                  placeholder="About the vendor..."
                  required
                />
              </Form.Group>
              <div className="text-center m-auto">
                <button type="submit" className="newtrucksubmit">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewForm;
