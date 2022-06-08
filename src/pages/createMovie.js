function createMovie(movies, container) {
    container.innerHTML = "";

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
        movieImg.setAttribute('src',
            `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });
}

export default createMovie;