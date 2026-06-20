import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setsearchMovie } from "../redux/movieSlice.js";

const Header = () => {
  const user = useSelector((state) => state.app.user);
  const searchMovie = useSelector((state) => state.movie.searchMovie)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout");

      toast.success(res.data.message);
      dispatch(setUser(null));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setsearchMovie());

  };

  return (
   <div className="fixed top-0 left-0 z-[9999] flex w-full items-center justify-between bg-gradient-to-b from-black/80 to-transparent px-8 py-3">
      <img
        className="w-40 md:w-44 object-contain"
        src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        alt="netflix logo"
      />

      {user && (
        <div className="flex items-center gap-2">
          <IoIosArrowDropdown size={20} className="text-white cursor-pointer" />
          <h1 className="text-base font-medium text-white hidden sm:block">
            {user.fullName}
          </h1>

          <div className="ml-4 flex items-center gap-3">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded text-sm font-medium transition duration-200 shadow-md"
              onClick={logoutHandler}
            >
              LogOut
            </button>

            <button
              onClick={toggleHandler}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded text-sm font-medium transition duration-200 shadow-md"
            >
              {searchMovie ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
