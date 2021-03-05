import axios from 'axios';
import React, { Component } from 'react';
import style from './HomePage.module.css';
import { Link } from 'react-router-dom';

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
    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <h1>Trending today</h1>
        <ul className={style.moviesList}>
          {this.state.movies.map(movie => (
            <li key={movie.id} className={style.movie}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
