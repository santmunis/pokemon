import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from './../pagination/pagination'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addCarrinho,handleClick }
    from './../../store/action'
import { connect } from 'react-redux'
import './style.css'

class CardPokemon extends React.Component {
    tipoPokemon = (tipo) =>{
        var background_color= ''
        switch (tipo) {
            case 'Fogo':
                    background_color = '#ff4040';
                
            break;
            case 'Agua':
                    background_color = '#6fbbd3'       
            break;
            case 'Ghost':
                    background_color = '#993399'       
            break;
            case 'Ground':
                background_color = '#eb7600'       
            break;
            default: 
            break;
        }
        
        var cor = {
            background: background_color,
        }
       

        return cor
    }
    render() {
        const {pokemon, pagination, campoPesquisa} = this.props
        
        // Lógica paginação dos dados
        const indexOfLastTodo = pagination.currentPage * pagination.todosPerPage;// Define o limite Final
        const indexOfFirstTodo = indexOfLastTodo - pagination.todosPerPage;// Define o limite inicial

        const currentTodos = pokemon.filter(campoPesquisa) //filtra pokemons de acordo com o que for digitado na barra de pesquisa
                            .slice(indexOfFirstTodo, indexOfLastTodo)
                            .filter(pokemon =>{if(pokemon.url.front_default !== null){return pokemon}}); // Filtra pokemons sem foto

        const pageNumbers = Math.ceil(pokemon.filter(campoPesquisa).length / pagination.todosPerPage) // Calculo o número de páginas
            
        if(Math.ceil(currentTodos.length) < Math.ceil(pokemon.length / pagination.todosPerPage) ){ // Define a página atual como 1
            if(pagination.currentPage !== 1){
                this.props.handleClick(1)
            }   
        }
        return (
            <>
                <div className="grid-collum-full display-none">
                    <Pagination pageNumbers={pageNumbers} type={this.props.type}/>
                </div>
                  
                {
                    currentTodos.map(pokemon =>{
                        return(
                                <div className="card-pokemon" key={pokemon.name}>
                                    <div className="div-img-pokemon">
                                        <img src={pokemon.url.front_default} className="pokemon-img" alt="Pokemon Imagem Frontal"/>
                                    </div>
                                    <p className="title"> {pokemon.name}</p>
                                    <p className="preco">R$ {pokemon.preco}</p>
                                    <div className="button" style={this.tipoPokemon(this.props.type)} onClick={()=>{this.props.addPokemonCarrinho(pokemon)}}>
                                        <p>ADD</p>
                                        <FontAwesomeIcon icon={faPlus} style={{marginTop:'-3px',marginLeft:"3px"}}/>
                                    </div>
                                </div>
                            
                        )
                    })
                }
            
                <div className="grid-collum-full">
                    <Pagination pageNumbers={pageNumbers} type={this.props.type}/>
                </div>
            </>
        )
    }

}
const mapStateToProps = state => {
    return {
        pagination: state.pagination
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPokemonCarrinho: (pokemon) => {
            dispatch(addCarrinho(pokemon))
        },
        handleClick: (currentPage) => {
            dispatch(handleClick(currentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPokemon)