import { IInitialState } from "@/Redux/AllType";
import { likedFunction, savedFunction } from "@/Redux/ThunkAction";
import { useAppDispatch } from "@/Redux/store";
import React, { Fragment } from "react";

interface props {
  blog: IInitialState;
}
const Description = ({ blog }: props) => {
  const dispatch = useAppDispatch();

  const saveHandle = (id: number, blog: IInitialState) => {
    blog.isSaved = true;
    dispatch<any>(savedFunction(id, blog));
  };

  const likeHandle = (id: number, blog: IInitialState) => {
    blog.likes += 1;
    dispatch<any>(likedFunction(id, blog));
  };

  return (
    <Fragment>
      {" "}
      <main className="post">
        <img
          src={blog?.image}
          alt="githum"
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {blog?.title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {blog?.tags.map((tag) => {
              return <span>#{tag}, </span>;
            })}
            {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
          </div>
          <div className="btn-group">
            <button
              className="like-btn"
              id="lws-singleLinks"
              onClick={() => likeHandle(blog.id, blog)}
            >
              <i className="fa-regular fa-thumbs-up"></i> {blog?.likes}
            </button>
            <button className="active save-btn" id="lws-singleSavedBtn">
              {blog?.isSaved ? (
                <i className="fa-regular fa-bookmark">Saved</i>
              ) : (
                <i
                  className="fa-regular fa-bookmark"
                  onClick={() => saveHandle(blog.id, blog)}
                >
                  Save
                </i>
              )}
            </button>
          </div>
          <div className="mt-6">
            <p>{blog?.description}</p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Description;
