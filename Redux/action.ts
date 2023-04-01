import { IInitialState } from "./AllType";
import { GET_ALL_BLOG, LIKED_BLOG, SAVED_BLOG } from "./actionType";

export const getAllBlog = (blog: IInitialState[]) => {
  return {
    type: typeof GET_ALL_BLOG,
    payload: {
      allBlog: blog,
    },
  };
};

export const likedBlog = (id: number) => {
  return {
    type: LIKED_BLOG,
    payload: {
      id: id,
    },
  };
};

export const savedBlog = (id: number) => {
  return {
    type: SAVED_BLOG,
    payload: {
      id: id,
    },
  };
};
