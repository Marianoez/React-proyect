import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetailContainer from "../components/ItemDetailsContainer/ItemDetailsContainer";

const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productItem = doc(db, "Productos", itemId);

    getDoc.apply(productItem).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [itemId]);

  return <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
