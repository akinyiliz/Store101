import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { User } from "./types/user";

import Navbar from "./components/Navbar";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import ProductPage from "./pages/Product";
import CartContextProvider from "./context/CartContext";

function App() {
  const [user, setUser] = useState<User | null>(null);

  async function fetchProfile() {
    const token = localStorage.getItem("access");

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      // console.log(data);
      setUser(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  function handleLogout() {
    localStorage.clear();
    setUser(null);
  }
  return (
    <BrowserRouter>
      <CartContextProvider>
        <main className="w-full h-screen bg-white text-black text-base">
          <Navbar user={user} handleLogout={handleLogout} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/cart" element={<Cart />} />

            <Route
              path="/electronics"
              element={<Category category="electronics" />}
            />
            <Route
              path="/jewelery"
              element={<Category category="jewelery" />}
            />
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
        </main>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
