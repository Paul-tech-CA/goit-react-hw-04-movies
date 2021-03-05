import React, { Component } from 'react';
import axios from 'axios';
import style from './Cast.module.css';
import img from '../../images/notfound.png';

class Cast extends Component {
  state = {
    actors: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/movie/${movieId}/credits?api_key=${
        process.env.REACT_APP_KEY
      }&language=en-US`,
    );
    console.log(response.data.cast);
    this.setState({ actors: response.data.cast });
  }

  render() {
    return (
      <ul className={style.list}>
        {this.state.actors.map(actor => {
          const srcImg = `https://image.tmdb.org/t/p/w300/${
            actor.profile_path
          }`;
          return (
            <li key={actor.id} className={style.item}>
              <img
                src={actor.profile_path ? srcImg : img}
                alt={actor.name}
                className={style.image}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cast;
