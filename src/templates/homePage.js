import {getTrendingPreview, getCategoriesPreview} from '../utils/getData';
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

function homePage() {
    console.log('Welcome home');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    tendrginPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');


    getTrendingPreview();
    getCategoriesPreview();
}

export default homePage;