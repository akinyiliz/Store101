import { FC, Suspense } from "react";

import { products } from "../data/products";

import LoadingUI from "../components/LoadingUI";
import ProductCard from "../components/ProductCard";

interface CategoriesProps {
  category: string;
}

const Category: FC<CategoriesProps> = ({ category }) => {
  return (
    <Suspense fallback={<LoadingUI />}>
      <section className="pt-40 lg:pt-36 py-4 px-2 w-full xl:max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8">
          {products.map((product) => {
            if (category === product.category) {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              );
            }
          })}
        </div>
      </section>
    </Suspense>
  );
};

export default Category;
