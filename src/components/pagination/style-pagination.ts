import styled from 'styled-components';

export const ContainerFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerItensPerPage = styled(ContainerFlex)`
    width: 180px;
    @media (max-width: 575.98px) {
        display:none;
  }
`;

export const Pagination = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    font-style: 700 16px/23px "Ubuntu", sans-serif;
    cursor: pointer;
    @media (max-width: 575.98px) {
        display:none;
  }
`;

export const PaginationItem = styled.li`
    background-color: ${(props) => props.color};
    margin-right: 5px;
    padding: 16px 20px;
    color: #faf9f9;
`;


