import React from "react";
import SideBar from "./SideBar";
import useFetchYoutubeVideos from "../hooks/useFecthYoutubeVideos";
import { Outlet } from "react-router-dom";

const Body = () => {
  useFetchYoutubeVideos();
  return <div className="flex">
    <SideBar/>
    <Outlet/>
  </div>;
};

export default Body;
