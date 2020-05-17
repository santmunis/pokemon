import api from '../services/api'
import { 
        FETCH_POKEMON,
        ADD_CARRINHO,
        LISTA_CARRINHO,
        DELETE_CARRINHO,
        HANDLE_CHANGE,
        HANDLE_CLICK,
        FINALIZA_CARRINHO      
} from './types';


export const listaPokemons = (tipo) => {
    return async (dispatch) => {
        return await api.get(`type/${tipo}/`)
            .then(response => {
                return dispatch(getSprite(response.data.pokemon))
            })
            .catch(error => {
                throw (error)
            })
        }
}

export const getSprite = pokemons => {
    var pokeBola = []
    return async (dispatch) => {
        await Promise.all(pokemons.map((pokemon) => {
            return new Promise(async (resolve, reject) => {
                var dadosPokemon = await api.get(pokemon.pokemon.url)
                var obj1 = {
                    name: pokemon.pokemon.name,
                    url: dadosPokemon.data.sprites,
                    preco: parseFloat(Math.random().toFixed(2))
                }
                if (dadosPokemon.data.sprites !== undefined) {
                    pokeBola.push(obj1)
                }

                resolve(pokeBola)
            })
        }))
        dispatch(listaPokemonsSuccess(pokeBola))
    }
}
export const listaPokemonsSuccess = pokemons => {
    return {
        type: FETCH_POKEMON,
        pokemons
    }
}

export const addCarrinho = pokemons => {
    return {
        type: ADD_CARRINHO,
        pokemons
    }
}

export const ListaCarrinho = () => {
    return {
        type: LISTA_CARRINHO,
    }
}

export const deletaCarrinho = (pokemonsDeletado) => {
    console.log(pokemonsDeletado)
    return {
        type: DELETE_CARRINHO,
        pokemonsDeletado
    }
}

export const finalizaCarrinho = () => {
    return {
        type: FINALIZA_CARRINHO,
    }
}

export const handleChange = (todosPerPage) => {
    return {
        type: HANDLE_CHANGE,
        todosPerPage
    }
}

export const handleClick = (currentPage) => {
    return {
        type: HANDLE_CLICK,
        currentPage
    }
}