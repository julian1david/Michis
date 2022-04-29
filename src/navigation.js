searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=';
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
    location.hash = "#home"
})

window.addEventListener('DOMContentLoaded', navigatior, false)
window.addEventListener('hashchange', navigatior, false)

function navigatior() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage()
    } else if (location.hash.startsWith('#movie=')){
        movieDetailPage();
    }
    else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }
}

function homePage() {
    console.log('Welcome home');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = ' ';
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

function categoriesPage() {

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

    console.log('Welcome category');
}
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
}
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
}

function searchPage() {
    console.log('Welcome search');
    

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = ' ';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    tendrginPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');


}