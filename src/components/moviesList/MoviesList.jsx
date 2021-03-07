import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './MoviesList.module.css';
import MoviePreview from '../moviePreview/MoviePreview';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={style.moviesList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={style.movie}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <MoviePreview poster_path={poster_path} title={title} />
          </Link>
          {/* <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link> в match.url приходит / вместо /movies */}
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
