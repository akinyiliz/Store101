import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./components/LoginModal";
import Register from "./components/RegisterModal";
import Category from "./pages/Category";
import ProductPage from "./pages/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full h-screen bg-white text-black text-base flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

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
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
