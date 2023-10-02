import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
//import { CartContext } from "../../context/CartContext";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cartItems } = useContext(CartContext);

  return (
    <div className onClick={handleShow}>
      <FontAwesomeIcon icon={faCartShopping} />
      <strong> {cartItems} </strong>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modaltt">
            Compra Realizada con éxito!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Muchas gracias por confiar en nosotros!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartWidget;
