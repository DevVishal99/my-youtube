import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarStatus = useSelector((store) => store.toggle.sideBarToggle);

  if (!sideBarStatus) return null;

  return (
    <div className="w-72 shadow-xl h-screen">
      <ul className="m-2">
        <Link to={"/"}>
        <li className="font-bold my-1">Home</li>
        </Link>
        <li className="my-1">Shorts</li>
        <li className="my-1">Subscriptions</li>
      </ul>
      <hr />
      <ul className="m-2">
        <h3 className="my-1 font-bold">You</h3>
        <li className="my-1">Your Channel</li>
        <li className="my-1">History</li>
        <li className="my-1">Your Videos</li>
        <li className="my-1">Wacth Later</li>
      </ul>
      <hr />
      <ul className="m-2">
        <h3 className="my-1 font-bold">Subscriptions</h3>
        <li className="my-1">Akshay Saini</li>
        <li className="my-1">Triggered Insaan</li>
        <li className="my-1">carryMinti</li>
        <li className="my-1">TVF</li>
      </ul>
    </div>
  );
};

export default SideBar;
