import styled from 'styled-components';

export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
    color: white;
    height: 55px;
    font-weight: bold;
    align-self: normal;
`;

export const ButtonFinalizar = styled.button`
    width: 100%;
    height: 40px;
    background-color: green;
    border:none;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
`;

export const ButtonOutilined = styled.div`
    display: none ;
    width: 90vw;
    border: 2px solid ${(props) => props.color};
    justify-content: center;
    color:${(props) => props.color};
    font-style: 700 16px/23px "Ubuntu", sans-serif;
    @media (max-width: 575.98px){
        display:flex;
    }
`;
