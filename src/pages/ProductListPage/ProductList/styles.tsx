import { Pagination } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    padding:1rem 5rem;
`

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
`

export const CustomPagination = styled(Pagination)`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 2rem 0;
    margin-bottom:0;
    font-size: 1rem;
`