

let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest () {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
    return response.data;
}

let main = document.createElement('main');
document.body.appendChild(main);


let fieldset = document.createElement("fieldset");
 fieldset.setAttribute("id","fieldset");
 main.appendChild(fieldset);
 
 let legend = document.createElement("legend");
  legend.classList.add("lagend");
  fieldset.appendChild(legend);
  legend.innerText = "Recherche Pokemon"

  //..............cree le button radio.....
let radio = document.createElement("input");
   radio.type = "radio";
   radio.id = "radioButton";
   radio.name = "pokemonList";
   radio.value = "Par Nom" // valeur du button radio
let label = document.createElement("label");
    label.innerText = "par Nom";


let radio2 = document.createElement("input");
    radio2.type = "radio";
    radio2.id = "radioButton2";
    radio2.name = "elements";
    radio.value = "Par Element" // valeur du button radio
let label2 = document.createElement("label");
label2.setAttribute("id","radiobutton2");
    label2.innerText = "par element";

let form = document.createElement("div");
 form.setAttribute("id","form");
 fieldset.appendChild(form);


form.appendChild(radio);
form.appendChild(label);

form.appendChild(radio2);
form.appendChild(label2);


let pokemonList = document.createElement('select'); 
    pokemonList.setAttribute('id', 'pokemonList');            // Créez une liste select pour contenir les éléments pokemons
    fieldset.appendChild(pokemonList);
   