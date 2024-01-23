import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Searchbar = () => {
  return (
    <div className="p-2 flex flex-col-reverse lg:flex-row items-center gap-2 md:justify-between">
      {/* CATEGORIES LIST */}
      <div className="flex items-center flex-wrap gap-1 xl:gap-12">
        {categories.map((category, index) => {
          return (
            <Link to={"/categories/" + category} key={index}>
              <div className="text-[#606060] font-medium capitalize text-sm md:text-base">
                {category}
              </div>
            </Link>
          );
        })}
      </div>

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
