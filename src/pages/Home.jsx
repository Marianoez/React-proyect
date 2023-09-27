import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { useCollection } from "../hooks/useCollection";

const Home = () => {
  const { data, loading } = useCollection("Productos");

  return loading ? (
    <LoaderComponent display="flex" justifyContent="center" />
  ) : (
    <ItemListContainer productsData={data} />
  );
};

export default Home;
