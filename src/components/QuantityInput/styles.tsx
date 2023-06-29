import { InputNumber } from "antd"
import styled from "styled-components"

export const Quantity = styled(InputNumber)`
    width: 100%;   

    .ant-input-number-wrapper{
        border: 2px solid ${props => props.theme.primaryColor};
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .ant-input-number-group-addon{
        padding: 0;
    }

    .ant-input-number-input{
        text-align: center;
        font-size: 1.1rem;
        color: ${props => props.theme.primaryColor};
    }
`

export const QtyButton = styled.button`
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background: transparent;
    border: none;
    color: ${props => props.theme.primaryColor};
    font-weight: bold;
`