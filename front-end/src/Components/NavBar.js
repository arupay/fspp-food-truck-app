import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import transparentlogo from "../assets/transparentlogo.png";
import { useAuth } from "../context/AuthContext";

function NavBar({ loggedUser }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const borough = require("./boroughs");
  const handleLogOut = () => {
    toast.success("logged out succesfully");
    logout();
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      sticky="top"
      expand="md"
      collapseOnSelect
    >
      <Container>
        <Navbar.Toggle />
        <Navbar.Brand
          mb-0="true"
          h1="true"
          className="d-inline-block"
          onClick={() => navigate(`/`)}
        >
          <img width="150" src={transparentlogo} alt="" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown className="nav-text" title="The Truck Stop">
              <NavDropdown.Item onClick={() => navigate(`/trucks`)}>
                All Trucks
              </NavDropdown.Item>
              {borough.map((e, idx) => {
                return (
                  <NavDropdown.Item
                    onClick={() => navigate(`/trucks?borough=${e}`)}
                    key={idx}
                  >
                    {e}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link
              id="test_addTruck"
              className="nav-text"
              onClick={() => navigate(`/trucks/new`)}
            >
              Add Truck
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => navigate(`/map`)}>
              Map
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => navigate(`/about`)}>
              About
            </Nav.Link>
            <Nav.Link
              id="login"
              className="nav-text"
              href="/login"
              onClick={() => handleLogOut()}
            >
              {loggedUser.email ? "sign out" : "log in"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
