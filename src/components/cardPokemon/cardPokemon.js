import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Pagination } from '@material-ui/lab';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addCarrinho }
    from './../../store/action'
import { connect } from 'react-redux'
import './style.css'

class CardPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPage: 1,
          todosPerPage: 15,
          
        };
      }

      handleClick = (event, value) => {
        this.setState({
          currentPage: Number(value)
        });
      }
      
    render() {
        const { currentPage, todosPerPage } = this.state;

        // Lógica Paginação
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.pokemon.filter(this.props.campoPesquisa).slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = Math.ceil(this.props.pokemon.filter(this.props.campoPesquisa).length / todosPerPage)
            if(Math.ceil(this.props.pokemon.filter(this.props.campoPesquisa).length / todosPerPage) < Math.ceil(this.props.pokemon.length / todosPerPage) ){
                if(currentPage !== 1){
                    this.setState({currentPage: 1})
                }
            }
        return (
            <>
                <div className="content-pokemon">    
                {
                    currentTodos.map(pokemon =>{
                        return(
                                <div className="card-pokemon" key={pokemon.name}>
                                    <img src={pokemon.url.front_default} className="pokemon-img" alt="Pokemon Imagem Frontal"/>
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
                <div className="pagination">
                    <Pagination count={pageNumbers} onChange={this.handleClick} />
                </div>
            </>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        addPokemonCarrinho: (pokemon) => {
            dispatch(addCarrinho(pokemon))
        }
    }
}

export default connect(null, mapDispatchToProps)(CardPokemon)