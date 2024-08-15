import { FC } from "react";

import { Product } from "../types/product";
import CategorySection from "./CategorySection";

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  const menClothes = products.filter(
    (product) => product.category === "men's clothing"
  );

  const womenClothes = products.filter(
    (product) => product.category === "women's clothing"
  );

  const electronics = products.filter(
    (product) => product.category === "electronics"
  );

  const jewelery = products.filter(
    (product) => product.category === "jewelery"
  );
  return (
    <section className="py-6 px-2 w-full xl:max-w-7xl xl:mx-auto flex flex-col gap-4">
      <CategorySection
        name="Men"
        category="men's clothing"
        products={menClothes}
      />
      <CategorySection
        name="Women"
        category="women's clothing"
        products={womenClothes}
      />
      <CategorySection
        name="Electronics"
        category="electronics"
        products={electronics}
      />
      <CategorySection
        name="Jewelery"
        category="jewelery"
        products={jewelery}
      />
    </section>
  );
};

export default Products;
