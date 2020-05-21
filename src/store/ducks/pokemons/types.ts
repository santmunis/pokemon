

export enum PokemonsTypes {
    LOAD_REQUEST = '@pokemons/LOAD_REQUEST',
    LOAD_REQUEST_SPRITES = '@pokemons/LOAD_REQUEST_SPRITES',
    LOAD_SUCCCES = '@pokemons/LOAD_SUCCCES',
    LOAD_FAILURE = '@pokemons/LOAD_FAILURE'
}

export interface Pokemon {
    name: string
    url: string
    preco:number
}

export interface PokemonsState {
    readonly data: Pokemon[]
    readonly loading: boolean
    readonly error: boolean
}