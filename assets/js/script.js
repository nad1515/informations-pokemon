

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
         if (option.innerText = "--Choix Pokemon--") {
            image.setAttribute("src", '');
             
         }else{

            pokemonList.addEventListener("change",() => {
                console.log("pokemonselect:", pokemonList.value);
             let pokemontrouve = datasAxios.find((element) => element.name == pokemonList.value);
             console.log("image de pokemon:",pokemontrouve.image);
              image.setAttribute("src", pokemontrouve.image);
       });
    
    
    
         }
      


