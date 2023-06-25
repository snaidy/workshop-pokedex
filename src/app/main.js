import './styles/style.scss';


import { getPokemons, listPokemons} from './scripts/services/getpokemons.js';
import { renderPokemons, renderMainPokemon, renderTable, renderFooter } from './scripts/modules/renderdata.js';
import { handlePokemonClick } from './scripts/modules/handlepokemon.js';

document.addEventListener("DOMContentLoaded", () => {
    getPokemons(); // Obtener los datos de los pokemones
    renderPokemons(listPokemons); // Renderizar los pokemones
  
    const footerImages = document.querySelector(".imagenes img");
  
    footerImages.forEach((image) => {
        image.addEventListener("click", handlePokemonClick(containerPokemons, containerTable));
      });
  });



const pokeElements = containerPokeFooter.querySelectorAll(".poke");

pokeElements.forEach((pokeElement) => {
  const image = pokeElement.querySelector("img");
  const pokemonName = image.getAttribute("data-id");
  const pokemon = listPokemons.find((p) => p.name === pokemonName);

  image.addEventListener("click", () => {
    renderMainPokemon(pokemon);
    renderTable(pokemon);
  });
});

const searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredPokemon = listPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );
  renderFooter(filteredPokemon, containerPokeFooter);
});







// // document.addEventListener("DOMContentLoaded", () => {
// //     getPokemons(); // Obtener los datos de los pokemones
// //     renderPokemons(listPokemons); // Renderizar los pokemones
// //     const pokeElements = containerPokeFooter.querySelectorAll(".poke");
// //     pokeElements.forEach((pokeElement) => {
// //       const image = pokeElement.querySelector("img");
// //       const pokemonName = image.getAttribute("data-id");
// //       const pokemon = listPokemons.find((p) => p.name === pokemonName);
    
// //       image.addEventListener("click", () => {
// //         renderMainPokemon(pokemon);
// //         renderTable(pokemon);
// //       });
// //     });
    
// //   });
// document.addEventListener ("click", (e)=> {
//   getPokemons(); // Obtener los datos de los pokemones
//   renderPokemons(listPokemons);
//   if (e.target.classList.contains("poke")){
//       let name = e.target.getAttribute("data-id");
//       renderPokemons(name)
//   }
// });