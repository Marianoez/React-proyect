import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Category = () => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);
  const { data, loading } = useCollection("Productos");

  useEffect(() => {
    const productsFiltered = data.filter((product) => {
      return product.category === categoryName;
    });
    setProductsFiltered(productsFiltered);
  }, [data, categoryName]);
  return <ItemListContainer productsData={productsFiltered} />;
};

export default Category;
