const containerPokemons = document.getElementById("containerPokemons");
const containerPokeFooter = document.getElementById("containerPokeFooter");

const getRandomPokemon = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
const pokemonList = [];

const renderMainPokemon = (pokemon) => {
  console.log("render", pokemon);
  const mainPokemon = document.createElement("section");
  mainPokemon.className = "main-pokemon";
  mainPokemon.innerHTML = `
    <div class="main-pokemon--title">
      <figure class="title-icon">
        <img src="https://img.icons8.com/?size=512&id=114622&format=png" alt="El icono del agua">
      </figure>
      <h1>${pokemon.name}</h1>
    </div>
    <figure class="pokemon-picture">
      <img src="${pokemon.image}" alt="${pokemon.name}">
    </figure>
  `;

  containerPokemons.innerHTML = "";
  containerPokemons.appendChild(mainPokemon);
};

const renderTable = (pokemon) => {
  const mainTable = document.createElement("section");
  mainTable.className = "main-table";
  mainTable.innerHTML = `
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

  containerPokemons.appendChild(mainTable);
};

const renderFooter = (listPokemons) => {
  const footerPokemon = document.createElement("article");
  footerPokemon.className = "picture";
  footerPokemon.innerHTML = `
    <h3 class="subtitle">OTHERS</h3>
    <article class="imagenes">
      ${Array.from({ length: 4 }, () => getRandomPokemon(listPokemons))
        .map(
          (pokemon) => `
          <figure class="poke">
            <img src="${pokemon.image}" alt="${pokemon.name}" data-id="${pokemon.id}">
          </figure>
        `
        )
        .join("")}
    </article>
  `;

  containerPokeFooter.innerHTML = "";
  containerPokeFooter.appendChild(footerPokemon);
};

export const renderPokemons = (listPokemons) => {
  const randomPokemon = getRandomPokemon(listPokemons);
  pokemonList.push(randomPokemon);
  console.log("randomPokemon:", randomPokemon);
  renderMainPokemon(randomPokemon);
  renderTable(randomPokemon);
  renderFooter(listPokemons);
};