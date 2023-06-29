import { Container, CustomForm, CustomInput, SubmitButton, Title } from "./styles";
import Layout from "../../layouts/PublicLayout";
import { Form } from "antd";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export const SignInPage = () => {
    const theme = useSelector(getTheme)

    return (
        <Layout>
            <Container theme={theme}>
                <Title theme={theme}>Log In</Title>
                <CustomForm theme={theme} layout="vertical">
                    <Form.Item name="username">
                        <CustomInput placeholder="Username" theme={theme} prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item name="password">
                        <CustomInput placeholder="Password" theme={theme} prefix={<LockOutlined />} />
                    </Form.Item>
                </CustomForm>
                <SubmitButton theme={theme}>LOGIN</SubmitButton>
            </Container>
        </Layout>
    );
};
export default SignInPage;
