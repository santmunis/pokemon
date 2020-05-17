import { FETCH_POKEMON } from '../types'

export default function reducerEditar(state = [], action) {
   switch (action.type) {
      case FETCH_POKEMON: return action.pokemons
      default: return state
   }
}
