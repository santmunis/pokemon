import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default class Input extends React.Component {
    render() {
        return (
            <div className="divBusca">
                <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', zIndex: 1, marginTop: '24px', marginLeft: '30px', color: 'red' }} />
                <input
                    type="text"
                    className="txtBusca"
                    placeholder="Pesquisar..."
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }

}