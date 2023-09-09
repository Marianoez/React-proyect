import React from "react";
import { useState } from "react";
import { productsContext } from "./productsContext";

const StatePContext = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getItems()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {});
  }, []);

  return (
    <productsContext.Provider value={[products]}>
      {children}
    </productsContext.Provider>
  );
};

export default StatePContext;
