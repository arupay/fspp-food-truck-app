import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import transparentlogo from "../assets/transparentlogo.png";

function NavBar() {
  const { user, logout } = useAuth();
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
        <Navbar.Brand mb-0="true" h1="true" className="d-inline-block" href="/">
          <img width="150" src={transparentlogo} alt="" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown className="nav-text" title="The Truck Stop">
              <NavDropdown.Item href="/trucks">All Trucks</NavDropdown.Item>
              {borough.map((e, idx) => {
                return (
                  <NavDropdown.Item href={`/trucks?borough=${e}`} key={idx}>
                    {e}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link className="nav-text" href="/trucks/new">
              Add Truck
            </Nav.Link>
            <Nav.Link className="nav-text" href="/map">
              Map
            </Nav.Link>
            <Nav.Link className="nav-text" href="/about">
              About
            </Nav.Link>
            <Nav.Link
              className="nav-text"
              href="/login"
              onClick={() => handleLogOut()}
            >
              {user?.email ? "sign out" : "sign in"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
