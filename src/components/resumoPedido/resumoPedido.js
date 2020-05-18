import React from 'react'
import './style.css'
import { ListaCarrinho, deletaCarrinho, finalizaCarrinho }
    from './../../store/action'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from './../modalFinalizaCompra/modalFinalizaCompra'
import { connect } from 'react-redux'


class ResumoPedido extends React.Component {

    state = {
        excluir:[],
        open:false
    }
   
    sumTotal = () =>{
     var total = parseFloat(0)
     this.props.carrinho.map(pokemon =>
        total +=  pokemon.preco
     )
     return total
    }

    handleChange = (event) =>{
        const {excluir} = this.state
        console.log(event.target.id)
        if(event.target.checked === true){
            excluir.push(event.target.id)
            
        }else{
             excluir.splice(excluir.indexOf(event.target.id), 1);
            
        }
        this.setState({excluir})
    }

    deletar = (excluir) =>{
        this.props.deletaCarrinhoItens(excluir)
        this.setState({excluir:[]})
    }
    
    handleClickOpen = () => {
        this.setState({open:true})
        
    };
    
    handleClose = () => {
        this.props.concluiCarrinho()
        this.setState({open:false})
    };
    render() {
        const {excluir} = this.state
        return (
            <div className="resumo-pedido"> 
                <div>
                    <div className="titulo">
                        <h4>Resumo Pedido</h4>
                        {
                            (excluir.length > 0) ?
                            <div onClick={()=>{this.deletar(excluir)}}>
                                <FontAwesomeIcon icon={faTrashAlt} style={{marginTop:'-3px',marginLeft:"3px"}} />
                            </div>
                            :null
                        }
                    </div>
                    <div style={{maxHeight:'500px',overflow:'scroll',overflowX:'hidden'}}>
                    {
                        this.props.carrinho.map((pokemon,indice) =>{
                            var keyProp = pokemon.name+indice
                            return(
                                <div className="itens-pedido" key={keyProp}>
                                    <FormControlLabel
                                        control={<Checkbox id={String(indice)}  name={pokemon.name} />}
                                        label={pokemon.name}
                                        onChange={this.handleChange} 
                                    />
                                    <p>{pokemon.preco}</p>
                                 </div>
                            )
                        })
                        
                    }
                    </div>
                </div>
                <div className="padding">
                    <hr style={{opacity:'0.3'}}/>
                    <div className="itens-pedido">
                        <p style={{ fontWeight: "bold" }}>Total</p>
                        <p style={{ fontWeight: "bold" }}>R$ {this.sumTotal()}</p>
                    </div>
                    <button className="buttonFinalizar" onClick={this.handleClickOpen}>Finalizar Pedido</button>
                </div>
                <Modal
                    open={this.state.open}
                    handleClose={this.handleClose.bind(this)}
                    total={this.sumTotal()}
                />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        carrinho: state.carrinho
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCarrinho: () => {
            dispatch(ListaCarrinho())
        },
        deletaCarrinhoItens: (pokemonsDeletado) =>{
            dispatch(deletaCarrinho(pokemonsDeletado))
        },
        concluiCarrinho: () =>{
            dispatch(finalizaCarrinho())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResumoPedido)