import React, { useEffect, useState } from 'react';

// Global CSS
import './App.css'

// Service
import TmdbService from './service/Tmdb'

// Components
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';


function App() {
    const [movies, setMovies] = useState([]);
    const [blackHeader, setBlackHeader] = useState(false)
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
        init()

        const scrollListener = () => {
            window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false)
        }
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

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
        const originals = list.filter(movie => movie.slug === 'originals');
        const randomChosen = Math.floor(Math.random() * (originals[0].items.data.results.length - 1))
        const chosen = originals[0].items.data.results[randomChosen]
        const { data } = await TmdbService.getMovieInfo(chosen.id, 'tv')

        setMovies(list)
        setFeaturedData(data)
    }


    return (
        <div className="page">

            <Header black={blackHeader} />

            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }

            <section className="lists">
                {movies.map((movie, index) => (
                    <MovieRow key={index} title={movie.title} items={movie.items} />
                ))}
            </section>

            <footer>
                Feito <span role="img" aria-label="coração">❤️</span> em Live <a href="https://www.youtube.com/watch?v=tBweoUiMsDg">Youtube</a> para estudo de react. <br />
                Todos os direitos das imagens são da Netflix.<br />
                Dados Extraidos de <a href="https://www.themoviedb.org/">The Movie DB (API)</a>
            </footer>

            {movies.length <= 0 &&
                <div className="loading">
                    <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
                </div>
            }

        </div>);
}

export default App;