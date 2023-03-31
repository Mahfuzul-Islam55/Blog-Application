import { IInitialState } from "./AllType";
import { GET_ALL_BLOG } from "./actionType";

export const getAllBlog = (blog: IInitialState[]) => {
  return {
    type: GET_ALL_BLOG,
    payload: {
      allBlog: blog,
    },
  };
};
