

// let datasAxios = await axiosTest();
// console.log("Datas via Axios : ", datasAxios);
// async function axiosTest () {
//     const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon/pikachu");
//     return response.data;
// }

// let main = document.createElement("main");
//     document.body.appendChild(main);

    // let pokemonList = document.getElementById('pokemonList');
    //     main.appendChild(pokemonList);

    // for (let index = 0; index < 200; index++) {
    
    //     let listItem = document.createElement('li'); 
    //     listItem.innerHTML = `<img src="${pokemon.imageUrl}" alt="${pokemon.name}" /> ${pokemon.name}`;
    //     pokemonList.appendChild(listItem);
              
  
    // }
      

    document.addEventListener('DOMContentLoaded', () => {
        let main = document.createElement('main');
        document.body.appendChild(main);
        let pokemonList = document.createElement('ul'); 
        pokemonList.getElementById('pokemonList');            // Créez une liste ul pour contenir les éléments li
         main.appendChild(pokemonList);
      
         // Vous pouvez modifier la limite en fonction du nombre de Pokémon que vous souhaitez afficher
      
          // Utilisez l'API PokeAPI pour obtenir leBys données des Pokémon
          fetch(`https://pokebuildapi.fr/api/v1/pokemon/pikachu`)
            .then(response => response.json())
            .then(data => {
              let listItem = document.createElement('li');
              listItem.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}" /> ${data.name}`;
              pokemonList.appendChild(listItem);
            })
            .catch(error => {
              console.error('Erreur lors de la récupération des données des Pokémon', error);
            });
        
       
      });
      
