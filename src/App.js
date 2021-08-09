import React, { useEffect, useState } from 'react';

// Service
import TmdbService from './service/Tmdb'

// import { Container } from './styles';

function App() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const list = [
      await TmdbService.getDocumentaryMovie(),
      await TmdbService.getRomanceMovie(),
      await TmdbService.getActionMovie(),
      await TmdbService.getComedyMovie(),
      await TmdbService.getHorrorMovie(),
      await TmdbService.getOriginals(),
      await TmdbService.getTrending(),
      await TmdbService.getTopRated()
    ]
    console.log(list)
    setMovies(list)
  }


  return (
    <div>
      {movies.map((movie, index) => (
        <div>{movie.title} </div>
      ))}
    </div>);
}

export default App;