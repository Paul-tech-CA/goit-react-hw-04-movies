import React from 'react';
import style from '../App.module.css';
import Navigation from '../Navigation';

const AppBar = () => {
  return (
    <>
      <header className={style.appBar}>
        <Navigation />
      </header>
    </>
  );
};

export default AppBar;
