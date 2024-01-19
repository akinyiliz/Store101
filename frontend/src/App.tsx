import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { User } from "./types/user";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

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
      <main className="w-full h-screen bg-gray-100 text-black text-base">
        <Navbar user={user} handleLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
