import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../Assets/Pokestore.png'
import fire from './../../Assets/fire.jpg'
import water from './../../Assets/water.jpg'
import ghost from './../../Assets/ghost.jpg'
import ground from './../../Assets/ground.jpg'
import './style.css'
export default class Home extends React.Component {

    tipoPokemon = (tipo) => {
        var background_color = ''
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

        var div = {
            background: background_color,
            height: '80px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        }


        return div
    }
    render() {
        return (
            <>
                <div style={this.tipoPokemon(this.props.type)}>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} width="170px" height="50px" alt="Logo da loja" />
                        </Link>
                    </div>
                </div>
                <div className="content-img-menu">
                    <Link to='/'>
                        <img src={fire} className="img-menu" alt="type fire" />
                    </Link>
                    <Link to='/water'>
                        <img src={water} className="img-menu" alt="type water" />
                    </Link>
                    <Link to='/ghost'>
                        <img src={ghost} className="img-menu" alt="type ghost" />
                    </Link>
                    <Link to='/ground'>
                        <img src={ground} className="img-menu" alt="type ground" />
                    </Link>
                </div>
            </>
        )
    }

}