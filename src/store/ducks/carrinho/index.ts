import { Reducer } from 'redux';
import { CarrinhoTypes, CarrinhoState } from './types'



var stateCarrinho = localStorage.getItem('pokemon/carrinhoCompras')
const INITIAL_STATE: CarrinhoState = {
    itens:[]
}

const reducer: Reducer <CarrinhoState> = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case CarrinhoTypes.ADD_CARRINHO:
                localStorage.setItem('pokemon/carrinhoCompras', JSON.stringify({...state, itens:[action.pokemons]}))
            return {state, item:action.pokemons}
        default:
            return state
    }
}

export default reducer