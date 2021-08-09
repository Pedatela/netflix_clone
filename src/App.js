import React, { useEffect, useState } from 'react';

// Global CSS
import './App.css'

// Service
import TmdbService from './service/Tmdb'

// Components
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';


function App() {
  const [movies, setMovies] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

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
    setMovies(list)
    const originals = list.filter(movie => movie.slug === 'originals');
    const randomChosen = Math.floor(Math.random() * (originals[0].items.data.results.length - 1))
    const chosen = originals[0].items.data.results[randomChosen]
    setFeaturedData(chosen)
  }


  return (
    <div className="page">
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movies.map((movie, index) => (
          <MovieRow key={index} title={movie.title} items={movie.items} />
        ))}
      </section>
    </div>);
}

export default App;