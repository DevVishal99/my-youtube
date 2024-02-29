import React from "react";
import { MENU_IMG, USER_ICON, YOUTUBE_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { sideBarToggler } from "../utils/toggleSlice";


const Header = () => {
  const dispatch = useDispatch();

  const handleSideBar = () => {
    dispatch(sideBarToggler());
  };
  return (
    <div className="flex justify-between shadow-xl h-20 align-middle">
      <div className="flex">
        <img
          className="h-12 w-5 mx-2 my-3 cursor-pointer"
          alt="SideMenu"
          src={MENU_IMG}
          onClick={handleSideBar}
        />
        <a href="/" >
          <img className="h-12 w-32 mx-2 my-3 cursor-pointer" alt="Logo" src={YOUTUBE_IMG} />
          </a>
      
      </div>
      <div className="w-full m-3 text-center">
        <input
          className="border border-r-gray-600 rounded-l-full w-2/4 py-2 px-4"
          type="text"
          placeholder="Search Here"
        />
        <button className="py-2 px-4 border border-r-gray-600 rounded-r-full">
          🔎
        </button>
      </div>
      <div>
        <img className="h-12 m-3" alt="userIcom" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
