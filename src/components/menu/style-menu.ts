import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.color} ;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ContainerImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 575.98px) {
        display:grid;
        justify-items: center;
        grid-template-columns: 50% 50%;
        grid-template-areas: 
        "fire water"
        "ghost ground";
  }
`;

export const ContainerImgItem = styled.img`
    max-width: 98%;
    max-height: 320px;
    margin: 20px 40px 0 0;
    @media (max-width: 575.98px) {
        width: 98%;
        margin: 5px 2px 0 2px; 
  }
`;
