import { Dispatch } from "react";
import { IDispatchGetAllBlog, IDispatchLikedBlog } from "./dispatchType";
import { getAllBlog } from "./action";
import { GET_ALL_BLOG, LIKED_BLOG } from "./actionType";
import { IInitialState } from "./AllType";

export const getAllBlogThunk =
  () => async (dispatch: Dispatch<IDispatchGetAllBlog>) => {
    try {
      const response = await fetch("http://localhost:9000/blogs");
      const data = await response.json();
      dispatch({
        type: GET_ALL_BLOG,
        payload: {
          allData: data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const likedFunction = (id: number, blog: IInitialState) => {
  return async (dispatch: Dispatch<IDispatchLikedBlog>) => {
    try {
      const response = await fetch(`http://localhost:9000/blogs/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      const result = await response.json();
      console.log(result);
      dispatch({
        type: LIKED_BLOG,
        payload: {
          id: id,
          data: blog,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
