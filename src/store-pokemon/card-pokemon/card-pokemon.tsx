import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from '../../store'
import * as PokemonsAction from '../../store/ducks/pokemons/action'
import * as PaginationAction from '../../store/ducks/pagination/action'
import * as CarrinhoAction from '../../store/ducks/carrinho/actions'
import { PokemonsState } from '../../store/ducks/pokemons/types'
import { PaginationState } from '../../store/ducks/pagination/types'
import { CarrinhoState } from './../../store/ducks/carrinho/types'

import * as card from './style-card-pokemon'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ButtonBlock } from './../../components/buttons/style-buttons'
import Pagination from './../../components/pagination/pagination'
import { action } from 'typesafe-actions';



interface StateProps{
    pokemons: PokemonsState
    pagination: PaginationState
    carrinho: CarrinhoState
}

interface DispatchProps{
    actions:{
        loadRequest(type:string):void
        handleClick(num:Number):void
        addCarrinho(pokemon:Pokemon):void
     }
}

export interface Pokemon {
    name: string
    url: string
    preco:number
}

interface OwnProps{
    color:string
    fieldSerch: any;
}



type Props = StateProps & DispatchProps & OwnProps

class Fire extends Component<Props>{
    
    componentDidMount(){
        const { actions } = this.props

        actions.loadRequest("fire");
    }
    
    render() {
        const {pokemons, color, fieldSerch, pagination, actions} = this.props
        
        const indexOfLast = pagination.currentPage * pagination.quantPerPage;// Define o limite Final
        const indexOfFirst = indexOfLast - pagination.quantPerPage;// Define o limite inicial

        const pokemon_filter = pokemons.data.filter(pokemon => { if (pokemon.url !== null) { return pokemon } });

        const currentData = pokemons.data.filter(fieldSerch) //filtra pokemons de acordo com o que for digitado na barra de pesquisa
            .filter(pokemon => { if (pokemon.url !== null) { return pokemon } }) // Filtra pokemons sem foto                   
            .slice(indexOfFirst, indexOfLast);

            const pageNumbers = Math.ceil(pokemons.data.filter(fieldSerch).length / pagination.quantPerPage) // Calculo o número de páginas

            if (Math.ceil(currentData.length) < Math.ceil(pokemons.data.length / pagination.quantPerPage)) { // Define a página atual como 1
                if (pagination.currentPage !== 1) {
                    actions.handleClick(1)
                }
            }
            
        return (
            <>
                <card.ColFull>
                    <Pagination color={color} pageNumbers={pageNumbers} />
                </card.ColFull>
                {
                    (pokemons.loading === false)
                    ? <>
                    {
                        currentData.map(pokemon =>{
                            return(
                              <card.ContainerCardPokemon>
                              <card.ContainerPokemonImg>
                                  <card.ImgPokemon src={pokemon.url} />
                              </card.ContainerPokemonImg>
                              <card.Title>{pokemon.name}</card.Title>
                              <card.Price>{pokemon.preco}</card.Price>
                              <ButtonBlock color={color} onClick={()=>{actions.addCarrinho(pokemon)}}>ADD</ButtonBlock>
                          </card.ContainerCardPokemon>
                            )
                        }) 
                    }
                   </>
                   : <CircularProgress />    
                  
                }
                
                <card.ColFull>
                    <Pagination color={color} pageNumbers={pageNumbers} lengthArrayFull={pokemon_filter.length} lengthArrayFilter={currentData.length}/>
                </card.ColFull>
            </>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    pokemons: state.pokemons,
    pagination: state.pagination,
    carrinho: state.carrinho
  });

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, PokemonsAction, PaginationAction, CarrinhoAction), dispatch) 
    };
}

    


export default connect(mapStateToProps, mapDispatchToProps)(Fire)


