import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  DELETE_MOVIE
} from "./types";

const fetchMoviePendig = () => ({
  type: FETCH_MOVIE_PENDING
});

const fetchMovieSuccess = json => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: json
});

const fetchMovieError = error => ({
  type: FETCH_MOVIE_ERROR,
  payload: error
});

export const fetchMovie = name => {
  return async dispatch => {
    dispatch(fetchMoviePendig());
    try {
      const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${name}`;
      const response = await fetch(url);
      const result = await response.json(response);

      dispatch(fetchMovieSuccess(result.data));
    } catch (error) {
      dispatch(fetchMovieError(error));
    }
  };
};

export const deleteEvent = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_MOVIE,
      payload: id
    });
  } catch (err) {
    console.log(err);
  }
};
