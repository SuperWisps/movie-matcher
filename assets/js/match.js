let currentIndex = 0;
let currentUser = "A";

const votesA = {};
const votesB = {};

// Elements du DOM
const userBanner = document.getElementById("userBanner");
const sectionTinder = document.getElementById("sectionTinder");
const sectionMatch = document.getElementById("sectionMatch");
const movieContainer = document.getElementById("movieContainer");
const matchesContainer = document.getElementById("matches");
const toast = document.getElementById("toast");

// ----------------------------
// Utilitaires
// ----------------------------

// Shuffle simple + performant
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mélange des films au début
shuffle(movies);

function updateBanner() {
    userBanner.textContent = "Utilisateur " + currentUser;
}

// ----------------------------
// Affichage d’un film
// ----------------------------
function showMovie() {
    console.log("showMovie → index =", currentIndex);

    if (currentIndex >= movies.length) {
        console.log("Fin des films pour", currentUser);
        finishUser(); // ⬅️ CHANGEMENT D'UTILISATEUR
        return;
    }

    const movie = movies[currentIndex];
    if (!movie) return console.warn("Film introuvable à cet index :", currentIndex);

    moviePoster.src = movie.image;
    movieTitle.textContent = movie.title;
    movieDescription.textContent = movie.description;
}



// ----------------------------
// Vote "like / dislike"
// ----------------------------
function vote(liked) {
    if (currentUser === "A") votesA[currentIndex] = liked;
    else votesB[currentIndex] = liked;

    currentIndex++;
    showMovie();
}


// ----------------------------
// Toast de transition utilisateur
// ----------------------------
function notifyUserSwitch(message = "Passage à l’utilisateur B") {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ----------------------------
// Passage à l’autre utilisateur
// ----------------------------
function finishUser() {

    // A → B
    if (currentUser === "A") {

        currentUser = "B";
        currentIndex = 0;

        // Réaffiche la zone Tinder
        sectionMatch.classList.add("hidden");
        sectionTinder.classList.remove("hidden");

        updateBanner();
        notifyUserSwitch("C'est au tour de l'utilisateur B ✨");

        showMovie();
        return;
    }

    // B → Fin
    computeMatches();

}


// ----------------------------
// Calcul des matchs
// ----------------------------
function computeMatches() {
    sectionTinder.classList.add("hidden");
    sectionMatch.classList.remove("hidden");

    const matchedMovies = movies.filter(m =>
        votesA[m.id] === true && votesB[m.id] === true
    );

    // Aucun match
    if (matchedMovies.length === 0) {
        matchesContainer.innerHTML = "<p>Aucun match 😢</p>";
        return;
    }

    const grid = document.createElement("div");
    grid.className = "match-grid";

    matchedMovies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "match-card";

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
        `;

        grid.appendChild(card);
    });

    matchesContainer.appendChild(grid);
}

// ----------------------------
// INITIALISATION
// ----------------------------
updateBanner();
showMovie();
