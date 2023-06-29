import { Button, Form, Input, InputNumber, Space, Table, Upload } from "antd";
import { Container } from "./styles";
import axios from "axios";
import { createProduct, getProductDetail } from "../../../../services/product";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const CreateProduct: React.FC = () => {
    // pid,name,price,discount_id,quantity,brand_id,long_desc,short_desc,detail
    const [buttonLoading,setButtonLoading] = useState<boolean>(false)
    const [form] = Form.useForm();
    const {id} = useParams();

    useEffect(()=>{
        if(id){
            getProductDetail(Number(id)).then(res => {
                form.setFieldsValue(res);
            })
        }
    },[])

    const onSubmit = async () => {
        setButtonLoading(true)
        const data = await form.validateFields();
        console.log(data);
        const result = await createProduct(data);
        console.log(result);
        setButtonLoading(false)
    };

    return (
        <Container>
            <Form form={form} layout="vertical">
                <Form.Item
                    label="Product ID"
                    name="pid"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Discount"
                    name="discount_id"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Brand"
                    name="brand_id"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Long Description"
                    name="long_desc"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Short Description"
                    name="short_desc"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    label="Detail"
                    name="detail"
                    rules={[{ required: true, message: "Not data here" }]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item name="image">
                    <Upload>
                        <Button>Upload Image</Button>
                    </Upload>
                </Form.Item>
                <Form.List name="detail">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{ display: "flex", marginBottom: 8 }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, "title"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Missing title",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Title" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, "info"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Missing info",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Info" />
                                    </Form.Item>
                                    <MinusCircleOutlined
                                        onClick={() => remove(name)}
                                    />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Button loading={buttonLoading} onClick={onSubmit}>Create</Button>
            </Form>
        </Container>
    );
};

export default CreateProduct;
