/* import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./ItemUn.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemDescription from "../ItemDescription/ItemDescription";

const ItemUn = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setItems(res.data.products);
      console.log(res.data);
    });
  }, []);

  return items.map((item) => {
    return (
      <Card className="CardAll" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.images[0]} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={<ItemDescription data={item} />} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    );
  });
};

export default ItemUn; */

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemUn = ({ productsData }) => {
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
              <Button variant="secondary" onClick={console.log("sss")}>
                Agregar al Carrito
              </Button>
              <Button style={{ margin: "10px" }} variant="secondary">
                Volver atras
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemUn;
