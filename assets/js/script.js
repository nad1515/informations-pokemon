

let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest () {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
    return response.data;
}


let main = document.createElement('main');
document.body.appendChild(main);

let pokemonList = document.createElement('select'); 
pokemonList.setAttribute('id', 'pokemonList');            // Créez une liste select pour contenir les éléments pokemons
main.appendChild(pokemonList);

let image = document.createElement('img');
 image.setAttribute('id','pokemon-img');
 main.appendChild(image);

 let contenair = document.createElement("div");
 contenair.classList.add("contenair");
 main.appendChild(contenair);

//...............afficher la list des pokemons avec une boucle foreach...........
let option = document.createElement("option");
option.innerText = "--Choix Pokemon--";//....choisir de rien afficher au depart et cest au client de choisir son pokemon.....
pokemonList.appendChild(option);

    datasAxios.forEach(pokemon => {
        console.log("pokemon,", pokemon);
        option = document.createElement('option');
        option.innerText = pokemon.name;
        pokemonList.appendChild(option);
    });


// ..............faire un edventlisstener pour chaque chois il ya un chang et option....
   

      //........cherches les elements(proprietés) de chaque pokemon........

    if (option.innerText === "--Choix Pokemon--") {
      // Le code pour gérer le cas où "--Choix Pokemon--" est sélectionné
      image.setAttribute("src", ''); // Effacer l'image
    
    } else {
      // Le code pour gérer la sélection d'un Pokémon
      pokemonList.addEventListener("change", () => {
        let PokemonName = pokemonList.value;
        console.log("Pokemon sélectionné :", PokemonName);
         
        // Trouver le Pokémon sélectionné
        let selectePokemon = datasAxios.find((element) => element.name === PokemonName);
    
           console.log("Image du Pokémon :", selectePokemon.image);
           image.setAttribute("src", selectePokemon.image);

            

           // Effacez les éléments enfants actuels de l'élément "contenair"
           while (contenair.firstChild) {
               contenair.removeChild(contenair.firstChild);
               
           }
           
          // Afficher les statistiques
          for (let [propriete, valeur] of Object.entries(selectePokemon.stats)) {
            console.log(`${propriete}: ${valeur}`);
            let uneStat = document.createElement("table");
            uneStat.classList.add("une-statistique");
            uneStat.textContent = propriete + " : " + valeur;
            contenair.appendChild(uneStat);
          }
          
        
      });
    }
    