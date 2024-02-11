import { Suspense } from "react";

import { products } from "../data/products";

import Products from "../components/Products";
import LoadingUI from "../components/LoadingUI";

const Home = () => {
  return (
    <Suspense fallback={<LoadingUI />}>
      <Products products={products || []} />
    </Suspense>
  );
};

export default Home;
