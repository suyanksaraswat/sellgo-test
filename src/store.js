import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import movieReducer from "./reducer/movieReducer";

const middleweres = [thunk, logger];

const reducers = combineReducers({
  movies: movieReducer
});

const store = createStore(reducers, compose(applyMiddleware(...middleweres)));

export default store;
