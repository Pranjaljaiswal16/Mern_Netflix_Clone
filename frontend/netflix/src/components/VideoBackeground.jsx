import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({ movieId }) => {
  useMovieById(movieId);

  const trailer = useSelector((state) => state.movie.trailerMovie);

  if (!trailer?.key) {
    return (
      <div className="w-full  h-[500px] bg-neutral-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-neutral-700 border-t-red-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0 scale-125"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&playsinline=1&rel=0&modestbranding=1`}
        title="Trailer"
        allow="autoplay; encrypted-media"
      />

      {/* Left Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />

      {/* Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
    </div>
  );
};

export default VideoBackground;