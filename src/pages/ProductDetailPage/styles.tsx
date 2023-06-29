import { Image, Rate } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    padding: 0 5rem;
    display:grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: auto auto;
`

export const ImageWrapper = styled.div`
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
`

export const ProductImage = styled(Image)`
    width: 100%;
`

export const InfoWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
`

export const Name = styled.div`
    font-size: 2.25rem;
    font-weight: bold;
`

export const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SalePrice = styled.div`
    color: ${props => props.theme.primaryColor};
    font-size:1.75rem;
    font-weight:500;
`

export const FirstPrice = styled.div`
    color: ${props => props.theme.secondaryFont};
    font-size:1.5rem;
    font-weight:500;
    text-decoration: line-through;
    margin-left: 1rem;
`

export const CustomRate = styled(Rate)`
    font-size: 1.25rem;
`

export const SmallDescription = styled.div`
    text-align: justify;
    line-height:1.5;
    font-size: 1.25rem;
    color: ${props => props.theme.primaryFont};
    margin: 2rem 0;
`

export const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 7rem 10rem 1fr;
    column-gap: 1rem;
`

export const WhishList = styled.div`
    
`

export const ProductCode = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    color: ${props => props.theme.secondaryFont};

    p{
        font-size: 1.2rem;
        margin: 0;

        span{
            font-size: 1.2rem;
        }
    }
`

export const TabsContainer = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;
`
