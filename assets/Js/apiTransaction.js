//Initial Values
const API_KEY = 'a07414464c39bdaf3d1eaf35a677b923';
const IMAGE_URL ='https://image.tmdb.org/t/p/w500';

const url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;


function generateUrl(path){
    const url = `https://api.themoviedb.org/3${path}?api_key=${API_KEY}`;
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
    const render = renderSearchMovies.bind({value: value})
    requestMovie(url, render, hanldeError)
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


  