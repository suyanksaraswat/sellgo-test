import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, deleteEvent } from "./action/movieActions";

import Input from "./components/Input";
import MovieTable from "./components/MovieTable";

import './App.css';

class App extends Component {
  state = {
    searchInput: ""
  };

  componentDidMount() {
    this.props.getMovieList(this.state.searchInput);
  }

  getMovie = () => {
    this.props.getMovieList(this.state.searchInput);
  };

  onChangeHandler = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  render() {
    const { data, loading } = this.props.movies;

    return (
      <div className="container">
        <h2>Movie Search</h2>
        <Input
          value={this.state.searchInput}
          onChange={this.onChangeHandler}
          onClick={this.getMovie}
        />
        <div className="row">
          {loading ? (
            <p>Loading</p>
          ) : (
            <MovieTable
              data={data.map(d => ({
                year: d.Year,
                name: d.Title,
                movieId: d.imdbID
              }))}
              deleteEvent={id => this.props.deleteEvent(id)}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieList: name => dispatch(fetchMovie(name)),
    deleteEvent: id => dispatch(deleteEvent(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
