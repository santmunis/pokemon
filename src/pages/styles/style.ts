import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2vw 70vw auto 2vw;
    grid-template-rows: auto;
    grid-template-areas: 
    "header header header header"
    "serchBar serchBar serchBar serchBar"
    "main main sidebar sidebar"
    "footer footer footer footer";
    @media (max-width: 1024px) {
      grid-template-columns: 2vw 85vw auto 2vw;
    }
    @media (max-width: 768px) {
        grid-template-columns: 2vw 95vw auto 2vw;
    }
    @media (max-width: 575.98px) {
        grid-template-rows: auto;
        grid-template-areas: 
        "header"
        "serchBar"
        "main"
        "sidebar"
        "footer";
    }
`;

export const Header = styled.div`
    grid-area: header;
    grid-column-start: 1;
    grid-column-end: 5; 
    min-height: 8vh;
`;

export const ContentSerchBar = styled.div`
    grid-area: serchBar;
    overflow: hidden;
    grid-column-start: 2;
    grid-column-end: 4;
`;

export const Main = styled.div`
    grid-area: main;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-column-start: 2;
    grid-column-end: 3; 
    margin-top:10px;
    min-height: 85vh;
    min-height: -webkit-calc(85vh - 50px);
    min-height: -moz-calc(85vh - 50px);
    min-height:  calc(85vh - 50px);
    @media (max-width: 575.98px) {
        grid-template-columns: 50% 50%;
        grid-column-start: 1;
        grid-column-end: 5;
        justify-items: center; 
    }
`;

export const SideBar = styled.div`
    grid-area: sidebar;
    justify-self: stretch;
    padding: 10px;
    grid-column-start: 3;
    grid-column-end: 4;
    margin-top:10px;
    @media (max-width: 575.98px) {
        grid-column-start: 2;
    } 
`;

export const Footer = styled.div`
    grid-area: footer;  
    display: flex;
    height: 50px; 
    @media (max-width: 575.98px) {
        grid-column-start: 1;
        grid-column-end: 5;
    }
`;



