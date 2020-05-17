import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from './../pagination/pagination'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addCarrinho }
    from './../../store/action'
import { connect } from 'react-redux'
import './style.css'

class CardPokemon extends React.Component {
      
    render() {

        // Lógica Paginação
        const indexOfLastTodo = this.props.pagination.currentPage * this.props.pagination.todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - this.props.pagination.todosPerPage;
        const currentTodos = this.props.pokemon.filter(this.props.campoPesquisa).slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = Math.ceil(this.props.pokemon.filter(this.props.campoPesquisa).length / this.props.pagination.todosPerPage)
            if(Math.ceil(this.props.pokemon.filter(this.props.campoPesquisa).length / this.props.pagination.todosPerPage) < Math.ceil(this.props.pokemon.length / this.props.pagination.todosPerPage) ){
               
            }
        return (
            <>
                <div>
                    <Pagination pageNumbers={pageNumbers}/>
                </div>
                <div className="content-pokemon">    
                {
                    currentTodos.map(pokemon =>{
                        return(
                                <div className="card-pokemon" key={pokemon.name}>
                                    <div className="div-img-pokemon">
                                        <img src={pokemon.url.front_default} className="pokemon-img" alt="Pokemon Imagem Frontal"/>
                                    </div>
                                    <p className="title"> {pokemon.name}</p>
                                    <p className="preco">R$ {pokemon.preco}</p>
                                    <div className="button" onClick={()=>{this.props.addPokemonCarrinho(pokemon)}}>
                                        <p>ADD</p>
                                        <FontAwesomeIcon icon={faPlus} style={{marginTop:'-3px',marginLeft:"3px"}}/>
                                    </div>
                                </div>
                            
                        )
                    })
                }
                </div>
                <div>
                    <Pagination pageNumbers={pageNumbers}/>
                </div>
                {
                    /*
                <div className="pagination">
                    <Pagination count={pageNumbers} onChange={this.handleClick} />
                </div>
                */
                }
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPokemon)