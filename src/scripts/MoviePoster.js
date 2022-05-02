export default function MoviePoster(data) {

    const poster = document.createElement("div");
    const image = document.createElement("img");
    const info = document.createElement("div");
    const title = document.createElement("h3");
    const btnPlay = document.createElement("button");

    poster.className = "poster";

    image.src = `https://image.tmdb.org/t/p/w200${data.poster_path}`;
    image.alt = `Porter do ${data.title}`;

    info.className = "poster-info";

    title.textContent = data.title;
    btnPlay.textContent = "Assistir";

    poster.addEventListener("mouseover", () => {
        poster.childNodes[0].className = "img-focus";
        poster.childNodes[1].style.display = "flex";
    });

    poster.addEventListener("mouseout", () => {
        poster.childNodes[0].className = "";
        poster.childNodes[1].style.display = "none";
    });

    info.appendChild(title);
    info.appendChild(btnPlay);

    poster.appendChild(image);
    poster.appendChild(info);

    return poster;
    
}

