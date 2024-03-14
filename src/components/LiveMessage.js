import React from "react";
import { USER_ICON } from "../utils/constants";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg shadow-sm">
      <div>
        <img className="h-8 m-3" alt="userIcom" src={USER_ICON} />
      </div>
      <p className="font-bold pr-2">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default LiveMessage;
