
// import axios from "axios";
// import { getnowPlayingMovie } from "../redux/movieSlice";
// import { useDispatch } from "react-redux";


// const useNowPlayingMovies = async () => {
//   const dispatch = useDispatch();
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYThhNzIxYjA5NmFhMzA0YWUwMWEyM2Y2ZDMzMmRmOCIsIm5iZiI6MTcxNDM4MjU4OC42MDE5OTk4LCJzdWIiOiI2NjJmNjZmYzdkNWRiNTAxMmMzZTg4MzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RxixIgjdyrACYrNo8PTDs7af0k7HTOz93F2Udy-zocw",
//     },
//   };





//   try {
//     const res = await axios.get(
//       "https://api.themoviedb.org/3/movie/now_playing",
//       options,
//     );
//     console.log(res.data.results);

//     dispatch(getnowPlayingMovie(res.data.results));
//   } catch (error) {
//     console.log(error);
//   }
// };



// export default useNowPlayingMovies


import { useEffect } from "react";
import axios from "axios";
import { getnowPlayingMovie } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYThhNzIxYjA5NmFhMzA0YWUwMWEyM2Y2ZDMzMmRmOCIsIm5iZiI6MTcxNDM4MjU4OC42MDE5OTk4LCJzdWIiOiI2NjJmNjZmYzdkNWRiNTAxMmMzZTg4MzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RxixIgjdyrACYrNo8PTDs7af0k7HTOz93F2Udy-zocw'
        }
      };

      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing",
          options
        );

        // console.log(res.data.results);
        dispatch(getnowPlayingMovie(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;