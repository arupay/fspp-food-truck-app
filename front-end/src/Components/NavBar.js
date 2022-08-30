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
            width="100"
            src="https://gcdnb.pbrd.co/images/5nqKv9Uw1PsE.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title="Trucks">
              <NavDropdown.Item href="/trucks">All Trucks</NavDropdown.Item>
              {borough.map((e, idx) => {
                return (
                  <NavDropdown.Item href={`/trucks?borough=${e}`} key={idx}>
                    {e}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link href="/trucks/new">New Truck</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/signin">Login/Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
