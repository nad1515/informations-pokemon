

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
   

    if (option.innerText === "--Choix Pokemon--") {
        // Le code pour gérer le cas où "--Choix Pokemon--" est sélectionné
        image.setAttribute("src", ''); // Effacer l'image
      } else {
        // Le code pour gérer la sélection d'un Pokémon
        pokemonList.addEventListener("change", () => {
          console.log("Pokemon sélectionné :", pokemonList.value);
          let pokemonTrouve = datasAxios.find((element) => element.name === pokemonList.value);
          
          if (pokemonTrouve) {
            console.log("Image du Pokémon :", pokemonTrouve.image);
            image.setAttribute("src", pokemonTrouve.image);
          } else {
            console.log("Aucun Pokémon trouvé pour le nom sélectionné :", pokemonList.value);
            // Effacer l'image
            image.setAttribute("src", '');
          }
        });
      }
      //........cherches les elements(proprietés) de chaque pokemon........
      
      for (const [propriete, valeur] of Object.entries(pokemonTrouve.stats)) {  //METHODE: object.entries()
        console.log(`${propriete}: ${valeur}`);
        let uneStat = document.createElement("div");
        uneStat.classList.add("une-statistique");
        uneStat.textContent = propriete + " : " +  valeur;
        main.appendChild(uneStat);
    }
