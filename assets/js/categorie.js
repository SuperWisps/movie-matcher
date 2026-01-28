const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");
const filtered = movies.filter(movie => movie.category.includes(cat));
const container = document.querySelector(".catalogue");

// Affichage du titre
// document.getElementById("category-title").innerHTML = `
//  <h2>Films : ${cat}</h2>
// `;

if(!Array.isArray(movies)){
        throw new Error(`la variable ${movies} n'est pas defini ou n'est pas un tableau`);
}

try{
    filtered.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movieCard";
        card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
    `;
    container.appendChild(card);
    });
}
catch(erreur){
    console.log(erreur)
}