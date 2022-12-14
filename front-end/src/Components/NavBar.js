import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const borough = require("./boroughs");
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
          <img
            width="150"
            src="https://gcdnb.pbrd.co/images/n6OGseS8H1Wl.png"
            alt=""
          />
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
              Find A Truck
            </Nav.Link>
            <Nav.Link className="nav-text" href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
