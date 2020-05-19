import React from 'react'
import Menu from './../../components/menu/index'
import BarraPesquisa from './../../components/inputs/input'
import CardPokemon from './../../components/cardPokemon/cardPokemon'
import ResumoPedido from './../../components/resumoPedido/resumoPedido'
import Footer from '../../components/footer/footer'
import { listaPokemons }
    from './../../store/action'
import { connect } from 'react-redux'
import './../home/index.css'

class Ghost extends React.Component {
    state = {
        campoPesquisa: ''
    }
    componentDidMount = () => {
        this.props.fetchPokemonGhost('ghost')
    }

    buscarPor = name => {
        return (x) => x.name.toLowerCase().includes(name.toLowerCase()) || !name
    }

    render() {
        return (
            <div className="container">
                <div className="header"><Menu type="Ghost" /></div>
                <div className="serchBar">
                    <BarraPesquisa onChange={event => this.setState({ campoPesquisa: event.target.value })}
                        value={this.state.campoPesquisa} />
                </div>
                <div className="main">
                    <CardPokemon pokemon={this.props.ghost} type="Ghost" campoPesquisa={this.buscarPor(this.state.campoPesquisa)} />
                </div>
                <div className="sideBar"><ResumoPedido /></div>
                <div className="footer"><Footer type="Ghost" /></div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ghost: state.pokemon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPokemonGhost: (ghost) => {
            dispatch(listaPokemons(ghost))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ghost)