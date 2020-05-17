import { combineReducers } from 'redux'
import pokemon from './reducersPokemons'
import carrinho from './reducersCarrinho'
import pagination from './reducersPagination'


export default combineReducers({
    pokemon: pokemon,
    carrinho: carrinho,
    pagination: pagination
})