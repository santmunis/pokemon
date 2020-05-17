import React from 'react'
import {Link} from 'react-router-dom'
import logo from  './../../Assets/Pokestore.png'
import fire from  './../../Assets/fire.jpg'
import water from  './../../Assets/water.jpg'
import ghost from  './../../Assets/ghost.jpg'
import ground from  './../../Assets/ground.jpg'
import './style.css'
export default class Home extends React.Component {

    tipoPokemon = (tipo) =>{
        var backgroundGradient= ''
        switch (tipo) {
            case 'Fogo':
                backgroundGradient = '#ff4040';
                
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
            <>
                <div style={this.tipoPokemon('Fogo')}>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} width="170px" height="50px" alt="Logo da loja" />
                        </Link>
                    </div>
                </div>
                <div className="content-img-menu">
                    <Link to='/'>
                        <img src={fire}   className="img-menu" alt="type fire"/>
                    </Link>
                    <Link to='/'>
                        <img src={water}  className="img-menu" alt="type water"/>
                    </Link>
                    <Link to='/'>
                        <img src={ghost}  className="img-menu" alt="type ghost"/>
                    </Link>
                    <Link to='/'>
                        <img src={ground} className="img-menu"  alt="type ground"/>
                    </Link>
                </div>
            </>
        )
    }

}