import { IAction } from "./AllType";
import { InitialState } from "./InitialState";

export const BlogReducer = (state = InitialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
