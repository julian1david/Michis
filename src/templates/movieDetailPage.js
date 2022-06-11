import {getMovieById } from '../utils/getData';

import {headerSection, 
    arrowBtn, 
    headerTitle,
    headerCategoryTitle,
    searchForm,
    tendrginPreviewSection,
    categoriesPreviewSection,
    genericSection,
    movieDetailSection
} from '../components/nodes'

function movieDetailPage() {
    console.log('Welcome movies');

    headerSection.classList.add('header-container--long');
    // headerSection.style.background = ' ';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    tendrginPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    // => ['#search', 'busqueda']
    const [_, movieId]  = location.hash.split('='); 
    getMovieById(movieId);
}

export default movieDetailPage;