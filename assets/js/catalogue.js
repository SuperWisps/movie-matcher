window.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#catalogue");
    if (!container) return; // Sécurité : évite erreurs si l'élément n’existe pas

    // Vérifie que "movies" existe et est un tableau
    if (!Array.isArray(movies)) {
        console.error("❌ 'movies' n'est pas défini ou n'est pas un tableau.");
        return;
    }

    // Génère chaque carte
    movies.forEach(movie => {

        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <span class="category">${movie.category}</span>
        `;

        container.appendChild(card);
    });
});
