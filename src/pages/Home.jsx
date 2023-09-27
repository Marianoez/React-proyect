import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
<<<<<<< HEAD
import Category from "./Category";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function getItems() {
  return axios.get("https://dummyjson.com/products");
}
=======
import { useCollection } from "../hooks/useCollection";
>>>>>>> fixes

const Home = () => {
  const { data, loading } = useCollection("Productos");

  return loading ? (
    <LoaderComponent display="flex" justifyContent="center" />
  ) : (
    <ItemListContainer productsData={data} />
  );
};

export default Home;
