import { combineReducers } from "redux";
import { BlogReducer } from "./Reducer";

export const rootReducer = combineReducers({
  blog: BlogReducer,
});
