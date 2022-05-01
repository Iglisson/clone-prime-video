import MovieBanner from "./MovieBanner.js";
import MoviePoster from "./MoviePoster.js";

const moviesPosters = document.querySelector(".movies-posters");

fetch('https://api.themoviedb.org/3/movie/popular?api_key=ad74e36661103b1b308fa1efadf74011&language=pt-BR&page=1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.map((obj, index) => {
            if (index > 16) return;
            else if(index == 0) {
                const banner = document.querySelector(".banner");
                const bannerMovie = MovieBanner(obj);
                banner.appendChild(bannerMovie); 
            }
            else {
                const poster = MoviePoster(obj);
                moviesPosters.appendChild(poster);
            }
        });
    });