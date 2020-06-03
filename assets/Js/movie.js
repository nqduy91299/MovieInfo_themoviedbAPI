const movieDetail = document.querySelector('#movieDetail');
const colPoster = document.querySelector('.colPoster');
const colDetail = document.querySelector('.colDetail');


function getGenres(data){
    const genres = data.genres;
    const createGenre = '';
    for (j in genres) {
        createGenre += genres[j].name + ", ";
      }
    console.log('Create Genres: ', createGenre);
    return createGenre;
}


function getMovieDetail(){
    const movieDetailId = sessionStorage.getItem('movieId');
    console.log('MovieId: ', movieDetailId);
    const path = `/movie/${movieDetailId}`;
    const url = generateUrl(path);
  
     // fetch movie videos
     fetch(url)
     .then((res) => res.json())
     .then((data) =>{
        const movieDetail = data;
        console.log('movieDetail: ', movieDetail);
        console.log('Hello: ', IMAGE_URL + data.poster_path);

        const imgDetail = document.createElement('img');
        imgDetail.src = IMAGE_URL + data.poster_path;

        colPoster.appendChild(imgDetail);


        const detail = `
            <h2>${data.title}</h2>
            <ul>
                <li>Release date: ${data.release_date}</li>
                <li>Overview: ${data.overview}</li>
                <li>Country: ${data.production_countries[0].name}</li>
                <li>Status: ${data.status}</li>
                <li>Genre: ${data.genres[0].name}</li>
                <li>Vote Average: ${data.vote_average}% (Vote count: ${data.vote_count})</li>
            </ul>
            <a class="btn btn-success" type="button" href="index.html">Back to home</a>
        `;

        colDetail.innerHTML = detail;
     })
     .catch((error) => {
     console.log("Error: ", error);
   });
}


getMovieDetail();