import { combineReducers } from "redux";
import auth from "./auth";
import articles from "./Article";
export default combineReducers({
  articles,
  auth
});
