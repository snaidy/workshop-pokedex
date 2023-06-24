 import './styles/style.scss';


import { getPokemons, listPokemons} from './scripts/services/getpokemons.js';
import { renderPokemons } from './scripts/modules/renderdata.js';
import { handlePokemonClick } from './scripts/modules/handlepokemon.js';

document.addEventListener("DOMContentLoaded", () => {
    getPokemons(); // Obtener los datos de los pokemones
    renderPokemons(listPokemons); // Renderizar los pokemones
  
    const footerImages = document.querySelector(".imagenes img");
  
    footerImages.forEach((image) => {
        image.addEventListener("click", handlePokemonClick(containerPokemons, containerTable));
      });
  });