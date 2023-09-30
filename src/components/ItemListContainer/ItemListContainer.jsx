import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ productsData }) => {
  //useNavigate nos permite navegar entre rutas dentro de nuestra aplicación
  const navigate = useNavigate();

  return (
    <div className="productContainer">
      {productsData.map((product) => {
        return (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body className="CardBody">
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>{product.descripcion}</Card.Text>
              <Button
                variant="secondary"
                onClick={() => navigate(`/item/${product.id}`)}
              >
                Detalles
              </Button>
              <div className="itemCart">
                <ItemCount />
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
