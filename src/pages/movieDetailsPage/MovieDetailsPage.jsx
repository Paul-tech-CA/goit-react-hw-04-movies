import axios from 'axios';
import React, { Component } from 'react';
import style from './MovieDetailsPage.module.css';

const key = '2487d6ba70f133fc4d6ed7cf34c84c4e';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: '',
    release_date: '',
    popularity: null,
    overview: '',
    genres: [],
    id: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`,
    );
    // this.setState({ ...response.data });
  }

  render() {
    const {
      poster_path,
      title,
      release_date,
      popularity,
      overview,
      genres,
      id,
    } = this.state;

    return (
      <>
        <h2>one movie page</h2>
        <div>
          <button type="button" className={style.button}>
            Go back
          </button>
          <img src={poster_path} alt={title} />
        </div>
        <div>
          <h1>
            {title} {release_date}
          </h1>
          <p>Use score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
