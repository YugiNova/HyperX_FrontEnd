import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomBreadcrumb = styled(Breadcrumb)`
    padding: 0.5rem 5rem;
    background: ${props => props.theme.priamruBackground};
`

export const BreadcrumbItem = styled(Link)`
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.primaryFont};
`