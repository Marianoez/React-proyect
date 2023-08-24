import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import img from "../../assets/Icons/g.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar id="NavBarMain" bg="" data-bs-theme="">
        <Container id="containerId">
          <Nav className="">
            <Nav.Link id="Nav1" className="NavSecundary" href="#">
              M&S
            </Nav.Link>
            <Nav.Link id="Nav2" className="NavSecundary" href="#">
              Productos
            </Nav.Link>
            <Nav.Link id="Nav3" className="NavSecundary" href="#">
              Contacto
            </Nav.Link>
            <Nav.Link id="Nav4" className="NavSecundary" href="#">
              <CartWidget className="cartwidget" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
