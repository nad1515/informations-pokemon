

let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest () {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
    return response.data;
}


let main = document.createElement('main');
document.body.appendChild(main);
// Créez une liste select pour contenir les éléments pokemons
let pokemonList = document.createElement('select'); 
pokemonList.setAttribute('id', 'pokemonList');           
main.appendChild(pokemonList);

let contenair = document.createElement("div");
contenair.classList.add("contenair");
main.appendChild(contenair);

let lesStats = document.createElement("table");
contenair.appendChild(lesStats);

let image = document.createElement('img');
image.setAttribute('id','pokemon-img');
contenair.appendChild(image);


//...............afficher la list des pokemons avec une boucle foreach...........
let optionDefault = document.createElement("option");
optionDefault.innerText = "--Choix Pokemon--";//....choisir de rien afficher au depart et cest au client de choisir son pokemon.....
optionDefault.value = "0";
pokemonList.appendChild(optionDefault);

datasAxios.forEach(pokemon => {  // recuperer la liste des pokemons..............
console.log("pokemon,", pokemon);
let option = document.createElement('option');
option.innerText = pokemon.name;
pokemonList.appendChild(option);
});
        // ..............faire un edventlisstener pour chaque chois il ya un chang et option....
       //........cherches les elements(proprietés) de chaque pokemon........

      // Le code pour gérer la sélection d'un Pokémon
document.querySelector("select").addEventListener("change", () => {
 document.querySelector("table").innerHTML = "";
 let PokemonName = document.querySelector("select").value;
 if (document.querySelector("select").value == "0") {
 document.querySelector(".contenair img").removeAttribute("src");
 } else {
         
        // Trouver le Pokémon sélectionné
 let selectePokemon = datasAxios.find((element) => element.name === PokemonName);
 image.setAttribute("src", selectePokemon.image);
       

          // Afficher les statistiques

 for (let [propriete, valeur] of Object.entries(selectePokemon.stats)) {
 console.log(`${propriete}: ${valeur}`);
 let uneLigne = document.createElement("tr");
 lesStats.appendChild(uneLigne);
 let uneStat = document.createElement("td");
 uneStat.classList.add("une-statistique");
 uneStat.textContent = propriete + " : " + valeur;
 uneLigne.appendChild(uneStat);
  }
 }
        
          
        
});

    