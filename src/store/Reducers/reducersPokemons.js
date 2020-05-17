import { FETCH_FOGO } from '../types'

export default function reducerEditar(state = [], action) {
   switch (action.type) {
      case FETCH_FOGO: return action.pokemons
      default: return state
   }
}
