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