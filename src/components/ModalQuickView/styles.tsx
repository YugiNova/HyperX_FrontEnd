import { InputNumber, Modal, Rate } from "antd";
import styled from "styled-components";

export const CustomeModal = styled(Modal)`
    height: auto;
    width: auto;

    .ant-modal-content{
        padding: 0.5rem;
        background: ${props => props.theme.priamryBackground};
        border: 2px solid ${props => props.theme.primaryColor};
    }
`

export const Container = styled.div`
    position: relative;
    padding: 2rem;
    width: auto;
    height: auto;
    background:${props=> props.theme.priamryBackground};
    display: flex;
    flex-direction: row;

`

export const ImageWrapper = styled.div`
    max-width: 520px;
`

export const ProductImage = styled.img`
    width: 100%;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 35rem;
`

export const Name = styled.h2`
    margin: 0;
    font-size: 1.75rem;
`

export const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SalePrice = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    color: ${props=> props.theme.primaryColor};
    margin-right: 10px;
`

export const FirstPrice = styled.h4`
    margin: 0;
    color: ${props=> props.theme.secondaryFont};
    text-decoration: line-through;
    font-size: 1rem;
`

export const CustomRate = styled(Rate)`
    font-size: 1.25rem;
    margin-bottom: 2rem;
`

export const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 7rem 10rem;
    grid-template-rows: auto;
    gap: 1rem;
    margin-top: 1rem;
`

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

export const CloseButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: ${props=> props.theme.primaryColor};
    transition: 0.25s ease;

    svg{
        font-size: 1.5rem;
        font-weight: 900;
        color: ${props=> props.theme.priamryBackground};
    }

    &:hover{
        background: ${props=> props.theme.primaryFont};

        svg{
            color: ${props=> props.theme.primaryColor};
        }
    }
`