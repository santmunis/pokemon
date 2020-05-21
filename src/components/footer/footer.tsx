import React from 'react';
import {Container} from './style-footer'

interface OwnProps{
    color: string
}
export default function Footer(props: OwnProps){
    return(
        <Container color={props.color}>
            <p>Desenvolvido por Nathan Munis</p>
        </Container>
    )
}
