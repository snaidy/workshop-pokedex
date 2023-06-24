import { getListPokemons } from "../services/getpokemons.js";
export const handlePokemonClick = (containerMain, containerTable) => (event) => {
    const pokemonId = parseInt(event.target.dataset.id); // Convertir el id a un número entero
  
    const pokemon = getListPokemons().find((pokemon) => pokemon.id === pokemonId);
  
    if (pokemon) {
        console.log(pokemon)
      containerMain.innerHTML = `
        <div class="main-pokemon--title">
          <h1>${pokemon.name}</h1>
        </div>
        <figure class="pokemon-picture">
          <img src="${pokemon.image}" alt="${pokemon.name}">
        </figure>
      `;
  
      containerTable.innerHTML = `
        <div class="table-element">
          <h3>EXP</h3>
          <p>${pokemon.experience}</p>
        </div>
        <div class="table-element">
          <h3>TYPE</h3>
          <p>${pokemon.type}</p>
        </div>
        <div class="table-element">
          <h3>HEIGHT</h3>
          <p>${pokemon.height} m</p>
        </div>
        <div class="table-element">
          <h3>SPECIES</h3>
          <p>${pokemon.specie}</p>
        </div>
        <div class="table-element">
          <h3>ABILITY</h3>
          <p>${pokemon.abilities}</p>
        </div>
        <div class="table-element">
          <h3>WEIGHT</h3>
          <p>${pokemon.weight} lbs</p>
        </div>
      `;
    }
  };
  