import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
interface DataType {
    key: string;
    title: string;
    detail: string;
}

const TableInfo: React.FC = () => {
    const columns: ColumnsType<DataType> = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Detail",
            dataIndex: "detail",
            key: "detail",
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            title: "CPU",
            detail: "Ryzen 5 4600H",
        },
        {
            key: "1",
            title: "RAM",
            detail: "8GB",
        },
        {
            key: "1",
            title: "GPU",
            detail: "RTX 3050",
        },
        {
            key: "1",
            title: "SSD",
            detail: "512GB",
        },
    ];

    return <Table bordered={true} pagination={false} columns={columns} dataSource={data} />;
};

export default TableInfo;
