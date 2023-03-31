import { IInitialState } from "./AllType";
import { GET_ALL_BLOG } from "./actionType";

export interface IDispatchGetAllBlog {
  type: typeof GET_ALL_BLOG;
  payload: {
    allData: IInitialState[];
  };
}
