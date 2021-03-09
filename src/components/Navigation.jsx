import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import style from './App.module.css';

const Navigation = () => {
  return (
    <div className={style.box}>
      <nav className={style.nav}>
        <NavLink
          exact
          to={routes.home}
          className={style.navLink}
          activeClassName={style.activeNavLink}
        >
          Home
        </NavLink>

        <NavLink
          to={routes.moviesSearch}
          className={style.navLink}
          activeClassName={style.activeNavLink}
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
