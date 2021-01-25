import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  DELETE_MOVIE
} from "../action/types";

const initialState = {
  data: [],
  loading: false,
  error: ""
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        data: state.data.filter(movie => movie.imdbID !== action.payload)
      };
    default:
      return state;
  }
};

export default moviesReducer;
