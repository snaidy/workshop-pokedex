import axios from 'axios';
import { renderPokemons } from '../modules/renderdata.js';

const URL_API = "https://pokeapi.co/api/v2/pokemon?limit=100";
export const listPokemons = [];
export const getPokemons =async () => {
    try {
        const response = await axios.get(URL_API)
        console.log(response.data.results);
        if (response.status === 200) {
            console.log('results', response.data.results)
            for (let i = 0; i < response.data.results.length; i++) {
                const pokemon = response.data.results[i];
                try {
                    const resp = await axios.get(pokemon.url);
                    const newPokemon = {
                    name: resp.data.name,
                    image: resp.data.sprites.other['official-artwork'].front_default,
                    height: resp.data.height,
                    experience: resp.data.base_experience,
                    specie: resp.data.species.name,
                    weight: resp.data.weight,
                    abilities:resp.data.abilities[0].ability.name,
                    type:resp.data.types[0].type.name
                    };
                    listPokemons.push(newPokemon);
                    if (response.data.results.length === i + 1) {
                    renderPokemons(listPokemons); //al darle ctrl espacio sale la funcion para importarla mas facil
                    }
                  } catch (error) {
                    console.log(error)
                  }
            }
        }

    } catch (error) {
        console.log(error)
    }
}
////-----------------------añadi esto para la funcion handle
export const getListPokemons = () => {
    return listPokemons;
};