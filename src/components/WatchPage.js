import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { watchToggler } from "../utils/toggleSlice";

const WatchPage = () => {
  const videoId = useParams();
  const dispatch = useDispatch();

  dispatch(watchToggler());
  return (
    <div className=" m-4 p-4 rounded-lg">
      <iframe
    width="1000"
    height="500"
    src={"https://www.youtube.com/embed/"+videoId.id+"?autoplay=1"}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>;
    </div>
  )
};

export default WatchPage;
