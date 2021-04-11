const movieDetail = document.querySelector('#movieDetail');
const colPoster = document.querySelector('.colPoster');
const colDetail = document.querySelector('.colDetail');
const colTrailer = document.querySelector('.colTrailer');


function getGenres(data){
    const genres = data.genres;
    const createGenre = '';
    for (j in genres) {
        createGenre += genres[j].name + ", ";
      }
    return createGenre;
}

function getGenres(movie){
    let genres = '';
    for(let x of movie){
        genres += x.name + ', ';
    }
    let lengthG = genres.length -2;
    let newGenres = genres.slice(0, lengthG);
    return newGenres;
}

function getCountry(movie){
    let country = '';
    for(let x of movie){
        country += x.name + ', ';
    }
    let lengthC = country.length -2;
    let newCountry = country.slice(0, lengthC);
    return newCountry;
}

function getLanguage(movie){
    let language = '';
    for(let x of movie){
        language += x.name + ', ';
    }
    let lengthC = language.length -2;
    let newLanguage = language.slice(0, lengthC);
    return newLanguage;
}



function getMovieDetail(){
    const movieDetailId = sessionStorage.getItem('movieId');
    const path = `/movie/${movieDetailId}`;
    const url = generateUrl(path);
  
     // fetch movie videos
     fetch(url)
     .then((res) => res.json())
     .then((data) =>{
        const movieDetail = data;
        

        const imgDetail = document.createElement('img');
        imgDetail.src = IMAGE_URL + movieDetail.poster_path;

        colPoster.appendChild(imgDetail);


        const detail = `
            <h2 class="text-uppercase">${movieDetail.title}</h2>
            <ul>
                <li>Release date: ${movieDetail.release_date}</li>
                <li>Overview: ${movieDetail.overview}</li>
                <li>Country: ${getCountry(movieDetail.production_countries)}</li>
                <li>Status: ${movieDetail.status}</li>
                <li>Genre: ${getGenres(movieDetail.genres)}</li>
                <li>Language: ${getLanguage(movieDetail.spoken_languages)}</li>
                <li>Vote Average: ${movieDetail.vote_average}% (Vote count: ${movieDetail.vote_count})</li>
            </ul>
        `;

        colDetail.innerHTML = detail;
     })
     .catch((error) => {
     console.error("Error: ", error);
   });
}

function getTrailer(){
    const movieDetailId = sessionStorage.getItem('movieId');
    const path = `/movie/${movieDetailId}/videos`;
    const url = generateUrl(path);
  
     // fetch movie videos
     fetch(url)
     .then((res) => res.json())
     .then((data) =>{
        const movieDetail = data;
        createVideosTemplate(data, colTrailer);
     })
     .catch((error) => {
     console.error("Error: ", error);
   });
}

getTrailer();
getMovieDetail();