import {getMoviesByCategory} from '../utils/getData';

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

function categoriesPage() {

    console.log('Welcome category');
    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = ' ';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    tendrginPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // => ['#category', 'id-name']
    const [_, categoryData]  = location.hash.split('='); 
    const [categoryId, categoryName ] = categoryData.split('-')

    headerCategoryTitle.innerHTML = categoryName

    getMoviesByCategory(categoryId);
}

export default categoriesPage;