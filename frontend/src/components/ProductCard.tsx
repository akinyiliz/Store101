import { FC } from "react";
import { Link } from "react-router-dom";

import { Product } from "../types/product";

const ProductCard: FC<Product> = ({ id, title, price, image }) => {
  return (
    <Link to={"/products/" + id}>
      <div className="bg-white rounded-lg shadow-md w-full">
        <div className="relative w-full h-44 md:h-64 flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-[70%] h-full hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="p-4">
          <h2 className="text-base font-medium text-gray-900">
            {title.split(" ").slice(0, 4).join(" ")}
          </h2>
          <p className="mt-1 text-sm text-gray-600">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
