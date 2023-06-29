import {useState} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import { Affix, FloatButton } from "antd";
import SmallHeader from './SmallHeader';
import Breadcrumb from './Breadcrumb';

interface Props {
    children: React.ReactNode;
}

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

const PublicLayout: React.FC<Props> = ({ children }) => {
  const [top, setTop] = useState<number>(0);

    return (
        <div>
            <SmallHeader/>
            <Affix offsetTop={0}>
                <Header />
            </Affix>
            <Breadcrumb/>
            {children}
            <Footer />
            <FloatButton.BackTop />
        </div>
    );
};

export default PublicLayout;
