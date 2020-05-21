import { createStore, Store, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { PokemonsState } from './ducks/pokemons/types'
import { PaginationState } from './ducks/pagination/types'
import { CarrinhoState } from './ducks/carrinho/types'
import rootReducer from './ducks/rootReducers';




export interface ApplicationState{
    pokemons: PokemonsState,
    pagination: PaginationState,
    carrinho: CarrinhoState
}





const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(thunk));


export default store;