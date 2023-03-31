import React, { Fragment, useEffect } from "react";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { getAllBlogThunk } from "@/Redux/ThunkAction";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { IInitialState } from "@/Redux/AllType";

const PostList = () => {
  const dispatch = useAppDispatch();
  const allBlog: any = useAppSelector((state) => state.blog);

  useEffect(() => {
    dispatch<any>(getAllBlogThunk());
    console.log("sdlfsad");
  }, [dispatch]);
  return (
    <Fragment>
      <div className="post-container" id="lws-postContainer">
        {allBlog.map((blog: IInitialState) => {
          return <Post blog={blog} />;
        })}
      </div>
    </Fragment>
  );
};

export default PostList;
