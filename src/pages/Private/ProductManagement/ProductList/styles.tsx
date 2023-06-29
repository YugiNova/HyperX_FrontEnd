import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    
    
`

export const CreateButton = styled(NavLink)`
    display:inline-block;
    text-decoration: none;
    background: ${props=>props.theme.primaryColor};
    color: ${props=>props.theme.priamryBackground};
    padding: 0.5rem;
    margin-bottom: 1rem;
    &:hover{
        box-shadow:0 4px 10px rgba(3,4,28,.1);
    }
`