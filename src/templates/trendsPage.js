import {getTrending } from '../utils/getData';
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

function trendsPage() {
    console.log('Welcome trends');

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

    headerCategoryTitle.innerHTML = "Tendencias";

    getTrending;
}

export default trendsPage;