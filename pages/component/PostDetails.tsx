import React, { Fragment } from "react";
import Description from "./Description";
import RelatedPost from "./RelatedPost";
import Link from "next/link";

const PostDetails = () => {
  return (
    <Fragment>
      <Link href="/">
        <div className="container mt-8">
          <p className="inline-block text-gray-600 home-btn" id="lws-goHome">
            <i className="mr-2 fa-solid fa-house"></i>Go Home
          </p>
        </div>
      </Link>

      <section className="post-page-container">
        <Description />
        <RelatedPost />
      </section>
    </Fragment>
  );
};

export default PostDetails;
