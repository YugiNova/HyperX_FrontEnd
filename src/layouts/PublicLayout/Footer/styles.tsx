import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.primaryFont};
    color: ${props => props.theme.priamryBackground};
    margin-top: 3rem;
    padding: 3rem 5rem;

    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    grid-template-rows: auto auto;
    column-gap: 4rem;
`

export const Outro = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    text-align: left;

    img{
        width: 100%;
    }

    p{
        font-size: 1.25rem;
    }

    a{
        color: ${props => props.theme.priamryBackground};
        font-size: 1.75rem;
        margin-right: 10px;

        &:hover{
            color: ${props => props.theme.primaryColor};
        }
    }
`

export const Contact = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    font-size: 1.25rem;

    p{
        display: flex;
        align-items: start;
    }

    svg{
        margin-top: 0.3rem;
        width: 2rem;
    }
`

export const Maps = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
`

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

export const License = styled.div`
    grid-column: 1/4;
    grid-row: 2/3;

    text-align: center;
    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 1px solid ${props => props.theme.primaryColor};
`