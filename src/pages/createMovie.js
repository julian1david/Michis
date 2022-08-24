import notFound from '../assets/img/not-found.png';

const IMG_URL = 'https://image.tmdb.org/t/p/w300/';


import registerImage from "../utils/lazy";

function createMovie(movies, container, 
    {   
        lazyLoad = false, 
        clean = false
    } = {} ) {

    console.log(lazyLoad)
    if (clean){
        /*Clear html of page */
        container.innerHTML = "";
    }

    movies.map(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        //Agregamos evento para llevar a movieDetail
        movieContainer.addEventListener('click', () => {
            location.hash = '#movie=' + movie.id;
        })

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute(
            lazyLoad ? 'data-src' : 'src',
            isImage(movie,movieImg)
        )
        if (lazyLoad) {
            registerImage(movieImg);
        }
        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });
}

const isImage = (movie,container) => {
    if (movie.poster_path !== null) {
        return `${IMG_URL}${movie.poster_path}`
    }
    else {
        return notFound
    }
}

export default createMovie;