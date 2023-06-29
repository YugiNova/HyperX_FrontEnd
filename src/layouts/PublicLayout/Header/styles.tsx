import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    width: 100%;
    padding:0.5rem 5rem;
    box-shadow:0 4px 10px rgba(3,4,28,.1);

    grid-template-rows: auto;
    grid-template-columns: 13rem auto 25rem 4rem 4rem;
    align-items: center;

    background-color: ${props=> props.theme.priamryBackground};
`

export const Logo = styled.img`
    grid-column:1/2;
    grid-row:1/2;

    width: 100%;
`

export const Navbar = styled.div`
    grid-column:2/3;
    grid-row:1/2;
    display : flex;
    flex-direction: row;
`

export const NavItem = styled(NavLink)`
    display:inline-block;
    text-decoration:none;
    font-size: 1rem;
    color: ${props => props.theme.primaryFont};
    font-weight: 700;
    padding:0.2rem 0;
    margin: 0 1rem;
    transition: 0.5s ease;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;

    &:hover{
        color: ${props => props.theme.primaryColor};
        border-bottom: 3px solid ${props => props.theme.primaryColor};
    }

    /* &.active{
        color: ${props => props.theme.primaryColor};
        border-bottom: 3px solid ${props => props.theme.primaryColor};
    } */
`

export const SearchWrapper = styled.div`
    grid-column:3/4;
    grid-row:1/2;
    
`

export const Account = styled.div`
    grid-column:4/5;
    grid-row:1/2;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const Cart = styled.div`
    grid-column:5/6;
    grid-row:1/2;
    display: flex;
    justify-content: end;
    align-items: center;
`