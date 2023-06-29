import {
    Container,
    CustomForm,
    CustomInput,
    SubmitButton,
    Title,
} from "./styles";
import Layout from "../../layouts/PublicLayout";
import { Form } from "antd";
import { useSelector } from "react-redux";
import { InfoCircleOutlined, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { CustomInputPassword } from "../SignInPage/styles";
import { getTheme } from "../../redux/selectors";

export const SignUpPage = () => {
    const theme = useSelector(getTheme);

    return (
        <Layout>
            <Container theme={theme}>
                <Title theme={theme}>Register</Title>
                <CustomForm theme={theme} layout="vertical">
                    <Form.Item name="username">
                        <CustomInput
                            placeholder="Username"
                            theme={theme}
                            prefix={<UserOutlined />}
                        />
                    </Form.Item>
                    <Form.Item name="name">
                        <CustomInput
                            placeholder="Name"
                            theme={theme}
                            prefix={<InfoCircleOutlined />}
                        />
                    </Form.Item>
                    <Form.Item name="email">
                        <CustomInput
                            placeholder="Email"
                            theme={theme}
                            prefix={<MailOutlined />}
                        />
                    </Form.Item>
                    <Form.Item name="password">
                        <CustomInputPassword
                            placeholder="Password"
                            theme={theme}
                            prefix={<LockOutlined />}
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        "The two passwords that you entered do not match!"
                                    );
                                },
                            }),
                        ]}
                    >
                        <CustomInputPassword
                            placeholder="Confirm password"
                            theme={theme}
                            prefix={<LockOutlined />}
                        />
                    </Form.Item>
                </CustomForm>
                <SubmitButton theme={theme}>LOGIN</SubmitButton>
            </Container>
        </Layout>
    );
};
export default SignUpPage;
