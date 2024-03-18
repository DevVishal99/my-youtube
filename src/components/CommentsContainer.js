import React from "react";
import CommentsList from "./CommentsList";
import commentsData from "../utils/commentsData";

const CommentsContainer = () => {


  return (
    <div className="md:px-2 px-0 md:mx-2 mx-0">
      <h1 className="font-bold text-xl"> Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
