import React, { useEffect, useState } from 'react';

// Global CSS
import './App.css'

// Service
import TmdbService from './service/Tmdb'

// Components
import MovieRow from './components/MovieRow';

function App() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const list = [
      await TmdbService.getOriginals(),
      await TmdbService.getTrending(),
      await TmdbService.getTopRated(),
      await TmdbService.getActionMovie(),
      await TmdbService.getComedyMovie(),
      await TmdbService.getHorrorMovie(),
      await TmdbService.getRomanceMovie(),
      await TmdbService.getDocumentaryMovie(),
    ]
    console.log(list)
    setMovies(list)
  }


  return (
    <div>
      {movies.map((movie, index) => (
        <MovieRow key={index} title={movie.title} items={movie.items} />
      ))}
    </div>);
}

export default App;