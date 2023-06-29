import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    padding: 1rem 5rem;
    justify-content: space-between;
    align-items: center;
`

export const PromoteWrapper = styled.div`
    border-radius:1rem;
    overflow:hidden;
    transition: 0.25s ease;

    &:hover{
        transform:scale(1.1);
    }
    
`

export const Promote = styled.img`
    width:100%;
`