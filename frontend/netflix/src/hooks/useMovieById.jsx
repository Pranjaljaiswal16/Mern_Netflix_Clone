import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getTrailerMovie } from "../redux/movieSlice";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const options = {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        };

        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options,
        );



        const trailer = res?.data?.results?.filter(
          (item) => item.type === "Clip",
        );

        dispatch(
          getTrailerMovie(
            trailer?.length > 0 ? trailer[0] : res?.data?.results?.[0],
          ),
        );
      } catch (error) {
        console.error("TMDB Error:", error);
      }
    };

    if (movieId) {
      fetchMovieById();
    }
  }, [movieId, dispatch]);
};

export default useMovieById;
