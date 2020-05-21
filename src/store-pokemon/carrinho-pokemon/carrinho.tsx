import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from '../../store'
import * as CarrinhoAction from '../../store/ducks/carrinho/actions'
import { CarrinhoState } from './../../store/ducks/carrinho/types'

import * as SideBar from './style-carrinho-pokemon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {ButtonFinalizar} from './../../components/buttons/style-buttons'



interface StateProps{
   carrinho:CarrinhoState 
   
}

interface DispatchProps{
    
}

interface OwnProps{
   
}



type Props = StateProps & DispatchProps & OwnProps

class Carrinho extends Component<Props>{
    state = {
        excluir:[]
    }
    componentDidMount(){
        
    }


    render() {
        console.log(this.props.carrinho)
        const { excluir } = this.state  
        return (
            <>
                <SideBar.ContainerResumoPedido>
                    <div>
                        <SideBar.ContainerTitulo>
                            <h4>Carrinho</h4>
                            {
                                (excluir.length > 0)
                                ?<div>
                                    <FontAwesomeIcon icon={faTrashAlt} style={{ marginTop: '-3px', marginLeft: "3px" }} />
                                </div>
                                :null
                            }
                        </SideBar.ContainerTitulo>
                        <SideBar.ContainerPedidos>
                            {
                                <SideBar.ItemPedidos>
                                    <FormControlLabel
                                        control={<Checkbox  name="pokemon_name" />}
                                        label="pokemon_name" 
                                        
                                    />
                                        <p>{"pokemon_Preco" }</p>
                                </SideBar.ItemPedidos>
                            }
                        </SideBar.ContainerPedidos>
                    </div>
                    <div>
                        <hr style={{ opacity: '0.3' }} />
                        <SideBar.ItemPedidos>
                            <p style={{ fontWeight: "bold" }}>Total</p>
                            <p style={{ fontWeight: "bold" }}>R$ {//this.sumTotal()
                            }</p>
                        </SideBar.ItemPedidos>
                        <ButtonFinalizar>Finalize o Pedido</ButtonFinalizar>
                </div>
                </SideBar.ContainerResumoPedido>
            </>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    carrinho: state.carrinho,
  });

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(CarrinhoAction, dispatch) 
    };
}

    


export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)

    

