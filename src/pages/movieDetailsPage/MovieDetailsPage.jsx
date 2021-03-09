import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Cast from '../../components/cast/Cast';
import Reviews from '../../components/reviews/Reviews';
import style from './MovieDetailsPage.module.css';
import routes from '../../routes';
// import ContainedButtons from '../../components/button/Button';
import Button from '@material-ui/core/Button';

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
    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.home);
    history.push(location?.state?.from || routes.home);
  };

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
            <div className={style.mainCont}>
              <div>
                <div className={style.buttonBack}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleGoBack}
                  >
                    Go back
                  </Button>
                </div>
                {/* <button
                  type="button"
                  className={style.button}
                  onClick={this.handleGoBack}
                >
                  Go back
                </button> */}
                <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={title}
                />
              </div>
              <div className={style.descriptionCont}>
                <h1>
                  {title} ({parseFloat(release_date)})
                </h1>
                <h3>Use score: {vote_average * 10}%</h3>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                {genres.map(genre => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </div>
            </div>
            <div className={style.additionalCont}>
              <h3>Additional information</h3>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: {
                    from: this.props.location?.state?.from,
                  },
                }}
                className={style.navLink}
                activeClassName={style.activeNavLink}
              >
                Cast
              </NavLink>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: {
                    from: this.props.location?.state?.from,
                  },
                }}
                className={style.navLink}
                activeClassName={style.activeNavLink}
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
