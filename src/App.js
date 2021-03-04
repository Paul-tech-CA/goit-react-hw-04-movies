import React, { Component } from 'react';
import style from './App.module.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import MoviesPage from './pages/moviesPage/MoviesPage';
import MovieDetailsPage from './pages/movieDetailsPage/MovieDetailsPage';
import Cast from './components/cast/Cast';
import Reviews from './components/rewiews/Reviews';
import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={style.navLink}
            activeClassName={style.activeNavLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies"
            className={style.navLink}
            activeClassName={style.activeNavLink}
          >
            Movies
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/movies/:movieId"
            className={style.navLink}
            activeClassName={style.activeNavLink}
          >
            Movie detail page
          </NavLink>
        </li> */}
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className={style.header}>
//         <h1>Films</h1>
//       </div>
//     );
//   }
// }

// export default App;
