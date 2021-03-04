import React, { Component } from 'react';
import style from './App.module.css';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
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
