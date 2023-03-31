import { IInitialState } from "./AllType";
import { GET_ALL_BLOG } from "./actionType";

export const getAllBlog = (blog: IInitialState[]) => {
  return {
    type: typeof GET_ALL_BLOG,
    payload: {
      allBlog: blog,
    },
  };
};
