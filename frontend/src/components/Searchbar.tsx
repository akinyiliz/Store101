import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Searchbar = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/cart") {
      setActiveCategory(null);
    }
  }, [location.pathname]);

  return (
    <div className="md:px-6 w-full p-2 flex flex-col-reverse lg:flex-row items-center gap-2 md:gap-4 lg:gap-16 md:justify-between">
      {/* CATEGORIES LIST */}
      <ul className="w-full md:w-3/4 lg:w-1/2 flex items-center justify-between flex-wrap font-medium">
        {categories.map((category, index) => {
          const isActive = activeCategory === index;

          return (
            <li
              key={index}
              className={`font-medium capitalize text-xs md:text-base ${
                isActive ? "border-b-4 border-primaryColor" : ""
              }`}
            >
              <Link
                to={"/" + category}
                onClick={() => setActiveCategory(index)}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* SEARCH BAR */}
      <div className="flex w-full lg:w-1/2 items-center gap-2 border border-[#808080] p-1 rounded-xl">
        <MdSearch size={22} className="text-[#808080]" />
        <input
          type="text"
          placeholder="Search for products"
          className="flex-1 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Searchbar;
