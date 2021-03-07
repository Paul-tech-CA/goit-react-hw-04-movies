import axios from 'axios';
import React, { Component } from 'react';
import style from './MoviesPage.module.css';
// import { Link } from 'react-router-dom';
// import MoviePreview from '../../components/moviePreview/MoviePreview';
import MoviesList from '../../components/moviesList/MoviesList';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    total_pages: 1,
  };

  onHandleChange = event => {
    if (!event.target.value) {
      this.setState({ total_pages: 1 });
    }
    this.setState({ query: event.target.value });
  };

  onHandleSubmit = async event => {
    event.preventDefault();
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/search/movie?api_key=${
        process.env.REACT_APP_KEY
      }&language=en-US&query=${this.state.query}&page=1&include_adult=false`,
    );

    this.setState({
      movies: response.data.results,
      total_pages: response.data.total_pages,
    });
  };
  render() {
    const { query, movies, total_pages } = this.state;
    return (
      <>
        <form className={style.movieForm} onSubmit={this.onHandleSubmit}>
          <label className={style.label}>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Type the name of movie"
              name="input"
              className={style.movieFormInput}
              value={query}
              onChange={this.onHandleChange}
            />
          </label>
          <button className={style.buttonSearch} type="submit">
            Search
          </button>
        </form>
        <>
          {!total_pages ? (
            <h3>Unknown input try one more time</h3>
          ) : (
            <MoviesList movies={movies} />
          )}
        </>
      </>
    );
  }
}

export default MoviesPage;
