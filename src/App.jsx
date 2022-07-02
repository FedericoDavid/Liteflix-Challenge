import React, { useState } from 'react';

import Home from './pages/Home';

const App = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    const storageMovies = JSON.parse(localStorage.getItem('ownMovies')) ?? [];

    setMyMovies(storageMovies);
  }, []);

  useEffect(() => localStorage.setItem('MyMovies', JSON.stringify(myMovies)), [myMovies]);

  return (
    <>
      <Home popularMovie={popularMovie} setPopularMovie={setPopularMovie} myMovies={myMovies} />
    </>
  );
};

export default App;
