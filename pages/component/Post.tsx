import { IInitialState } from "@/Redux/AllType";
import Link from "next/link";
import React, { Fragment } from "react";

type props = {
  blog: IInitialState;
};
const Post = ({ blog }: props) => {
  const { id, title, description, image, tags, likes, isSaved, createdAt } =
    blog;
  return (
    <Fragment>
      <Link href="/component/PostDetails">
        <div className="lws-card">
          <p>
            <img src={image} className="lws-card-image" alt="" />
          </p>
          <div className="p-4">
            <div className="lws-card-header">
              <p className="lws-publishedDate">{createdAt}</p>
              <p className="lws-likeCount">
                <i className="fa-regular fa-thumbs-up"></i>
                {likes}
              </p>
            </div>
            <p className="lws-postTitle"> {title} </p>
            <div className="lws-tags">
              {tags.map((tag) => {
                return <span>#{tag},</span>;
              })}
              {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
            </div>
            <div className="flex gap-2 mt-4">
              {isSaved ? (
                <span className="lws-badge"> Saved </span>
              ) : (
                <span className="lws-badge"> Save </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Post;
