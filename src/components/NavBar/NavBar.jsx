import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import img from "../../assets/Icons/g.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="containermain bg-body-tertiary ">
        <Container>
          <Nav.Link id="LinkMain" className="links" href="#">
            <Link to="/">MS</Link>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links me-auto">
              <NavDropdown
                className="links"
                title="Productos"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="links">
                  <Link to="category/laptops">Laptops</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="links" href="#action/3.2">
                  <Link to="category/smartphones">Smarphones</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="links" href="#action/3.3">
                  <Link to="category/brand">Apple</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="links" href="#action/3.4">
                  <Link to="/">Ver Todos</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="links" href="#link">
                <Link to="/contacto">Contacto</Link>
              </Nav.Link>
              <Nav.Link className="links" href="#link">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

  //A MODIFICAR

  {
    /* <nav className="containermain">
<li className="linkmain">
  <a href="">MS</a>
</li>
<li className="links">
  <a href="" className="links">
    Productos
  </a>
</li>
<li className="links">
  <a href="" className="links">
    Contacto
  </a>
</li>
<li className="links">
  <a href="" className="links">
    <CartWidget />
  </a>
</li>
</nav> */
  }
};

export default NavBar;
