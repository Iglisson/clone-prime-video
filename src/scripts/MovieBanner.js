export default function MovieBanner(data) {

    const bannerMovie = document.createElement("div");
    const image = document.createElement("img")
    const info = document.createElement("div");
    const title = document.createElement("h2");
    const btnPlay = document.createElement("button");

    bannerMovie.className = "banner-movie";

    image.src = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
    image.alt = "Filme em destaque";
    bannerMovie.appendChild(image);

    info.className = "banner-movie-info";

    title.textContent = data.original_title;
    info.appendChild(title);

    btnPlay.textContent = "Assista agora";    
    info.appendChild(btnPlay);
    
    bannerMovie.appendChild(info)

    return bannerMovie;

}
