import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Customs Hooks:-
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovie from "./SearchMovie";

const Browse = () => {
  const user = useSelector((state) => state.app.user);
  const search = useSelector((state) => state.movie.searchMovie);
  const navigate = useNavigate();

  // Custom Hooks

  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  useUpcomingMovies();

  // Ends here

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />

      {search ? (
        <SearchMovie />
      ) : (
        <>
          <MainContainer />
          <MovieContainer />
        </>
      )}
    </>
  );
};

export default Browse;
