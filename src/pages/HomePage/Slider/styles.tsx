import { Button } from "antd";
import styled from "styled-components";

interface Props {
    position?:string
}

export const Container = styled.div`
    position:relative;
`

export const SliderButton = styled.button<Props>`
    position:absolute;
    top:48%;
    ${props=> props.position}: 5rem;
    width: 2.5rem;
    height:2.5rem;
    display:flex;
    justify-content: center;
    align-items:center;
    padding: 0.5rem;
    border-radius:50%;
    background: ${props=>props.theme.secondaryBackground};
    opacity: 0.5;
    border:${props=>props.theme.secondaryBackground} 2px solid;
    transition: 0.25s ease;

    &:hover{
        border:${props=>props.theme.primaryColor} 2px solid;
        opacity: 1;
        svg{
            color:${props=>props.theme.primaryColor};
            font-weight:bold;
        } 
    }
`