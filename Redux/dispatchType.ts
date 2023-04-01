import { IInitialState } from "./AllType";
import { GET_ALL_BLOG, LIKED_BLOG, SAVED_BLOG } from "./actionType";

export interface IDispatchGetAllBlog {
  type: typeof GET_ALL_BLOG;
  payload: {
    allData: IInitialState[];
  };
}

export interface IDispatchLikedBlog {
  type: typeof LIKED_BLOG;
  payload: {
    id: number;
    data: IInitialState;
  };
}

export interface IDispatchSavedBlog {
  type: typeof SAVED_BLOG;
  payload: {
    id: number;
    data: IInitialState;
  };
}
