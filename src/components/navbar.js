import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css"
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";

const AppHeader = ({title}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="" className="header"><h1>{title}</h1></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
