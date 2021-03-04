import axios from 'axios';
import React, { Component } from 'react';
import style from './HomePage.module.css';
import { Link } from 'react-router-dom';

const key = '2487d6ba70f133fc4d6ed7cf34c84c4e';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <h1>movies</h1>
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
