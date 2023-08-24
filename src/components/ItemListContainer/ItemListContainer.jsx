import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./ItemListContainer.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setItems(res.data.products));
  }, []);

  return items.map((item) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  });
};

export default ItemListContainer;
