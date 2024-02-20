import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await login(credentials.email, credentials.password);
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
            placeholder="Email"
            required
            autoComplete="off"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="border border-gray p-2 focus:outline-primaryColor rounded-md"
          />

          <div className="flex items-center gap-1 pr-2 border border-gray focus:outline-primaryColor rounded-md">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              autoComplete="off"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-2 focus:outline-primaryColor rounded-md"
            />
            {showPassword ? (
              <FiEye
                onClick={() => setShowPassword(!showPassword)}
                className="hover:text-primaryColor cursor-pointer"
              />
            ) : (
              <FiEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="hover:text-primaryColor cursor-pointer"
              />
            )}
          </div>

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
