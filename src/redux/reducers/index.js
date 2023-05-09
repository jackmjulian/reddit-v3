import { combineReducers } from "redux";
import { postReducer, selectedPostReducer } from "./productReducer";

const reducers = combineReducers({
  allPosts: postReducer,
  post: selectedPostReducer,
});

export default reducers;
