document.addEventListener('DOMContentLoaded', load);
const logo = document.getElementById("navbar-logo");
const BASE_API = "https://pokeapi.co/api/v2/";
const offset = 0;
async function load() {
    const logedUser = localStorage.getItem("logedUser");
    if (logedUser) {
        logo.innerHTML = logedUser
    } else {
        location.href = 'login.html';
        alert("Debe iniciar Sesión")
    }
    showPokemons();
}

async function getPokemonList() {
    const response = await fetch(`${BASE_API}pokemon/`)
    const data = await response.json();
    return data.results
};

async function getPokemon(poke_url) {
    const response = await fetch(poke_url)
    const data = await response.json();
    return data;
}


async function showPokemons() {
    let htmlContentToAppend = "";
    const pokemonlist = await getPokemonList();
    console.log(pokemonlist)
    for (let i = 0; i < 20; i++) {
        let data = pokemonlist[i];
        const pokeInfo = await getPokemon(data.url);
        const imagen = pokeInfo.sprites.front_default;
        const type = pokeInfo.types[0].type.name;
        htmlContentToAppend += `
            <div onclick="" class="col-12 col-md-4 col-xxl-3 d-flex mt-5">
            <div class="card cursor-active product col-6">
             <img class="card-img-top" src="${imagen}" alt="Card image cap">
             <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">${data.name}</h5>              
                <div class='overflow-auto d-flex justify-content-center' style='height:100px;'>
                    <p>Main Type: ${type}</p>
                </div>
            </div>
        
        </div>
    </div>
`;
    }
    document.getElementById("pokemon-container").innerHTML = htmlContentToAppend;
}
