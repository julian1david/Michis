import {getMoviesBySearch } from '../utils/getData';
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

function searchPage() {
    console.log('Welcome search');    

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = ' ';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    tendrginPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');


     // => ['#search', 'busqueda']
    const [_, query]  = location.hash.split('='); 
    getMoviesBySearch(query)

}

export default searchPage;