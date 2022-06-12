import axios from 'axios';
import createMovie from '../pages/createMovie';
import createCategories from '../pages/createCategories';

const API_KEY = import.meta.env.VITE_API_KEY;

import {
    headerSection,
    movieDetailTitle,
    movieDetailScore, 
    movieDetailDescription,
    movieDetailcategoriesList,
    genericSection,
    trendinMoviesPreviewList,
    categoriesPreviewList,
    relatedMoviesContainer,
} from '../components/nodes';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json:charset==utf-8'
    },
    params: {
        'api_key': API_KEY
    }
})


//llamados a la API

export async function getTrendingPreview() {
    try {
        const { data } = await api.get('/trending/movie/day');
        const movies = data.results;
        createMovie(movies, trendinMoviesPreviewList, true);
        trendinMoviesPreviewList.scrollTo(0, 0);
    }
    catch(error){
        console.log(error);
    }
}

export async function getTrending() {
    const { data } = await api.get('/trending/movie/day');
    const movies = data.results;
    createMovie(movies, genericSection, true);
}

export async function getCategoriesPreview() {
    try{
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY)
        const data = await res.json()
        const categories = data.genres;
        createCategories(categories, categoriesPreviewList)
    }
    catch(error){
        error;
    }

}

export async function getMoviesByCategory(id) {
    const { data } = await api.get('discover/movie', {
        params: {
            with_genres: id,
        }
    });
    const movies = data.results;
    createMovie(movies, genericSection,true);
}

export async function getMoviesBySearch(query) {
    const { data } = await api.get('search/movie', {
        params: {
            //como se llama igual no hay necesidad de de poner más parametros
            query,
        }
    });
    const movies = data.results;
    createMovie(movies, genericSection, true);
}

export async function getMovieById(id) {
    //data lo trae de la consulta a la API y se renombre  asi a movie
    const { data: movie } = await api('movie/' + id);

    const movieImgURl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    headerSection.style.background = `
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35) 19.27%,
            rgba(0, 0, 0, 0) 29.17%),
            url(${movieImgURl})
    `
    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;

    createCategories(movie.genres, movieDetailcategoriesList);
    getRelatedMoviesId(id);
}

export async function getRelatedMoviesId(id) {
    const { data } = await api(`movie/${id}/recommendations`);
    const relatedMovies = data.results;
    createMovie(relatedMovies, relatedMoviesContainer,true);
    //Reiniciar el scroll
    relatedMoviesContainer.scrollTo(0, 0);
}