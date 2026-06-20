import { FaPlayCircle } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {

  return (
    <>
      <div className="absolute inset-0 z-50 flex flex-col justify-center pl-12 md:pl-20 text-white bg-gradient-to-r from-black/70 via-black/20 to-transparent">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-md">
          {title}
        </h1>

        <p className="mt-4 text-sm md:text-lg max-w-md md:max-w-xl text-gray-200 drop-shadow-sm line-clamp-3">
          {overview}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-md hover:bg-white/80 flex items-center gap-2 transition duration-200 cursor-pointer shadow-lg">
            <FaPlayCircle size={22} />
            <span>Play</span>
          </button>

          <button className="px-6 py-2.5 bg-gray-500/40 text-white font-semibold rounded-md hover:bg-gray-500/60 flex items-center gap-2 transition duration-200 cursor-pointer backdrop-blur-sm">
            <MdWatchLater size={22} />
            <span>Watch</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
