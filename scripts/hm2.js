const form = document.getElementById("search-form");
const movieTitle = document.getElementById("movie-title")
const movieType = document.getElementById("movie-type")
const container = document.getElementById("movies-container")

const apiKey = "f07fcaf0";

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const movie = movieTitle.value;
    const type = movieType.value;
    try {
        const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}&type=${type}`
        );
        if (!response.ok) {
        throw new Error("Movie not found");
        }
        const data = await response.json();
            if (data.Response === "False") {
                throw new Error(data.Error);
            }
        const movies = data.Search;
        movies.forEach(movie => {
            container.innerHTML += `
                <div class="movie-card">
                    <img src="${movie.Poster}">
                    <h3>${movie.Title}</h3>
                    <p>Type: ${movie.Type}</p>
                    <p>Year: ${movie.Year}</p>
                    <button
                        class="details-btn"
                        data-id="${movie.imdbID}"
                    >
                        Details
                    </button>
                </div>
            `;
        })
        container.addEventListener(
            'click',
            (e) => {

                if (
                    e.target.classList.contains(
                        'details-btn'
                    )
                ) {

                    showMovieDetails(
                        e.target.dataset.id
                    );

                }

            }
        );
        document
            .getElementById(
                'close-modal'
            )
            .addEventListener(
                'click',
                () => {

                    document
                        .getElementById(
                            'movie-modal'
                        )
                        .classList
                        .remove('active');

                }
            );
    }
    catch (error) {
        container.innerHTML = `
        <p>${error.message}</p>
        `;
    }
});
async function showMovieDetails(imdbID) {
    try {
        const response =
            await fetch(
                `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
            );
        const movie =
            await response.json();
        const detailsContainer =
            document.getElementById(
                'movie-details'
            );
        detailsContainer.innerHTML = `
            <img
                src="${movie.Poster}"
            >
            <div class="movie-details-info">
                <h2>
                    ${movie.Title}
                </h2>

                <p>
                    Release:
                    ${movie.Released}
                </p>

                <p>
                    Genre:
                    ${movie.Genre}
                </p>

                <p>
                    Country:
                    ${movie.Country}
                </p>

                <p>
                    Director:
                    ${movie.Director}
                </p>

                <p>
                    Writer:
                    ${movie.Writer}
                </p>

                <p>
                    Actors:
                    ${movie.Actors}
                </p>

                <p>
                    Awards:
                    ${movie.Awards}
                </p>

            </div>
        `;
        document
            .getElementById(
                'movie-modal'
            )
            .classList
            .add('active');
    }
    catch(error) {
        console.error(error);
    }
}