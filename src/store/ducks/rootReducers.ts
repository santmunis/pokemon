import { combineReducers } from 'redux'

import pokemons from './pokemons'
import pagination from './pagination'
import carrinho from './carrinho'

export default combineReducers({
    pokemons,
    pagination,
    carrinho
})