import React, { Fragment, useEffect, useState } from "react";
import Post from "./Post";
import {
  getAllBlogThunk,
  likedFunction,
  savedFunction,
} from "@/Redux/ThunkAction";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { IInitialState } from "@/Redux/AllType";

const PostList = () => {
  const dispatch = useAppDispatch();
  const allBlog: any = useAppSelector((state) => state.blog);
  const [showMostLiked, setShowMostLiked] = useState<boolean>(false);
  const [showSaved, setShowSaved] = useState<boolean>(false);
  const [showDefault, setShowDefault] = useState<boolean>(true);
  const [showNewest, setShowNewest] = useState<boolean>(false);

  useEffect(() => {
    dispatch<any>(getAllBlogThunk());
  }, [dispatch]);

  const mostLiked = allBlog
    .slice()
    .sort((a: IInitialState, b: IInitialState) => a.likes < b.likes);

  const saved = allBlog.filter((a: IInitialState) => a.isSaved === true);

  const newest = allBlog
    .slice()
    .sort((a: IInitialState, b: IInitialState) => a.createdAt < b.createdAt);

  const withTag = allBlog.filter((a: IInitialState) => a.tags);

  const mostLikedHandler = () => {
    setShowMostLiked(true);
    setShowSaved(false);
    setShowDefault(false);
    setShowNewest(false);
  };

  const defaultHandler = () => {
    setShowDefault(true);
    setShowMostLiked(false);
    setShowSaved(false);
    setShowNewest(false);
  };

  const savedHandler = () => {
    setShowSaved(true);
    setShowMostLiked(false);
    setShowDefault(false);
    setShowNewest(false);
  };

  const newestHandler = () => {
    setShowNewest(true);
    setShowSaved(false);
    setShowMostLiked(false);
    setShowDefault(false);
  };

  const onLikedHandle = (id: number, blog: IInitialState) => {
    blog.likes += 1;
    dispatch<any>(likedFunction(id, blog));
  };

  const onSavedHandle = (id: number, blog: IInitialState) => {
    blog.isSaved = true;
    dispatch<any>(savedFunction(id, blog));
  };

  return (
    <Fragment>
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            >
              <option value="" onClick={defaultHandler}>
                Default
              </option>
              <option value="newest" onClick={newestHandler}>
                Newest
              </option>
              <option value="most_liked" onClick={mostLikedHandler}>
                Most Liked
              </option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  className="radio"
                  onClick={defaultHandler}
                />
                <label htmlFor="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
                  onClick={savedHandler}
                />
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="post-container" id="lws-postContainer">
        {!showMostLiked &&
          showDefault &&
          !showSaved &&
          !showNewest &&
          allBlog.map((blog: IInitialState) => {
            return (
              <Post
                blog={blog}
                onLikedHandle={onLikedHandle}
                onSavedHandle={onSavedHandle}
              />
            );
          })}
        {showMostLiked &&
          !showDefault &&
          !showSaved &&
          !showNewest &&
          mostLiked.map((blog: IInitialState) => {
            return (
              <Post
                blog={blog}
                onLikedHandle={onLikedHandle}
                onSavedHandle={onSavedHandle}
              />
            );
          })}
        {showSaved &&
          !showDefault &&
          !showMostLiked &&
          !showNewest &&
          saved.map((blog: IInitialState) => {
            return (
              <Post
                blog={blog}
                onLikedHandle={onLikedHandle}
                onSavedHandle={onSavedHandle}
              />
            );
          })}
        {showNewest &&
          !showDefault &&
          !showMostLiked &&
          !showSaved &&
          newest.map((blog: IInitialState) => {
            return (
              <Post
                blog={blog}
                onLikedHandle={onLikedHandle}
                onSavedHandle={onSavedHandle}
              />
            );
          })}
      </div>
    </Fragment>
  );
};

export default PostList;
