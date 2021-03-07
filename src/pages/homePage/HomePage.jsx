import axios from 'axios';
import React, { Component } from 'react';
import MoviesList from '../../components/moviesList/MoviesList';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/trending/movie/day?api_key=${
        process.env.REACT_APP_KEY
      }`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
