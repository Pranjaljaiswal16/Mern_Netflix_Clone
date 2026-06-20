import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getpopularMovies } from "../redux/movieSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYThhNzIxYjA5NmFhMzA0YWUwMWEyM2Y2ZDMzMmRmOCIsIm5iZiI6MTcxNDM4MjU4OC42MDE5OTk4LCJzdWIiOiI2NjJmNjZmYzdkNWRiNTAxMmMzZTg4MzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RxixIgjdyrACYrNo8PTDs7af0k7HTOz93F2Udy-zocw'
          }
        };

        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          options
        );
        // console.log("Popular API:", res.data.results);

        dispatch(getpopularMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularMovies();
  }, [dispatch]);
};

export default usePopularMovie;