import React, { useState } from "react";
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

export default ItemUn;
