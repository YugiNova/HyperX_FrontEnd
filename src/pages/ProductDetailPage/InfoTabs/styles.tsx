import { Tabs } from "antd";
import styled from "styled-components";

export const CustomTabs = styled(Tabs)`
    width: 100%;
    padding: 0 3rem;

    .ant-tabs-tab-btn {
        font-size: 1rem;
        color: ${(props) => props.theme.primaryFont} !important;
    }

    .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
            color: ${(props) => props.theme.primaryColor} !important;
        }
    }

    .ant-tabs-ink-bar-animated {
        background: ${(props) => props.theme.primaryColor};
    }
`;
