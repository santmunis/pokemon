import { Reducer } from 'redux';
import { PaginationState, PaginitionTypes } from './types'



const INITIAL_STATE: PaginationState = {
    currentPage:1,
    quantPerPage:16
}

const reducer: Reducer <PaginationState> = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case PaginitionTypes.HANDLE_CHANGE:
            return { ...state, quantPerPage: action.quantPerPage }
        case PaginitionTypes.HANDLE_CLICK:
            return {...state, currentPage: action.currentPage }
        default:
            return state
    }
}

export default reducer