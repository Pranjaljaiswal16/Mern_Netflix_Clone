import VideoTitle from "./VideoTitle";
import VideoBackeground from "./VideoBackeground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((state) => state.movie?.nowPlayingMovie);
  if (!movie) return;
  const { overview, id, title } = movie[4];

  return (
    <div>
      <VideoTitle overview={overview} title={title} />
      <VideoBackeground movieId={id} />
    </div>
  );
};

export default MainContainer;
