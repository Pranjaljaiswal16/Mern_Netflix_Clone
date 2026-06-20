import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const title = props.title;
  const Movies = props.Movies
  
  return (
    <div className="px-8 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-wide">{title}</h1>

      {/* Scroll Container */}
      <div className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-4 pb-4 snap-start">
          {Movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
