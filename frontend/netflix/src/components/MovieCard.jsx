import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };
  return (
    <div
      className="w-48 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={handleOpen}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt="Movie Poster"
        className="w-full h-72 object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default MovieCard;
