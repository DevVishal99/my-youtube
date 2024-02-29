import React from "react";

const Button = ( {name}) => {
  return <div>
    <button className=" bg-gray-200 px-4 py-2 rounded-xl mx-1">{name}</button>
  </div>;
};

export default Button;
