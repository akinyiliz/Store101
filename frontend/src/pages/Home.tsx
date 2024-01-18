import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  username: string;
  email: string;
}

const Home = () => {
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
    <div className="m-4">
      <h1 className="font-bold text-2xl">Store101</h1>
      {!user && (
        <div className="space-x-4">
          <Link to={"/register"}>
            <button className="px-8 py-2 bg-green-500">Register</button>
          </Link>

          <Link to={"/login"}>
            <button className="px-8 py-2 border border-green-500">Login</button>
          </Link>
        </div>
      )}

      {user && (
        <div>
          <h1 className="font-semibold text-lg">
            Hello,{" "}
            <span className="capitalize text-green-500">{user.username}</span>
          </h1>

          <button className="px-4 bg-gray-500" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
