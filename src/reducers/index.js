import { combineReducers } from "redux";
import MovieReducer from "./reducer_movie";
import LoginReducer from "./reducer_login";

const rootReducer = combineReducers({
  movie: MovieReducer,
  auth: LoginReducer
});

export default rootReducer;
