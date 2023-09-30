<<<<<<< HEAD
/* import { useState } from "react";
import { createContext } from "vm";

export const CartContext = createContext();

export const CartProvider = () => {
  const [cart, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={cartItems}>{children}</CartContext.Provider>
  );
};
 */
=======
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
>>>>>>> router
