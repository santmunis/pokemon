import styled from 'styled-components';

export const ContainerResumoPedido = styled.div`
    background-color: #f0f0f0;
    margin-top:76px;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 575.98px) {
        margin-top: 0;
    }
`;

export const ContainerTitulo = styled.div`
    background-color: #f0f0f0;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 575.98px) {
        margin-top: 0;
    }
`;

export const ContainerPedidos = styled.div`
    max-height: 500px;
    overflow: 'scroll';
    overflow-x: 'hidden';
    
`;

export const ItemPedidos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left:10px;
    padding-right:10px;
`;


    
