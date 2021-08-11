/* eslint-disable import/no-anonymous-default-export */
import api from './index.js';
const API_KEY = ''


export default {
    async getOriginals() {
        return {
            slug: "originals",
            title: "Original Netflix",
            items: await api.get(`/discover/tv`, { params: { with_network: 213, language: 'pt-BR', api_key: API_KEY } })
        }
    },

    async getTrending() {
        return {
            slug: "trending",
            title: "Recomendados",
            items: await api.get(`/trending/all/week`, { params: { language: 'pt-BR', api_key: API_KEY } })
        }
    },

    async getTopRated() {
        return {
            slug: "toprated",
            title: "Em Alta",
            items: await api.get(`/movie/top_rated`, { params: { language: 'pt-BR', api_key: API_KEY } })
        }
    },

    async getActionMovie() {
        return {
            slug: "action",
            title: "Ação",
            items: await api.get(`/discover/movie`, { params: { with_genres: 28, language: 'pt-BR', api_key: API_KEY } })
        }
    },

    async getComedyMovie() {
        return {
            slug: "comedy",
            title: "Comédia",
            items: await api.get(`/discover/movie`, { params: { with_genres: 35, language: 'pt-BR', api_key: API_KEY } })
        }
    },

    async getHorrorMovie() {
        return {
            slug: "horror",
            title: "Terror",
            items: await api.get(`/discover/movie`, { params: { with_genres: 27, language: 'pt-BR', api_key: API_KEY } })
        }
    },

    async getRomanceMovie() {
        return {
            slug: "romance",
            title: "Romance",
            items: await api.get(`/discover/movie`, { params: { with_genres: 10749, language: 'pt-BR', api_key: API_KEY } })
        }
    },

    async getDocumentaryMovie() {
        return {
            slug: "documentary",
            title: "Documentário",
            items: await api.get(`/discover/movie`, { params: { with_genres: 99, language: 'pt-BR', api_key: API_KEY } })
        }
    },

    async getMovieInfo(movieId, type) {
        return api.get(`/${type}/${movieId}`, { params: { language: 'pt-BR', api_key: API_KEY } })
    },


};
