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
      <nav className="containermain">
        <li>
          <a href="" className="linkmain">
            MS
          </a>
        </li>
        <li>
          <a href="" className="links">
            Productos
          </a>
        </li>
        <li>
          <a href="" className="links">
            Contacto
          </a>
        </li>
        <li>
          <a href="" className="links">
            <CartWidget />
          </a>
        </li>
      </nav>
    </>
  );
};

export default NavBar;
