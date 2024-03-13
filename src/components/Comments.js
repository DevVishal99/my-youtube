import React from "react";
import { USER_ICON } from "../utils/constants";

const Comments = ({data}) => {
    const {name , text, replies} = data;


  return <div className="flex my-2 py-2 bg-gray-200 rounded-lg">
    <div>
    <img className="w-20 h-12" alt="user" src={USER_ICON} />
    </div>
    <div>
        <h3 className="font-bold">{name}</h3>
        <p>{text}</p>
    </div>
  </div>;
};

export default Comments;
