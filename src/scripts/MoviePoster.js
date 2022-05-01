export default function MoviePoster(data) {

    const poster = document.createElement("div");
    const image = document.createElement("img");

    poster.className = "poster";

    image.src = `https://image.tmdb.org/t/p/w200${data.poster_path}`;
    image.alt = `Porter do ${data.title}`;

    poster.appendChild(image);

    return poster;
    
}
