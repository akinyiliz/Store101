import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";

import { User } from "../types/user";
import { Link } from "react-router-dom";

interface NavbarProps {
  user: User | null;
  handleLogout: () => void;
}

const Navbar: FC<NavbarProps> = ({ user, handleLogout }) => {
  return (
    <section className="bg-white w-full h-28 md:h-16 border-b px-2 py-3">
      <nav className="xl:max-w-7xl xl:mx-auto flex flex-col gap-2">
        <div className="flex items-center justify-between md:gap-8">
          {/* LOGO */}
          <h1 className="font-bold text-3xl">
            Store<span className="text-blue-500">101</span>
          </h1>

          {/* TABLET AND LARGE SCREEN SEARCH BAR */}
          <div className="hidden md:flex md:w-3/4 lg:w-1/2 items-center gap-2 border border-gray-500 p-1 rounded-xl">
            <MdSearch size={22} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products"
              className="flex-1 focus:outline-none"
            />
          </div>

          {/* CART & LOGIN BUTTON */}
          <ul className="flex items-center gap-2 md:gap-4">
            <li>
              <MdOutlineShoppingCart size={25} />
            </li>

            {user && (
              <li>
                <FaUserCircle size={25} />
              </li>
            )}

            <li>
              {user && (
                <button className="px-4 bg-gray-500" onClick={handleLogout}>
                  Logout
                </button>
              )}

              {!user && (
                <Link to={"/register"}>
                  <button className="px-2 md:px-4 py-1 bg-blue-500 text-white rounded-lg">
                    Register
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* MOBILE SCREEN SEARCH BAR */}
        <div className="border border-gray-500 p-2 flex items-center gap-2 rounded-xl md:hidden">
          <MdSearch size={22} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 focus:outline-none"
          />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
