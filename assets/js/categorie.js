// Récupération de la catégorie dans l'URL
const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

// Affichage du titre
// document.getElementById("category-title").innerHTML = `
//  <h2>Films : ${cat}</h2>
// `;

// Filtrage
const filtered = movies.filter(movie => movie.category.includes(cat));

// Affichage
const container = document.querySelector(".catalogue");

filtered.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>${movie.year}</p>
  `;

  container.appendChild(card);
});