import React from 'react'
import {Link} from 'react-router-dom'
import logo from  './../../Assets/Pokestore.png'
export default class Home extends React.Component {

    tipoPokemon = (tipo) =>{
        var backgroundGradient= ''
        switch (tipo) {
            case 'Fogo':
                backgroundGradient = 'linear-gradient(86deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(250,72,72,1) 50%, rgba(252,73,80,1) 100%)';
                
            break;
            case 'Agua':
                    backgroundGradient = 'linear-gradient(90deg, rgba(24,12,237,1) 0%, rgba(35,35,238,1) 35%, rgba(0,212,255,1) 100%)';       
            break;
            default: 
            break;
        }
        
        var div = {
            background: backgroundGradient,
            height:'80px',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'space-around'
        }
        
        return div
    }
    render() {
        return (
            <div style={this.tipoPokemon('Fogo')}>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} width="170px" height="50px" alt="Logo da loja" />
                    </Link>
                </div>
                <div className="itens-menu">
                    <Link to='/'>
                        <p>Fogo</p>
                    </Link>
                    <Link to='/'>
                        <p>Água</p>
                    </Link>
                </div>
            </div>
        )
    }

}