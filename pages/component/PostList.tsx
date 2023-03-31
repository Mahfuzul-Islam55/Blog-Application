import React, { Fragment } from "react";
import Post from "./Post";

const PostList = () => {
  return (
    <Fragment>
      <div className="post-container" id="lws-postContainer">
        <Post />
      </div>
    </Fragment>
  );
};

export default PostList;
