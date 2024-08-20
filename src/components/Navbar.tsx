import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import Searchbar from "./Searchbar";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { getTotalCartItems } = useCart();

  const { isAuthenticated, logout, userDetails } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <section className="xl:max-w-7xl xl:mx-auto w-full h-36 md:h-40 lg:h-32 mb-4 bg-white fixed z-10 top-0 left-0 right-0">
      <nav className="flex flex-col gap-2 px-2 py-3 md:px-6 border-b-[3px] border-gray">
        <div className="flex items-center justify-between md:gap-8">
          {/* LOGO */}
          <Link to={"/"}>
            <h1 className="text-3xl">
              <span className="font-medium">store</span>
              <span className="font-semibold text-primaryColor">101</span>
            </h1>
          </Link>

          {/* CART & LOGIN BUTTON */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <Link to={"/cart"}>
                <MdOutlineShoppingCart size={30} />
                <div className="w-[20px] h-[20px] absolute top-[-5px] left-4 text-sm rounded-full bg-primaryColor font-semibold border border-white">
                  <small className="flex justify-center items-center text-sm text-center text-white">
                    {getTotalCartItems()}
                  </small>
                </div>
              </Link>
            </div>

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                {userDetails && (
                  <h2 className="text-normal">Hello, {userDetails.username}</h2>
                )}
                <button
                  onClick={handleLogout}
                  className="font-medium py-2 px-4 rounded-lg bg-primaryColor text-white"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to={"/login"}
                  className="font-medium p-2 rounded-lg hover:text-primaryColor"
                >
                  Login
                </Link>

                <Link
                  to={"/register"}
                  className="font-medium p-2 py-2 px-4 rounded-lg bg-primaryColor text-white"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <Searchbar />
    </section>
  );
};

export default Navbar;
