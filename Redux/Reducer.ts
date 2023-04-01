import { IAction, IInitialState } from "./AllType";
import { InitialState } from "./InitialState";
import { GET_ALL_BLOG, LIKED_BLOG, SAVED_BLOG } from "./actionType";

export const BlogReducer = (state = InitialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BLOG:
      return payload.allData;
    case LIKED_BLOG:
      return state.map((blog: IInitialState) => {
        if (blog.id === payload.id) {
          return {
            ...blog,
            likes: blog.likes,
          };
        }
        return {
          ...blog,
        };
      });
    case SAVED_BLOG:
      return state.map((blog: IInitialState) => {
        if (blog.id === payload.id) {
          return {
            ...blog,
            isSaved: blog.isSaved,
          };
        }
        return {
          ...blog,
        };
      });
    default:
      return state;
  }
};
