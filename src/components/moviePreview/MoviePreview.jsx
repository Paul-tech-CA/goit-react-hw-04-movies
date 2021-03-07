import React from 'react';
import style from './MoviePreview.module.css';

const MoviePreview = ({ poster_path, title }) => {
  return (
    <div className={style.card}>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />

      <h2 className={style.title}>{title}</h2>
    </div>
  );
};

export default MoviePreview;
