import homePage from "../templates/homePage";
import trendsPage from "../templates/trendsPage";
import movieDetailPage from '../templates/movieDetailPage'
import searchPage from '../templates/searchPage'
import categoriesPage from '../templates/categoryPage'

import {searchFormBtn , trendingBtn, arrowBtn, searchFormInput} from '../components/nodes';


searchFormBtn.addEventListener('click', () => {
    /* Metodo trim lo usamos para truncar los espacios en blanco al principio y al final */ 
    location.hash = `#search=${searchFormInput.value.split(" ").join('')}`;
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
    history.back();
    /* location.hash = "#home"; */
})

function navigator() {

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        movieDetailPage();
    }
    else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


export default navigator;






