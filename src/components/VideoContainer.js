import React from "react";

const VideoContainer = ({ video }) => {

  const { snippet, statistics } = video;

  const { thumbnails, title, channelTitle } = snippet;

  const { likeCount, viewCount } = statistics;

  return <div>
    <div className="px-2 w-72 my-2">
      <img className="rounded-xl w-full  shadow-lg" src={thumbnails.medium.url} alt="Thumnail"/>
      <ul>
        <li><h1 className="font-bold py-2">{title}</h1></li>
        <li className="">{channelTitle}</li>
        <li>{likeCount} likes - {viewCount} views</li>
      </ul>
      
    </div>
  </div>;
};

export default VideoContainer;
