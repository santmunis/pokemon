import { combineReducers } from 'redux'
import pokemon from './reducersPokemons'
import carrinho from './reducersCarrinho'


export default combineReducers({
    pokemon: pokemon,
    carrinho: carrinho
})