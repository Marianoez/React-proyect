import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

const ItemCount = () => {
  const [count, setCount] = useState(0); //
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = () => {
    setCartItems(cartItems + 1);
    setCount(count + 1);
  };
  const handleRemoveProduct = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
      setCount(count - 1);
    }
  };

  return (
    <div>
      <span style={{ margin: 10, fontSize: "1rem" }}>Agregar productos</span>
      <button onClick={handleRemoveProduct}>-</button>
      <label style={{ margin: 10, fontSize: "1.5rem" }}>{count}</label>
      <button onClick={handleAddProduct}>+</button>
    </div>
  );
};

export default ItemCount;
