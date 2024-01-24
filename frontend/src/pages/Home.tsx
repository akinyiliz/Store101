import { Suspense, useEffect, useState } from "react";

import { Product } from "../types/product";
import Products from "../components/Products";
import LoadingUI from "../components/LoadingUI";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  async function fetchProducts() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/products");

      const data = await response.json();

      // console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  });
  return (
    <Suspense fallback={<LoadingUI />}>
      <Products products={products || []} />
    </Suspense>
  );
};

export default Home;
