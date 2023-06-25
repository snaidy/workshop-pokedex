
const validarPokemon = (footerImages) => {

    footerImages.forEach(element => {
        element.addEventListener("click", () =>{
            const pokemonName = element.getAttibute("data-id");
            console.log(pokemonName);
        })
        
    });
}

export default validarPokemon;