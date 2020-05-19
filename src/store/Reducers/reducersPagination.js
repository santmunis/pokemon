import { HANDLE_CHANGE, HANDLE_CLICK } from '../types'

const initialState = {
   currentPage: 1,
   todosPerPage: 16,
};

export default function reducerEditar(state = initialState, action) {
   var newState = {
      currentPage: state.currentPage,
      todosPerPage: state.todosPerPage,
   }
   switch (action.type) {
      case HANDLE_CHANGE:
         newState.todosPerPage = Number(action.todosPerPage)
         return newState
      case HANDLE_CLICK:
         newState.currentPage = Number(action.currentPage)
         return newState
      default: return state
   }
}