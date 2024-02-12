import { Link, useNavigate } from "react-router-dom";
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
    <div className="w-full h-full xl:max-w-7xl xl:mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[300px] gap-4 py-6 px-2 pt-40 lg:pt-36"
      >
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

        <div className="flex flex-col items-center">
          <button type="submit" className="w-full bg-primaryColor text-white">
            Login
          </button>

          <small>
            Don&apos;t have an account?{" "}
            <Link
              to={"/register"}
              className="underline hover:text-primaryColor font-semibold"
            >
              Register
            </Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Login;
