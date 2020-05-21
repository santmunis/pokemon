import React from 'react';
import { InputBox, Container } from './style-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface OwnProps {
    color: string
    placeholder?: string
    value: string
    onChange: (e:React.FormEvent<HTMLInputElement>) => void
}
export default function Input(props: OwnProps) {
    return (
        <Container>
            <FontAwesomeIcon
                icon={faSearch}
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginTop: '24px',
                    marginLeft: '30px',
                    color: props.color
                }}
            />
            <InputBox color={props.color} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </Container>
    )
}

