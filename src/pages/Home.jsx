import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import axios from "axios";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import Category from "./Category";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function getItems() {
  return axios.get("https://dummyjson.com/products");
}

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItems()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={products} />
  );
};

export default Home;
