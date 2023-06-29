import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 15rem 1fr;
    grid-template-rows: auto 1fr;
    background:${props => props.theme.secondaryBackground};
`

export const SidebarWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;
`

export const HeaderWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
`

export const ContentWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;

    padding: 1.5rem;
`