import styled from "styled-components";

export const Botao = styled.button `
    border: none;
    background-color: orange;
    padding: 5px;

    :hover {
        background-color: red;
    }
`
export const GaragemContainer = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const Estacionamento = styled.section `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    list-style: none;
    background-color: gray;

    li{
        list-style: none;
    }
`