import { FC } from "react";

import ProductCard from "./ProductCard";
import { Product } from "../types/product";

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <section className="my-4 mx-2 w-full xl:max-w-7xl xl:mx-auto h-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
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
