import React, { Component } from 'react';
import axios from 'axios';
import style from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/movie/${movieId}/reviews?api_key=${
        process.env.REACT_APP_KEY
      }&language=en-US&page=1`,
    );
    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {!reviews.length ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          <ul className={style.list}>
            {reviews.map(review => (
              <li key={review.author} className={style.item}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
