import styled from "styled-components";
import { Image } from "antd"
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    column-gap: 0.5rem;
    margin-bottom: 1rem;
`

export const ImageWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/span 2;
    border: 1px solid${props => props.theme.primaryColor};
    border-radius: 0.25rem;
    overflow: hidden;
`

export const ProductImage = styled(Image)`
`

export const Name = styled(Link)`
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.primaryFont};
`

export const Price = styled.p`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.primaryColor};
`