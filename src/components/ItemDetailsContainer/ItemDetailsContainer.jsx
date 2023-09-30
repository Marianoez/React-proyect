import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./ItemDetailsContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = ({ productData }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.img} />
      <Card.Body>
        <Card.Title className="Title">{productData.nombre}</Card.Title>
        <Card.Text className="Description">{productData.descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Categoria: {productData.category}</ListGroup.Item>
        <ListGroup.Item>Talle: {productData.size}</ListGroup.Item>
        <ListGroup.Item>Stock: {productData.stock}</ListGroup.Item>
        <ListGroup.Item>Precio: ${productData.precio}</ListGroup.Item>
        <ListGroup.Item>Descuento en un pago 10%</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ItemCount />
      </Card.Body>
    </Card>
  );
};

export default ItemDetailContainer;
