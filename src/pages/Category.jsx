import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Category = () => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  const { categoryId } = useParams();
  console.log(categoryId);
  const { data, loading } = useCollection("Productos");

  useEffect(() => {
    const productsFiltered = data.filter((product) => {
      return product.category === categoryId;
    });
    setProductsFiltered(productsFiltered);
  }, [data, categoryId]);
  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={productsFiltered} />
  );
};

export default Category;
