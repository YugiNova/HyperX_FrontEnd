import { ColumnsType } from "antd/es/table";
import { Container } from "./styles"
import {Table} from 'antd';


const Information = () => {

    interface DataType {
        key: string;
        title: string;
        detail: string;
      }
      
      const columns: ColumnsType<DataType> = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Detail',
          dataIndex: 'detail',
          key: 'detail',
        },
      ];
      
      const data: DataType[] = [
        {
            key: "1",
            title: "Series laptop",
            detail: "VivoBook",
        },
        {
            key: "2",
            title: "Màu sắc",
            detail: "Xanh",
        },
        {
            key: "3",
            title: "Nhu cầu",
            detail: "Văn phòng, Học sinh - Sinh viên, Doanh nhân",
        },
        {
            key: "3",
            title: "CPU",
            detail: "Intel Core i5-1240P ( 1.7 GHz - 4.4GHz / 12MB / 12 nhân, 16 luồng )",
        },
        {
            key: "3",
            title: "CPU",
            detail: "Onboard Intel Iris Xe Graphics",
        },
        {
            key: "3",
            title: "RAM",
            detail: "8GB Onboard DDR4 ( 1 Khe cắm / Hỗ trợ tối đa 24GB )",
        },
        {
            key: "3",
            title: "Màn hình",
            detail: "'15.6' ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam",
        },
        {
            key: "3",
            title: "Lưu trữ",
            detail: "512GB SSD M.2 NVMe",
        },
      ];

    return(
        <Container>
            <Table pagination={false} dataSource={data} columns={columns}/>
        </Container>
    )
}

export default Information