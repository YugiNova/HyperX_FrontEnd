import styled from "styled-components";

export const CustomButton = styled.button`
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    cursor: pointer;

    background: ${props=> props.theme.primaryColor};
    color: ${props=> props.theme.secondaryBackground};
    border: 2px solid ${props=> props.theme.primaryColor};

    transition: 0.25s ease;

    svg{
        margin-right: 5px;
    }

    &:hover{
        background: ${props=> props.theme.secondaryBackground};
    color: ${props=> props.theme.primaryColor};
    }
`