import { FC } from "react";

import ProductCard from "./ProductCard";
import { Product } from "../types/product";

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <section className="py-6 px-2 pt-40 lg:pt-36 w-full xl:max-w-7xl xl:mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
