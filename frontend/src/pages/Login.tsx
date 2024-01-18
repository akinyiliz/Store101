import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      // console.log(data);

      localStorage.setItem("access", data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[300px] gap-4 m-4">
      <h2 className="font-bold text-xl">Login</h2>
      <input
        type="text"
        placeholder="Username"
        required
        autoComplete="off"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        className="border px-2"
      />

      <input
        type="password"
        placeholder="Password"
        required
        autoComplete="off"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        className="border px-2"
      />

      <button type="submit" className="bg-gray-500">
        Login
      </button>
    </form>
  );
};

export default Login;
