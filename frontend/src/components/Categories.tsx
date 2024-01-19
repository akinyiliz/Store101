const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Categories = () => {
  // const [categories, setCategories] = useState<string[]>([]);

  // async function fetchCategories() {
  //   try {
  //     const response = await fetch(
  //       "http://127.0.0.1:8000/api/products/categories"
  //     );
  //     const data = await response.json();

  //     console.log(data);

  //     setCategories(data.categories);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  // console.log(categories);

  return (
    <section className="w-full h-24 md:h-14 bg-white my-2 p-2">
      <div className="xl:max-w-7xl xl:mx-auto flex items-center justify-center">
        <div className="flex items-center flex-wrap gap-2 md:gap-12 ">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className="border border-gray-300 py-1 px-4 capitalize "
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
