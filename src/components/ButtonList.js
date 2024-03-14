import React from "react";
import Button from "./Button";

const ButtonList = () => {
    const buttons = ["All", "Mixes", "Bollywood Music", "Live", "Cricket", "Movies", "Jukebox" ,"Gaming", "BGMI","computer Programing" ,"javascript","React","Music"]
  return <div className=" my-2 mx-4 hidden  md:flex ">
    {buttons.map(name => <Button key={name} name={name}/> )}
    
  </div>;
};

export default ButtonList;
