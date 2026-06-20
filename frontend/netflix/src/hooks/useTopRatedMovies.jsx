import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { gettopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYThhNzIxYjA5NmFhMzA0YWUwMWEyM2Y2ZDMzMmRmOCIsIm5iZiI6MTcxNDM4MjU4OC42MDE5OTk4LCJzdWIiOiI2NjJmNjZmYzdkNWRiNTAxMmMzZTg4MzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RxixIgjdyrACYrNo8PTDs7af0k7HTOz93F2Udy-zocw'
          }
        };

        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          options
        );

        dispatch(gettopRatedMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;