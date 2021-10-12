import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css"
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const AppHeader = () => {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="">Pokemon</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
