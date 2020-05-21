import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'


import { ApplicationState } from '../../store'
import * as PaginationAction from '../../store/ducks/pagination/action'
import { PaginationState } from '../../store/ducks/pagination/types'


import * as Pagination from './style-pagination'
import {ButtonOutilined} from '../../components/buttons/style-buttons'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


interface StateProps{
    pagination: PaginationState
}

interface DispatchProps{
    handleClick(currentPage:number):void
    handleChange(quantPerPage:number):void
}

interface OwnProps{
    color:string
    pageNumbers: number
    lengthArrayFull?: number
    lengthArrayFilter?: number
}

type Props = StateProps & DispatchProps & OwnProps

class Pagina extends Component<Props>{
    render(){

        const { handleClick, handleChange, pagination } = this.props
        const { pageNumbers, lengthArrayFull, lengthArrayFilter, color } = this.props
        

        let pageNum:number[]= []
        for(var i = 1; pageNumbers>= i; i++){
            pageNum.push(i)
        }

        const renderPageNumbers = pageNum.map(number =>{
            return(
                <Pagination.PaginationItem
                    key={number}
                    id={String(number)}
                    color={color}
                    onClick={(event) =>{handleClick(Number((event.target as HTMLLIElement).id))}}
                >
                    {number}
                </Pagination.PaginationItem>
            )
        })
        return(
            <Pagination.ContainerFlex>
                <Pagination.ContainerItensPerPage>
                    <p>Itens por página</p>
                    <FormControl variant="outlined" >
                        <Select
                            value={pagination.quantPerPage}
                            native
                            onChange={(event)=>{handleChange(Number((event.target as HTMLSelectElement).value))}}
                        >
                            <option value={12}>12</option>
                            <option value={16}>16</option>
                        </Select>
                    </FormControl>
                </Pagination.ContainerItensPerPage>
                <div>
                    <Pagination.Pagination>
                        {renderPageNumbers}
                    </Pagination.Pagination>
                    {
                        (lengthArrayFull !== lengthArrayFilter)
                        ?<ButtonOutilined onClick={()=>{handleChange(pagination.quantPerPage + 10)}}>Ver Mais</ButtonOutilined>
                        :null
                    }
                </div>
            </Pagination.ContainerFlex>
           
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    pagination: state.pagination,
  });

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(PaginationAction, dispatch);
    


export default connect(mapStateToProps, mapDispatchToProps)(Pagina)