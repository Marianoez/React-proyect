import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = ({ productsData }) => {
  //useNavigate nos permite navegar entre rutas dentro de nuestra aplicación
  const navigate = useNavigate();

  return (
    <div className="productContainer">
      {productsData.map((product) => {
        return (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.images[1]} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button
                variant="secondary"
                onClick={() => navigate(`/item/${product.id}`)}
              >
                Detalles
              </Button>
              <Button style={{ margin: "10px" }} variant="secondary">
                Agregar al carrito
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
