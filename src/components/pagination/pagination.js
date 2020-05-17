import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import { handleChange, handleClick }
    from './../../store/action'
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux'
import './style.css'
class Pagination extends React.Component {
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
        
        const pageNumbers = []
        for(var i = 1; this.props.pageNumbers >= i; i++){
            pageNumbers.push(i)
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={(e)=>{this.props.handleClick(e.target.id)}}
              >
                {number}
              </li>
            );
          });
        return (
            <div className="display-flex-row">
                <div className="display-flex-row itens-por-pagina">
                    <p>Itens por página</p>
                        <FormControl variant="outlined" >
                            <Select
                            value={this.props.pagination.todosPerPage}
                            native
                            onChange={(e)=>{this.props.handleChange(e.target.value)}}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            </Select>
                        </FormControl>
                </div>
                <div>
                    <ul className="pageNumber">
                        {renderPageNumbers}
                    </ul>
                </div>
        </div>
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
        handleChange: (todosPerPage) => {
            dispatch(handleChange(todosPerPage))
        },
        handleClick: (currentPage) => {
            dispatch(handleClick(currentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

