import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/notFound/NotFound';
import routes from '../routes';
import AppBar from './appBar/AppBar';

const HomePage = lazy(() =>
  import('../pages/homePage/HomePage.jsx' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('../pages/movieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */),
);
const MoviesPage = lazy(() =>
  import('../pages/moviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Downloading... </h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetail} component={MovieDetailsPage} />
          <Route path={routes.moviesSearch} component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
