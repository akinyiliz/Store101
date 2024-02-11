import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";

import { Product } from "../types/product";
import LoadingUI from "../components/LoadingUI";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const query = useParams();
  const productId = Number(query.productId);

  const [product, setProduct] = useState<Product>({
    id: productId,
    title: "",
    description: "",
    category: "",
    rating: { rate: 0, count: 0 },
    price: 0,
    image: "",
  });

  const { addToCart } = useCart();

  // Getting product clicked using its id
  useEffect(() => {
    const actualProduct = products.find((product) => product.id === productId);

    if (actualProduct) {
      setProduct(actualProduct);
    }
  }, [productId]);

  // Handling AddToCart functionality using addToCart function from CartContext
  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <Suspense fallback={<LoadingUI />}>
      <section className="py-4 px-2 w-full xl:max-w-7xl xl:mx-auto">
        <div className="px-2 md:w-3/4 md:mx-auto flex flex-col md:flex-row items-center">
          {/* IMAGE & ADD TO CART BUTTON */}
          <div className="w-full md:w-1/2 h-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-[80%] h-[250px] md:h-[350px] lg:h-[500px] mx-auto md:mx-0 hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* PRODUCT TITLE, DESCRIPTION & PRICE */}
          <div className="relative w-full md:w-1/2 flex flex-col gap-2 md:gap-4">
            <h2 className="text-[#3d3d3d] font-semibold text-2xl">
              {product.title}
            </h2>

            <div className="space-y-2">
              <p className="text-sm lg:text-lg">{product.description}</p>

              <div className="flex items-center gap-4 lg:gap-8 text-[#808080] text-sm">
                <p className="capitalize">{product.category}</p>
                <p className="flex items-center gap-1">
                  <FaStar className="text-[#FFAE5D]" />
                  <span>{product.rating?.rate}</span>
                </p>
                <p>{product.rating?.count} Ratings</p>
              </div>
            </div>

            <p className="text-[#808080] text-xl">${product.price}</p>

            <button
              onClick={handleAddToCart}
              className="uppercase py-2 bg-[#FFAE5D] text-lg font-medium"
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default ProductPage;
