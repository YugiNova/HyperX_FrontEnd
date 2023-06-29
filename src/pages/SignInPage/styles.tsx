import { Button, Form, Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    width: 30%;
    margin: 5rem auto;
    border: 1px solid ${props=> props.theme.primaryColor};
    border-radius: 0.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
`

export const Title = styled.h1`
    margin: 0;
    margin-bottom: 1rem;
    color: ${props=> props.theme.primaryColor};
`

export const CustomForm = styled(Form)`
    width: 100%;
    
`

export const CustomInput = styled(Input)`
    font-size: 1.2rem;
    margin-top: 1rem;

    &:hover{
        border: 1px solid ${props=> props.theme.primaryColor} !important;
    }

    &:focus{
        border: 1px solid ${props=> props.theme.primaryColor} !important;
    }
`

export const CustomInputPassword = styled(Input.Password)`
    font-size: 1.2rem;
    margin-top: 1rem;

    &:hover{
        border: 1px solid ${props=> props.theme.primaryColor} !important;
    }

    &:focus{
        border: 1px solid ${props=> props.theme.primaryColor} !important;
    }
`

export const SubmitButton = styled(Button)`
    width: 100%;
    font-size: 1.2rem;
    height: auto;
    background: ${props=> props.theme.primaryColor};
    color: ${props=> props.theme.primaryFont};
    margin-top: 1rem;

    &:hover{
        background: transparent;
        color: ${props=> props.theme.primaryColor} !important;
        border: 1px solid ${props=> props.theme.primaryColor} !important;
    }
`

