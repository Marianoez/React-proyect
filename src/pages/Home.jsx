import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import axios from "axios";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import Category from "./Category";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Home = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "Productos");

    getDocs(productsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return <ItemListContainer productsData={product} />;
};

export default Home;
