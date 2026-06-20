import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearchMoviesDetails } from "../redux/searchSlice";
import { useSelector } from "react-redux";
import { setLoading } from "../redux/userSlice.js";
import MovieList from "../components/MovieList";

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const { SearchMovie, movieName } = useSelector((state) => state.searchMovies);

  const handleSearch = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYThhNzIxYjA5NmFhMzA0YWUwMWEyM2Y2ZDMzMmRmOCIsIm5iZiI6MTcxNDM4MjU4OC42MDE5OTk4LCJzdWIiOiI2NjJmNjZmYzdkNWRiNTAxMmMzZTg4MzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RxixIgjdyrACYrNo8PTDs7af0k7HTOz93F2Udy-zocw",
      },
    };

    try {
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,
        options,
      );

      const movies = res?.data?.results;

      dispatch(setSearchMoviesDetails({ searchMovie, movies }));
    } catch (error) {
      console.log("FULL ERROR:", error);
    } finally {
      dispatch(setLoading(false));
    }

    setSearchMovie("");
  };

  return (
    <>
      <div className="relative  z-50 pointer-events-auto flex flex-col items-center justify-center pt-40 pb-12 px-6 bg-transparent">
        <div className="text-white text-xl md:text-2xl font-medium mb-6 tracking-wide drop-shadow-md text-center"></div>

        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-2xl gap-2 p-2 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600 transition-all duration-300 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          {/* Left Side: Glowing Search Icon */}
          <div className="pl-3 text-zinc-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 text-zinc-400 group-focus-within:text-red-500 transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            placeholder="Search Movies, TV shows, genres..."
            className="w-full bg-transparent px-3 py-3 text-white placeholder-zinc-500 font-normal tracking-wide outline-none text-base md:text-lg"
          />

          {/* Modern Premium Search Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3 rounded-xl shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.5)] active:scale-95 transition-all duration-200 text-sm md:text-base whitespace-nowrap cursor-pointer tracking-wider uppercase"
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </form>
      </div>


      {
        SearchMovie !== null ? <MovieList title={movieName} Movies={SearchMovie} /> : (<h1>Movie Not Found</h1>)

      }


    </>
  );
};

export default SearchBar;
