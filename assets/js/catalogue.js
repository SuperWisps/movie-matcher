window.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".catalogue");
    if (!container) return; // Sécurité : évite erreurs si l'élément n’existe pas

    // Vérifie que "movies" existe et est un tableau
    if (!Array.isArray(movies)) {
        console.error("❌ 'movies' n'est pas défini ou n'est pas un tableau.");
        return;
    }

  window.goToCategory = function(cat) {
    window.location.href = `categorie.html?cat=${encodeURIComponent(cat)}`;
}


    // Génère chaque carte
    movies.forEach(movie => {

        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <span class="category" onclick="goToCategory('${movie.category[0]}')">${movie.category[0]}</span>
        `;

        container.appendChild(card);
    });

});

