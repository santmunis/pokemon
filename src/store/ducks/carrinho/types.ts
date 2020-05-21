export enum CarrinhoTypes {
    ADD_CARRINHO = '@pokemons/ADD_CARRINHO',
    LOAD_CARRINHO = '@pokemons/LOAD_CARRINHO',
    DELETE_CARRINHO = '@pokemons/DELETE_CARRINHO',
    FINALIZA_CARRINHO = '@pokemons/FINALIZA_CARRINHO',
}



export interface CarrinhoState {
    itens: []
}