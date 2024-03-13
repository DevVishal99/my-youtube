import React from "react";
import Comments from "./Comments";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <>
          <div>
            <Comments data={comment} />
          </div>
          <div className="px-2 mx-2 border border-l-black">
            <CommentsList comments={comment.replies}/>
          </div>
        </>
      ))}
    </div>
  );
};

export default CommentsList;
