import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setLoading } from "../redux/userSlice.js";
import { useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.app.isLoading);

  const getInputdata = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    if (isLogin) {
      // Login logic here:-
      dispatch(setLoading(true));

      try {
        const res = await axios.post(
          "https://mern-netflix-clone-6hts.onrender.com/api/v1/user/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          },
        );

        toast.success(res.data.message);

        dispatch(setUser(res.data.user));

        navigate("/browse");
      } catch (error) {
        toast.error(error.response?.data?.message);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      // Register Logic Here:-

      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/user/register",

          { fullName, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          },
        );

        toast.success(res.data.message);
        setIsLogin(true);
        navigate("/login");
      } catch (error) {
        toast.error(error.response?.data?.message);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setfullName("");
    setemail("");
    setpassword("");
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between">
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MQrMI37h3QuUUapdI1tMygKkp7W6Bv9j3g&s"
          alt="banner"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="grow flex items-center justify-center p-4">
        <form
          className="flex flex-col w-full max-w-md bg-black/75 p-10 rounded-lg shadow-2xl backdrop-blur-sm"
          onSubmit={getInputdata}
        >
          <h1 className="text-white text-3xl mb-8 font-bold text-center">
            {isLogin ? "Log In" : "Sign Up"}
          </h1>

          {!isLogin && (
            <div className="flex flex-col mb-4">
              <label className="text-gray-300 text-sm mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[#333] text-white outline-none px-4 py-3 rounded-md focus:bg-[#444] transition-all duration-200 placeholder-gray-500"
                onChange={(e) => setfullName(e.target.value)}
                value={fullName}
                required
              />
            </div>
          )}

          <div className="flex flex-col mb-4">
            <label className="text-gray-300 text-sm mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full bg-[#333] text-white outline-none px-4 py-3 rounded-md focus:bg-[#444] transition-all duration-200 placeholder-gray-500"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="flex flex-col mb-8">
            <label className="text-gray-300 text-sm mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#333] text-white outline-none px-4 py-3 rounded-md focus:bg-[#444] transition-all duration-200 placeholder-gray-500"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-all duration-200 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin" />
                {isLogin ? "Logging In..." : "Signing Up..."}
              </>
            ) : isLogin ? (
              "Log In"
            ) : (
              "Sign Up"
            )}
          </button>

          {isLogin ? (
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center text-sm text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-red-600 mr-2 rounded"
                />
                Remember me
              </label>
              <span className="text-sm text-gray-400 hover:underline cursor-pointer">
                Need help?
              </span>
            </div>
          ) : null}

          <p className="text-gray-500 text-sm mt-8 text-center">
            {isLogin ? "New to the platform? " : "Already have an account? "}
            <span
              className="text-white hover:underline cursor-pointer font-medium"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin ? "Sign up now." : "Log in now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
