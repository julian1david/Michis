const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json:charset==utf-8'
    },
    params: {
        'api_key': API_KEY
    }
})

const getTrendingPreview = async () => {
    const { data } = await api.get('/trending/movie/day');
    const movies = data.results

    movies.map(movie => {
        const trendingPreviewMoviesContainer = document.querySelector
        ('.trendingPreview-movieList')

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 
        `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

const getCategoriesPreview = async () => {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY)
    const data = await res.json()
    const categories = data.genres;

    categories.map(category => {
        const previewCategoriesContainer = document.querySelector
        ('#categoriesPreview .categoriesPreview-list')

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle)
        previewCategoriesContainer.appendChild(categoryContainer);
    });
}