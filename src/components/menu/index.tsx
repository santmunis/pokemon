import React from 'react';
import * as menu from './style-menu';
import { Link } from 'react-router-dom'
const logo = require('./../../assets/Pokestore.png')

const fire = require('./../../assets/fire.jpg')
const water = require('./../../assets/water.jpg')
const ghost = require('./../../assets/ghost.jpg')
const ground = require('./../../assets/ground.jpg')

interface OwnProps{
    color: string
}
export default function Menu(props: OwnProps){
    return(
        <>
            <menu.Container color={props.color}>
                <div>
                    <img src={logo} width="170px" height="50px" alt="Logo da loja" />
                </div>
            </menu.Container>
            <menu.ContainerImg>
                <Link to="/">
                    <menu.ContainerImgItem src={fire}  alt="Tipo Fogo"/>
                </Link>
                <Link to="/">
                    <menu.ContainerImgItem src={water} alt="Tipo Água"/>
                </Link>
                <Link to="/">
                    <menu.ContainerImgItem src={ghost} alt="Tipo Fantasma"/>
                </Link>
                <Link to="/">
                    <menu.ContainerImgItem src={ground}alt="Tipo Teraa" />
                </Link>
            </menu.ContainerImg>
        </>
    )
}
