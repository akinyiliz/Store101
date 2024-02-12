import { FC } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import Searchbar from "./Searchbar";
import { User } from "../types/user";
import { useCart } from "../context/CartContext";

interface NavbarProps {
  user: User | null;
  handleLogout?: () => void;
}

const Navbar: FC<NavbarProps> = ({ user }) => {
  const { getTotalCartItems } = useCart();

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
          <ul className="flex items-center gap-2 md:gap-4">
            <li className="relative">
              <Link to={"/cart"}>
                <MdOutlineShoppingCart size={30} />
                <div className="w-[20px] h-[20px] flex justify-center items-center absolute top-[-5px] left-4 text-sm rounded-full bg-primaryColor font-semibold border border-white">
                  <small className="text-sm text-center text-white">
                    {getTotalCartItems()}
                  </small>
                </div>
              </Link>
            </li>

            {!user && (
              <li>
                <Link to={"/login"}>
                  <button className="font-medium p-2 rounded-lg hover:bg-primaryColor hover:text-white">
                    Sign In
                  </button>
                </Link>
              </li>
            )}

            {user && (
              <li className="flex items-center gap-2">
                <FaUserCircle size={25} />
                <p className="capitalize">{user.username}</p>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <Searchbar />
    </section>
  );
};

export default Navbar;
