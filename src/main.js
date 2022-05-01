const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json:charset==utf-8'
    },
    params: {
        'api_key': API_KEY
    }
})


// Utils

function createMovie( movies, container) {
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

function createCategories(categories, container){   
    container.innerHTML = "";

    categories.map(category => {

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`
        })
        const categoryTitleText = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
}
//llamados a la API

async function getTrendingPreview() {
    const { data } = await api.get('/trending/movie/day');
    const movies = data.results;
    createMovie(movies,trendinMoviesPreviewList );
}

async function getTrending() {
    const { data } = await api.get('/trending/movie/day');
    const movies = data.results;
    createMovie(movies,genericSection );
}

async function getCategoriesPreview(){
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY)
    const data = await res.json()
    const categories = data.genres;
    createCategories(categories, categoriesPreviewList)
    
}

async function  getMoviesByCategory(id) {
    const { data } = await api.get('discover/movie', {
        params: {
            with_genres: id,
        }
    });
    const movies = data.results;
    createMovie(movies,genericSection );
}

async function  getMoviesBySearch(query) {
    const { data } = await api.get('search/movie', {
        params: {
            //como se llama igual no hay necesidad de de poner más parametros
            query,
        }
    });
    const movies = data.results;
    createMovie(movies,genericSection );
}

async function getMovieById(id) {
    //data lo trae de la consulta a la API y se renombre  asi a movie
    const { data: movie } = await api('movie/' + id);

    const movieImgURl =  `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    headerSection.style.background =`
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35) 19.27%,
            rgba(0, 0, 0, 0) 29.17%),
            url(${movieImgURl})
    `
    console.log(headerSection.style.background);

    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent =  movie.overview;
    movieDetailScore.textContent =  movie.vote_average;

    createCategories(movie.genres, movieDetailcategoriesList)
}

/* async function getMovieById(id) {
    const { data: movie } = await api('movie/' + id);
  
    const movieImgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    console.log(movieImgUrl)
    headerSection.style.background = `
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.35) 19.27%,
        rgba(0, 0, 0, 0) 29.17%
      ),
      url(${movieImgUrl})
    `;
    
    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;
  
    createCategories(movie.genres, movieDetailCategoriesList);
  } */