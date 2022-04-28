window.addEventListener('DOMContentLoaded', navigatior, false)
window.addEventListener('hashchange', navigatior, false)

function navigatior() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage()
    } else if (location.hash.startsWith('#movie=')){
        moviesPage();
    }
    else if (location.hash.startsWith('#category=')){
        categoryPage();
    } else {
        homePage();
    }
}

function homePage() {
    console.log('Welcome home');
    getTrendingPreview();
    getCategoriesPreview();
}

function searchPage() {
    console.log('Welcome search');
}
function categoryPage() {
    console.log('Welcome category');
}
function trendsPage() {
    console.log('Welcome trends');
}
function moviesPage() {
    console.log('Welcome movies');
}
