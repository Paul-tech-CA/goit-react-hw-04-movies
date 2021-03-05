import React, { Component } from 'react';
import style from './App.module.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import MoviesPage from '../pages/moviesPage/MoviesPage';
import MovieDetailsPage from '../pages/movieDetailsPage/MovieDetailsPage';
import NotFound from '../pages/notFound/NotFound';
import routes from '../routes';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={style.navLink}
            activeClassName={style.activeNavLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={routes.moviesSearch}
            className={style.navLink}
            activeClassName={style.activeNavLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetail} component={MovieDetailsPage} />
        <Route path={routes.moviesSearch} component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
