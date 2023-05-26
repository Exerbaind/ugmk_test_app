import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/api/getProducts";

function Main() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  if (products) {
    return <div>Main</div>;
  }

  return null;
}

export default Main;
