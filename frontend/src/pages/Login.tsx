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
      <div className="px-4 pt-40 lg:pt-36 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
          <h2 className="font-bold text-3xl text-primaryColor text-center">
            Sign In
          </h2>
          <input
            type="text"
            placeholder="Username"
            required
            autoComplete="off"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="border border-gray p-2 focus:outline-primaryColor rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            required
            autoComplete="off"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="border border-gray p-2 focus:outline-primaryColor rounded-md"
          />

          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full p-2 bg-primaryColor text-white font-semibold text-lg rounded-md"
            >
              Sign In
            </button>

            <small>
              Don&apos;t have an account?{" "}
              <Link
                to={"/register"}
                className="underline hover:text-primaryColor font-semibold"
              >
                sign up
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
