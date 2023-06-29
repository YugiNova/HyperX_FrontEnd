import { Select } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.secondaryBackground};
    padding: 0.5rem 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Contact = styled.div`
    font-size: 1rem;
    font-weight: 600;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const CustomSelect = styled(Select)`
    margin-left: 0.5rem;
    color: ${props => props.theme.primaryFont};
    background: ${props => props.theme.priamryBackground};
    border: none;

    svg{
        color: ${props => props.theme.primaryFont};
    }

    &:hover span{
        color: ${props => props.theme.primaryColor};
        border: ${props => props.theme.primaryColor};
        svg{
            color: ${props => props.theme.primaryColor};
        }  
    }
`