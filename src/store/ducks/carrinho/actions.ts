import { CarrinhoTypes } from './../carrinho/types'


export interface Pokemon {
    name: string
    url: string
    preco:number
}
export const addCarrinho = (pokemons:Pokemon) => {
    return {
        type: CarrinhoTypes.ADD_CARRINHO,
        pokemons
    }
}