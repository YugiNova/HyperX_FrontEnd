import { Button, Table, Modal } from "antd";
import { deleteProduct, getProductList } from "../../../../../services/product";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface Props {
    data: any;
    total: number;
    loading: boolean;
    setData: (data: any) => void;
}
const { confirm } = Modal;

const TableData: React.FC<Props> = ({ data, total, loading, setData }) => {
    const navigate = useNavigate()
    const onDelete = async (id: number) => {
        const res = await deleteProduct(id);
        getProductList(1,5,"id","asc").then(
          (res) => {
              setData(res.result);
          }
      );
    };

    const onEdit = (id:number) => {
      navigate(`update-product/${id}`)
    }
    const showConfirm = (id: number) => {
        confirm({
            title: "Do you Want to delete this product?",
            icon: <ExclamationCircleFilled />,
            content: "Product's data will lost",
            onOk() {
                onDelete(id);
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (_: any, item: any) => {
                return <img src={item.image_url} width={100} height={100} />;
            },
        },
        {
            title: "Long Description",
            dataIndex: "long_desc",
            key: "long_desc",
        },
        {
            title: "Short Description",
            dataIndex: "short_desc",
            key: "short_desc",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_: any, item: any) => {
                return (
                    <div>
                        <Button onClick={() => {onEdit(item.id)}}>Edit</Button>
                        <Button
                            onClick={() => {
                                showConfirm(item.id);
                            }}
                            danger
                        >
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <Table
            loading={loading}
            columns={columns}
            dataSource={data}
            pagination={{
                total: total,
                pageSizeOptions: [5, 10, 15],
                showSizeChanger: true,
            }}
            onChange={(pagination) => {
                getProductList(pagination.current, pagination.pageSize).then(
                    (res) => {
                        setData(res.result);
                    }
                );
            }}
        />
    );
};

export default TableData;
