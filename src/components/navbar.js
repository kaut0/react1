import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css"
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const AppHeader = () => {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="">Rookie</Nav.Link>
            <Nav.Link href="">Champion</Nav.Link>
            <Nav.Link href="">Ultimate</Nav.Link>
            <Nav.Link href="">Mega</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
