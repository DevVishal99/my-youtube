import React from "react";
import CommentsList from "./CommentsList";
import commentsData from "../utils/commentsData";

const CommentsContainer = () => {


  return (
    <div className="px-4 mx-4">
      <h1 className="font-bold text-xl"> Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
