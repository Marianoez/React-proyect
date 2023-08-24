import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setItems(res.data.products));
  }, []);

  return items.map((item) => {
    return (
      <>
        <div className="container">
          <div>{item.title}</div>
          <div>{item.stock}</div>
        </div>
      </>
    );
  });
};

export default ItemListContainer;
