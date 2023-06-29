import { Table } from "antd";
import { Container, CreateButton } from "./styles";
import TableData from "./TableData";
import { useSelector } from "react-redux";
import { getTheme } from "../../../../redux/selectors";
import { useEffect, useState } from "react";
import { getProductList } from "../../../../services/product";
import axios from "axios";

const ProductList: React.FC = () => {
    const theme = useSelector(getTheme);
    const [total, setTotal] = useState<number>(1);
    const [data, setData] = useState<any>([]);
    const [tableLoading, setTableLoading] = useState<boolean>(false);

    const fetchData = () => {
        setTableLoading(true);
        getProductList(1,5,"price","asc").then((res) => {
            setData(res.result);
            setTotal(res.total)
            setTableLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // console.log(data);
    }, [data]);

    return (
        <Container theme={theme}>
            <CreateButton theme={theme} to={"create-product"}>
                Create Product
            </CreateButton>
            <TableData loading={tableLoading} total={total} data={data} setData={setData} />
        </Container>
    );
};

export default ProductList;
