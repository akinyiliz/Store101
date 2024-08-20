import Products from "../components/Products";
import Banner from "../assets/banner.jpg";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { products } = useCart();
  return (
    <div className="pt-40 xl:max-w-7xl xl:mx-auto">
      <img
        src={Banner}
        alt="Banner"
        className=" h-60 lg:h-96 w-full object-cover"
      />
      <Products products={products || []} />
    </div>
  );
};

export default Home;
