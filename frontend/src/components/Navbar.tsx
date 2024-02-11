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
    <section className="xl:max-w-7xl xl:mx-auto w-full h-40 lg:h-28 mb-4 bg-white">
      <nav className="flex flex-col gap-2 px-2 py-3 md:border-b md:border-[#808080]">
        <div className="flex items-center justify-between md:gap-8">
          {/* LOGO */}
          <Link to={"/"}>
            <h1 className="text-3xl">
              <span className="font-bold">store</span>
              <span className="font-normal text-[#FFAE5D]">101</span>
            </h1>
          </Link>

          {/* CART & LOGIN BUTTON */}
          <ul className="flex items-center gap-2 md:gap-4">
            <li className="relative">
              <Link to={"/cart"}>
                <MdOutlineShoppingCart size={25} />
              </Link>
              <div className="w-[20px] h-[20px] flex justify-center items-center absolute top-[-5px] left-3 text-sm rounded-full bg-[#FFAE5D] text-neutral-800">
                {getTotalCartItems()}
              </div>
            </li>

            {!user && (
              <li>
                <Link to={"/login"}>
                  <button className="font-medium p-2 rounded-lg hover:bg-[#FFAE5D]">
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
