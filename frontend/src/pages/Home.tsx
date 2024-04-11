import { Suspense } from "react";

import { products } from "../data/products";

import Products from "../components/Products";
import LoadingUI from "../components/LoadingUI";
import Banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <Suspense fallback={<LoadingUI />}>
      <div className="pt-40 xl:max-w-7xl xl:mx-auto">
        <img
          src={Banner}
          alt="Banner"
          className=" h-60 lg:h-96 w-full object-cover"
        />
        <Products products={products || []} />
      </div>
    </Suspense>
  );
};

export default Home;
