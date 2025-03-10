import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
 
  const {originalTitle , description, primaryImage} = mainMovie;

  return (
    <div>
      <VideoTitle title={originalTitle} overview={description} />
      <div className="">
      <VideoBackground image={primaryImage}/>
      </div>
    </div>
  );
};

export default MainContainer;
