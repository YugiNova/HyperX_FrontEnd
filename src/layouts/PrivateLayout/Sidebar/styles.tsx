import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items:center;
    background:${props => props.theme.priamryBackground};

    height: 100%;
    width: 100%;
`

export const Logo = styled.div`
    width: 100%;
    padding: 0.5rem 1rem;


    img{
        border: 3px solid ${props=>props.theme.primaryColor};
        width: 100%;
    }
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items:center;
`

export const NavItem = styled(NavLink)`
    width: 100%;
    text-decoration: none;
    text-align:left;
    background: ${props=>props.theme.priamryBackground};
    color: ${props=>props.theme.primaryFont};
    padding: 1rem;
    font-weight: 600;
    margin: 0;

    border-bottom: 1.75px solid ${props=>props.theme.secondaryBackground};
    border-top: 1.75px solid ${props=>props.theme.secondaryBackground};
    transition: 0.5s ease;

    &:hover{
        margin-left: 1.5rem;
        color: ${props=>props.theme.primaryColor};
    }

    &.active{
        border-left: 5px solid ${props=>props.theme.primaryColor};
        color: ${props=>props.theme.primaryColor};
    }
`