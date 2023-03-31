import React, { Fragment } from "react";
import Description from "./Description";
import RelatedPost from "./RelatedPost";

const PostDetails = () => {
  return (
    <Fragment>
      <div className="container mt-8">
        <a
          href="index.html"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </a>
      </div>
      <section className="post-page-container">
        <Description />
        <RelatedPost />
      </section>
    </Fragment>
  );
};

export default PostDetails;
