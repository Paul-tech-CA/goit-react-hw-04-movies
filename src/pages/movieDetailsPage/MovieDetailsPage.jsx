import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Cast from '../../components/cast/Cast';
import Reviews from '../../components/reviews/Reviews';
import style from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: '',
    release_date: '',
    vote_average: null,
    overview: '',
    genres: [],
    id: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/movie/${movieId}?api_key=${
        process.env.REACT_APP_KEY
      }`,
    );
    // console.log(response.data);
    this.setState({ ...response.data });
  }

  render() {
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
      id,
    } = this.state;
    const { match } = this.props;
    return (
      <>
        {id && (
          <>
            <div>
              <button type="button" className={style.button}>
                Go back
              </button>
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
              />
            </div>
            <div>
              <h1>
                {title} ({parseFloat(release_date)})
              </h1>
              <p>Use score: {vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              {genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </div>
            <div>
              <p>Additional information</p>
              <NavLink
                to={`${match.url}/cast`}
                className="navLink"
                activeClassName="activeNavLink"
              >
                Cast
              </NavLink>
              <NavLink
                to={`${match.url}/reviews`}
                className="navLink"
                activeClassName="activeNavLink"
              >
                Reviews
              </NavLink>
              <Switch>
                <Route path={`${match.path}/cast`} component={Cast} />
                <Route path={`${match.path}/reviews`} component={Reviews} />
              </Switch>
            </div>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
