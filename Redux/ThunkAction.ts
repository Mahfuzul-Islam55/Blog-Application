import { Dispatch } from "react";
import { IDispatchGetAllBlog } from "./dispatchType";
import { getAllBlog } from "./action";
import { GET_ALL_BLOG } from "./actionType";

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
