import React from "react";
import { useParams } from "react-router-dom";
import { useItemCollection } from "../hooks/useItemItemColection";
import ItemDetailContainer from "../components/ItemDetailsContainer/ItemDetailsContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const ItemDetails = () => {
  const { itemId } = useParams();

  const { data, loading } = useItemCollection("Productos", itemId);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemDetailContainer productData={data} />
  );
};

export default ItemDetails;
