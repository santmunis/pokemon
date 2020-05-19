import React from 'react'
import Menu from './../../components/menu/index'
import BarraPesquisa from './../../components/inputs/input'
import CardPokemon from './../../components/cardPokemon/cardPokemon'
import ResumoPedido from './../../components/resumoPedido/resumoPedido'
import Footer from '../../components/footer/footer'
import { listaPokemons }
    from './../../store/action'
import { connect } from 'react-redux'
import './index.css'

class Home extends React.Component {
    state = {
        campoPesquisa: ''
    }
    componentDidMount = () => {
        this.props.fetchPokemonFogo('fire')
    }

    buscarPor = name => {
        return (x) => x.name.toLowerCase().includes(name.toLowerCase()) || !name
    }

    render() {
        return (
            <div className="container">
                <div className="header"><Menu type="Fogo" /></div>
                <div className="serchBar">
                    <BarraPesquisa onChange={event => this.setState({ campoPesquisa: event.target.value })}
                        value={this.state.campoPesquisa} />
                </div>
                <div className="main">
                    <CardPokemon pokemon={this.props.fogo} type="Fogo" campoPesquisa={this.buscarPor(this.state.campoPesquisa)} />
                </div>
                <div className="sideBar"><ResumoPedido /></div>
                <div className="footer"><Footer type="Fogo" /></div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        fogo: state.pokemon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPokemonFogo: (fire) => {
            dispatch(listaPokemons(fire))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)