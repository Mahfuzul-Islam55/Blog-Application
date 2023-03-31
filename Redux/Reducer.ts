import { IAction, IInitialState } from "./AllType";
import { InitialState } from "./InitialState";
import { GET_ALL_BLOG } from "./actionType";

export const BlogReducer = (state = InitialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BLOG:
      return payload.allData;
    default:
      return state;
  }
};
