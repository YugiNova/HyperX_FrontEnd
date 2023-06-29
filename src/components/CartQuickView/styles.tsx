import { Drawer } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    cursor: pointer;
    font-size: 1.5rem;
    background: transparent;
    border: none;
    transition: 0.5s ease;

    &:hover {
        svg {
            color: ${(props) => props.theme.primaryColor};
        }
    }
`;

export const CustomDrawer = styled(Drawer)`
    &.custom-drawer {
        background: ${(props) => props.theme.priamryBackground};
    }
    .ant-drawer-header-title {
        flex-direction: row-reverse;
    }
`;

export const DrawerContainer = styled.div``;

export const Title = styled.h2`
    margin: 0;
    text-align: left;
`;

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: ${(props) => props.theme.primaryColor};
    transition: 0.25s ease;
    margin-right: -20px;

    svg {
        font-size: 1rem;
        font-weight: 900;
        color: ${(props) => props.theme.priamryBackground};
    }

    &:hover {
        background: ${(props) => props.theme.primaryFont};

        svg {
            color: ${(props) => props.theme.primaryColor};
        }
    }
`;

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-top: 1px solid ${(props) => props.theme.primaryColor};
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};

    h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
    }

    h4 {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${(props) => props.theme.primaryColor};
        margin: 0;
    }
`;

export const ButtonWrapper = styled.div`
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

export const ViewCart = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0.5rem;
    margin-bottom: 1rem;

    background: ${(props) => props.theme.priamryBackground};
    color: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
    transition: 0.5s ease;

    &:hover {
        background: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.priamryBackground};
    }
`;

export const CheckOut = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0.5rem;

    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.priamryBackground};
    border: 1px solid ${(props) => props.theme.primaryColor};
    transition: 0.5s ease;

    &:hover {
        background: ${(props) => props.theme.primaryFont};
        color: ${(props) => props.theme.priamryBackground};
    }
`;
