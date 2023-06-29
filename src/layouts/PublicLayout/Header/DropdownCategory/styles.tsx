import { Dropdown } from "antd";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const CustomDropdown = styled.div`
    position: relative;

    &:hover {
        ul {
            display: flex;
        }

        &::before {
            display: block;
        }
    }

    .cover {
        display: block;
        position: absolute;
        z-index: 10;
        background: transparent;
        width: 100%;
        height: 0.25rem;
        top: 100%;
        left: 0;
    }

    ul {
        display: none;
        position: absolute;
        z-index: 1;
        background: ${(props) => props.theme.secondaryBackground};
        border: 2px solid ${(props) => props.theme.primaryColor};
        border-radius: 0.25rem;
        top: 100%;
        left: 0;
        width: auto;
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-top: 0.25rem;
        flex-direction: column;
    }

    a.menuitem {
        background: ${(props) => props.theme.priamryBackground};
        color: ${(props) => props.theme.primaryFont};

        &:hover {
            background: ${(props) => props.theme.primaryColor};
            color: ${(props) => props.theme.priamryBackground};
        }
    }
`;

export const DropdownItem = styled(Link)`
    padding: 0.5rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    transition: 0.25s ease;
    width: auto;
    position: relative;

    &:hover {
        ul.submenu {
            display: flex;
        }
    }

    ul.submenu {
        display: none;
        flex-direction: column;
        width: auto;
        top: 0;
        left: 100%;
        margin-top: 0;
        margin-left: 0.5rem;
        width: auto;

        &::before {
            content: "";
            position: absolute;
            width: 0.5rem;
            height: 100%;
            background: transparent;
            top: 0;
            right: 100%;
        }
    }
`;

export const DropdownButton = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.theme.primaryFont};
    font-weight: 700;
    padding: 0.2rem 0;
    margin: 0 1rem;
    transition: 0.5s ease;
    border: none;
    background: transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.primaryColor};
        border-bottom: 3px solid ${(props) => props.theme.primaryColor};
    }
`;
