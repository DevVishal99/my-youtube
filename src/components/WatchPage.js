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
    <div className=" m-4 p-4 rounded-lg flex w-full">
      <div>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + videoId.id + "?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-full">
      <LiveChat/>
      </div>
      
    </div>
    <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
