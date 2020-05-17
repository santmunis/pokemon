import { HANDLE_CHANGE, HANDLE_CLICK } from '../types'

const initialState = {
    currentPage: 1,
    todosPerPage: 15,
  };
  
export default function reducerEditar(state = initialState, action) {
   switch (action.type) {
      case HANDLE_CHANGE: 
         var newState ={
            currentPage: state.currentPage,
            todosPerPage: Number(action.todosPerPage),
         }
      return newState
      case HANDLE_CLICK:
            var newState ={
               currentPage: Number(action.currentPage),
               todosPerPage: state.todosPerPage,
            }
         return newState
      default: return state
   }
}