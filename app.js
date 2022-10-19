const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";
const container = document.getElementById("container");

window.addEventListener("DOMContentLoaded", apiFunction);
document.addEventListener('keyup', e=>{


    if (e.target.matches("#input")){

        if(e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".card").forEach(element => {

            element.textContent.toLowerCase().includes(e.target.value)
            ?element.classList.remove("filter")
            :element.classList.add("filter")
        })
    }
})

function apiFunction() {
    fetch(URL)
    .then(response => response.json())
    .then(data => data["drinks"].map(drinks => {

        const div = document.createElement("div");
        div.classList.add("card");
        
        const img = document.createElement("img");
        img.src = drinks["strDrinkThumb"];
        img.classList.add("img");
        
        const name = document.createElement("h1");
        name.textContent = drinks["strDrink"];
        name.classList.add("name");

        container.appendChild(div);
        div.appendChild(img);
        div.appendChild(name);
    }))
}