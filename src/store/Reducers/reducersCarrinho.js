import { ADD_CARRINHO, LISTA_CARRINHO, DELETE_CARRINHO } from '../types'

export default function reducerEditar(state = [], action) {
   switch (action.type) {
      case LISTA_CARRINHO: return state
      case ADD_CARRINHO: return [...state, action.pokemons]
      case DELETE_CARRINHO: 
      //vetor com index a serem excluidos  
      var deletar = action.pokemonsDeletado
      //Acessa os index e substitui o valor por vazio
        for (var i = deletar.length -1; i >= 0; i--)
            state[deletar[i]] = " ";
        //Filtra os valores vazios
            return state.filter(element =>{
                if(element !== " "){
                    return element
                }
            })
      default: return state
   }
}