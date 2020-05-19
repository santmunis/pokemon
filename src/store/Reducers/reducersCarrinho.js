import { ADD_CARRINHO, LISTA_CARRINHO, DELETE_CARRINHO, FINALIZA_CARRINHO } from '../types'

var initialState = []
var stateCarrinho = localStorage.getItem('pokemon/carrinhoCompras')
if (stateCarrinho !== null && stateCarrinho !== undefined) {
    initialState = JSON.parse(localStorage.getItem('pokemon/carrinhoCompras'))
}

export default function reducerEditar(state = initialState, action) {
    switch (action.type) {
        case LISTA_CARRINHO:
            return state
        case ADD_CARRINHO:
            localStorage.setItem('pokemon/carrinhoCompras', JSON.stringify([...state, action.pokemons]))
            return [...state, action.pokemons]
        case DELETE_CARRINHO:
            //vetor com index a serem excluidos  
            var deletar = action.pokemonsDeletado
            //Acessa os index e substitui o valor por vazio
            for (var i = deletar.length - 1; i >= 0; i--)
                state[deletar[i]] = " ";
            //Filtra os valores vazios
            var novoState = state.filter(element => {
                if (element !== " ") {
                    return element
                }
            })
            localStorage.removeItem('pokemon/carrinhoCompras')
            localStorage.setItem('pokemon/carrinhoCompras', JSON.stringify(novoState))
            return novoState
        case FINALIZA_CARRINHO:
            const stateFinalCarrinho = []
            localStorage.removeItem('pokemon/carrinhoCompras')
            localStorage.setItem('pokemon/carrinhoCompras', JSON.stringify(stateFinalCarrinho))
            return stateFinalCarrinho
        default: return state
    }
}