import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { watchToggler } from "../utils/toggleSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const videoId = useParams();
  const dispatch = useDispatch();

  dispatch(watchToggler());
  return (
    <div className="flex flex-col w-full">
      <div className="rounded-lg flex flex-col md:flex md:flex-row ">
        <div className="md:w-9/12 w-full aspect-video px-2 md:px-0">
          <iframe
          className= "w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px] py-4 md:py-2"
            width="300"
            height="300"
            src={"https://www.youtube.com/embed/" + videoId.id + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-3/12 pr-2 md:pr-0 md:py-2 h-[600px] md:h-[600px]">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
