//Initial Values
const API_KEY = 'aa265e2ee81086407422d3d33b386cef';
const IMAGE_URL ='https://image.tmdb.org/t/p/w500';

const url ='https://api.themoviedb.org/3/search/movie?api_key=aa265e2ee81086407422d3d33b386cef';


function generateUrl(path){
    const url = `https://api.themoviedb.org/3${path}?api_key=aa265e2ee81086407422d3d33b386cef`;
    return url;
}
  
function requestMovie(url, onComplete, onError){
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function searchMovie(value){
    const path = '/search/movie';
    const url = generateUrl(path) + "&query=" + value;

    requestMovie(url, renderSearchMovies, hanldeError)
}


function getUpcomingMovie(){
    const path = '/movie/upcoming';
    const url = generateUrl(path);
    const render = renderMovies.bind({title: 'Upcoming Movies'});

    requestMovie(url, render, hanldeError)
}

function getTopratedMovie(){
    const path = '/movie/top_rated';
    const url = generateUrl(path);
    const render = renderMovies.bind({title: 'Top Rated Movies'});

    requestMovie(url, render, hanldeError)
}


  