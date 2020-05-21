import { Reducer } from 'redux';
import { PokemonsState, PokemonsTypes } from './types'



const INITIAL_STATE: PokemonsState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer <PokemonsState> = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case PokemonsTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case PokemonsTypes.LOAD_REQUEST_SPRITES:
            return {...state, loading:true}
        case PokemonsTypes.LOAD_SUCCCES:
            return { ...state, loading: false, error: false, data: action.data }
        case PokemonsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        default:
            return state
    }
}

export default reducer