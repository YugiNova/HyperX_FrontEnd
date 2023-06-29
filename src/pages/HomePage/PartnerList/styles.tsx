import styled from "styled-components";

interface Props {
    postion:string
}

export const Container = styled.div`
    padding: 1rem 5rem;
    position:relative;
`

export const Title = styled.h1`
    margin: 0;
    width: 100%;
    text-align: center;
    margin-bottom:0.5rem;
`

export const Button = styled.button<Props>`
    position: absolute;
    bottom: 3.25rem;
    ${props=>props.postion}: 4rem;
    z-index: 1;

    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    background: ${props=>props.theme.secondarybacground};
    color: ${props=>props.theme.primaryFont};
    cursor: pointer;
`

export const BrandWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border: 2px solid ${props=>props.theme.primaryColor};
    border-radius: 0.25rem;
`

export const BrandImage = styled.img`
    width: 100%;
    height: 100%;
`