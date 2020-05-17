import React from 'react'
import './style.css'
export default class Footer extends React.Component {

    tipoPokemon = (tipo) =>{
        var background_color= ''
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
        
        var cor = {
            background: background_color,
        }
       

        return cor
    }
    render() {
        return (
            <div className="content-footer" style={this.tipoPokemon(this.props.type)} > 
               <p>Desenvolvido por Nathan Munis</p>
            </div>
        )
    }

}