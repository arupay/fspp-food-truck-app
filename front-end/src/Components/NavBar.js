import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
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
            <Nav.Link href="/trucks/">All Trucks</Nav.Link>
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
