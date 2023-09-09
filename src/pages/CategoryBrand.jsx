import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

export function getItems() {
  return axios.get("https://dummyjson.com/products?limit=10");
}

const CategoryBrand = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryBid } = useParams();
  useEffect(() => {
    getItems()
      .then((res) => {
        const dataFiltered = res.data.products.filter(
          (item) => item.brand === categoryBid
        );
        setProducts(dataFiltered);
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, [categoryBid]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={products} />
  );
};

export default CategoryBrand;
