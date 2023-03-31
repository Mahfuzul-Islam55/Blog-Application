import Link from "next/link";
import React, { Fragment } from "react";

const Post = () => {
  return (
    <Fragment>
      <Link href="/component/PostDetails">
        <div className="lws-card">
          <p>
            <img src="/git.webp" className="lws-card-image" alt="" />
          </p>
          <div className="p-4">
            <div className="lws-card-header">
              <p className="lws-publishedDate">2023-05-01</p>
              <p className="lws-likeCount">
                <i className="fa-regular fa-thumbs-up"></i>100
              </p>
            </div>
            <p className="lws-postTitle"> Top Github Alternatives </p>
            <div className="lws-tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="lws-badge"> Saved </span>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Post;
