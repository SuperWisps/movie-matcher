window.addEventListener("DOMContentLoaded", () =>{

    const container = document.querySelector(".catalogue");

    if(!Array.isArray(movies)){
        throw new Error(`la variable ${movies} n'est pas defini ou n'est pas un tableau`);
    }

    window.goToCategory = function(cat) {
        window.location.href = `categorie.html?cat=${encodeURIComponent(cat)}`;
}

    try{
        movies.forEach(movie => {
            const card = document.createElement("div");
            card.className = "movieCard";
            card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <span class="category" onclick="goToCategory('${movie.category[0]}')">${movie.category[0]}</span>
            `;
            container.appendChild(card);
            });
    }
    catch(erreur){
            console.log(erreur)
    }
});