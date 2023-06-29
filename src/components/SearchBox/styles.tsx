import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1fr 2rem;
    grid-template-rows:1fr;

    padding: 0.5rem;
    border: 2px solid ${props => props.theme.secondaryFont};
    border-radius:1rem;
`

export const Input = styled.input`
    font-size: 1rem;
    padding: 0 0.25rem;
    border:none;

    &:focus{
        outline:none;
    }
`

export const SubmitButton = styled.button`
    font-size: 1.25rem;
    background: transparent;
    border:none;
    padding:0;
    cursor: pointer;
    font-weight:bold;

    &:hover{
        color: ${props => props.theme.primaryColor};
    }
`