import styled from 'styled-components';

export const ColFull = styled.div`
    grid-column: 1/5;
    @media (max-width: 575.98px) {
        grid-column: 1/3;
    }
`;

export const ContainerCardPokemon = styled.div`
    width: 97%;
    margin-bottom: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 575.98px) {
        width: 90%;
    }
`;

export const ContainerPokemonImg = styled.div`
    background-color: #f8f8f8;
    width: 100%;
`;

export const ImgPokemon = styled.img`
    margin: 0 auto;
    width: 90%;
    height: 90%;
`;

export const Title = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: rgb(102, 102, 102);
    font-family: Helvetica, Arial, sans-serif;
    margin-bottom:0;
`;

export const Price = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: rgb(102, 102, 102);
    font-family: Helvetica, Arial, sans-serif;
    margin-bottom:0;
`;



