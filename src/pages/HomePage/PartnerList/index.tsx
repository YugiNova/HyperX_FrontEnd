import Slider from "react-slick";
import brand1 from "../../../assets/Partner/brand1.png";
import brand2 from "../../../assets/Partner/brand2.png";
import brand3 from "../../../assets/Partner/brand3.jpg";
import brand4 from "../../../assets/Partner/brand4.png";
import brand5 from "../../../assets/Partner/brand5.png";
import brand6 from "../../../assets/Partner/brand6.png";
import brand7 from "../../../assets/Partner/brand7.png";
import brand8 from "../../../assets/Partner/brand8.png";
import { BrandImage, BrandWrapper, Button, Container, Title } from "./styles";
import { useRef } from "react";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const PartnerList: React.FC = () => {
    const ref = useRef<any>();
    const theme = useSelector(getTheme);

    const setting = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows:false
    };

    return (
        <Container>
            <Title>Brands</Title>
            <Button postion="left" theme={theme} onClick={()=> {ref.current.slickPrev()}}><CaretLeftOutlined /></Button>
            <Button postion="right" theme={theme} onClick={()=> {ref.current.slickNext()}}><CaretRightOutlined /></Button>
            <Slider ref={ref} {...setting}>
                <div>
                <BrandWrapper theme={theme}>
                    <BrandImage src={brand1} />
                </BrandWrapper>
                </div>
                <div>
                <BrandWrapper theme={theme}>
                    <BrandImage src={brand2} />
                </BrandWrapper>
                </div>
                <div>
                <BrandWrapper theme={theme}>
                    <BrandImage src={brand3} />
                </BrandWrapper>
                </div>
                <div>
                <BrandWrapper theme={theme}>
                    <BrandImage src={brand4} />
                </BrandWrapper>
                </div>
                <div>
                <BrandWrapper theme={theme}>
                    <BrandImage src={brand5} />
                </BrandWrapper>
                </div>
                <div>
                <BrandWrapper theme={theme}>
                    <BrandImage src={brand6} />
                </BrandWrapper>
                </div>
                <div>
                <BrandWrapper theme={theme}>
                    <BrandImage src={brand7} />
                </BrandWrapper>
                </div>
                <div>
                <BrandWrapper theme={theme}>
                    <BrandImage src={brand8} />
                </BrandWrapper>
                </div>
            </Slider>
        </Container>
    );
};

export default PartnerList;
