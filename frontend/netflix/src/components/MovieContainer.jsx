import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const PopularMovie = useSelector((state) => state.movie.nowPlayingMovie);
  const TopRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  const UpcomingMovies = useSelector((state) => state.movie.upcomingMovies);
  const NowPlayingMovie = useSelector((state) => state.movie.nowPlayingMovie);


  if (!PopularMovie || !TopRatedMovies || !UpcomingMovies || !NowPlayingMovie) return
  // early return in React

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title="Popular Movies" Movies={PopularMovie} />
        <MovieList title="TopRated Movies" Movies={TopRatedMovies} />
        <MovieList title="Upcoming Movies" Movies={UpcomingMovies} />
        <MovieList title="Now Playing Movies" Movies={NowPlayingMovie} />
      </div>
    </div>
  );
};

export default MovieContainer;
