import { ImSpinner2 } from "react-icons/im";
import { useAuth } from "../context/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, forwardRef, useState } from "react";

const Login = forwardRef(() => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { login, loading } = useAuth();

  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await login(credentials.email, credentials.password);
    navigate("/");
  }

  return (
    <div className="bg-white absolute w-[90%] md:w-1/2 h-[300px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
      <div className="p-8 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[500px]">
          <h2 className="font-bold text-3xl text-primaryColor text-center">
            Login
          </h2>

          <small className="text-center">Fill the fields below to login</small>

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

          <small className="text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="underline text-primaryColor font-semibold"
            >
              Register
            </Link>
          </small>

          <button
            type="submit"
            className="w-full p-2 bg-primaryColor text-white font-semibold text-lg rounded-md flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <ImSpinner2 className="animate-spin" size={25} />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
});

export default Login;
