import React, { useState, useEffect } from 'react';

import Home from './pages/Home';

const App = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    const storageMovies = JSON.parse(localStorage.getItem('OwnMovies'));

    setMyMovies(storageMovies);
  }, []);

  useEffect(() => {
    console.log(myMovies, 'appefect');
    localStorage.setItem('OwnMovies', JSON.stringify(myMovies));
  }, [myMovies]);

  return (
    <Home
      popularMovie={popularMovie}
      setPopularMovie={setPopularMovie}
      myMovies={myMovies}
      setMyMovies={setMyMovies}
    />
  );
};

export default App;
