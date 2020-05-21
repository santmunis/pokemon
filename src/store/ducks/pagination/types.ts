export enum PaginitionTypes {
    HANDLE_CHANGE = '@pokemons/HANDLE_CHANGE',
    HANDLE_CLICK = '@pokemons/HANDLE_CLICK',
}



export interface PaginationState {
    currentPage: number,
    quantPerPage: number,
}