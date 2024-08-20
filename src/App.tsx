import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/Product";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { useSearch } from "./context/SearchContext";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  const { searchTerm } = useSearch();

  return (
    <main className="w-full h-screen bg-white text-black text-base flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/electronics"
          element={<Category category="electronics" />}
        />
        <Route path="/jewelery" element={<Category category="jewelery" />} />
        <Route
          path="/men's clothing"
          element={<Category category="men's clothing" />}
        />
        <Route
          path="/women's clothing"
          element={<Category category="women's clothing" />}
        />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route
          path={`/search/:${searchTerm}`}
          element={<SearchResultsPage />}
        />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
