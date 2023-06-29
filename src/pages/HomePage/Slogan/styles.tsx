import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    padding: 1rem 5rem;
`

export const SloganItem = styled.div`
    width: 30%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    text-align:center;
    box-shadow:0px 3px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    border-radius: 1rem;
    line-height: 1.5;
    transition:0.5s ease;

    svg{
        font-size: 3rem;
        color: ${props=>props.theme.primaryColor};
    }

    &:hover{
        background:${props=>props.theme.primaryColor};

        h2,p,svg{
            color:${props=>props.theme.priamryBackground};
        }
    }
`

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight:bold;
    margin:0;
    margin-bottom: 1rem;
    color:${props=>props.theme.primaryFont};
`

export const Content = styled.p`
    margin:0;
    color:${props=>props.theme.secondaryFont};
`