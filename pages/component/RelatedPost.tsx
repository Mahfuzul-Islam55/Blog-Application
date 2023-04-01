import { IInitialState } from "@/Redux/AllType";
import React, { Fragment } from "react";

interface props {
  related: IInitialState;
}
const RelatedPost = ({ related }: props) => {
  const { image, title, tags, createdAt } = related;
  console.log("Related: ", related);
  return (
    <Fragment>
      <aside>
        {/* <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4> */}
        {/* <div className="space-y-4 related-post-container"> */}
        <div className="card">
          <a href="/">
            <img src={image} className="card-image" alt="" />
          </a>
          <div className="p-4">
            <a href="/" className="text-lg post-title lws-RelatedPostTitle">
              {title}
            </a>
            <div className="mb-0 tags">
              {tags.map((tag) => {
                return <span>#{tag}, </span>;
              })}
            </div>
            <p>{createdAt}</p>
          </div>
        </div>
        {/* </div> */}
      </aside>
    </Fragment>
  );
};

export default RelatedPost;
