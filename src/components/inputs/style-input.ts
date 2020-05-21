import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10px;
    max-width: 100%;
`;

export const InputBox = styled.input.attrs(() => ({
  type: 'text',
}))`
    width: 100%;
    padding: 10px;
    padding-left: 5em;
    height:40px;
    border: 1px solid #f1f3f5;
    background-color: #f1f3f5;
    :focus {
        outline: none !important;
        box-shadow: 0 0 5px ${(props) => props.color};
      }
`;
