import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const videos = useSelector((store) => store?.youtube?.popularVideos);

  if (!videos) return null;
  return (
    <>
      <div className="">
        <ButtonList />
        <div className="flex flex-wrap m-2 ">
          {videos.map((video) => (
            <Link to={"/watch/"+video.id}>
            <VideoContainer key={video.id} video={video} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContainer;