import { Button, Carousel } from "antd";
import ProductCard from "../../../components/ProductCard";
import {
    ButtonCustom,
    Container,
    ProductSlider,
    SliderButton,
    SliderItem,
    Title,
} from "./styles";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const ProductList: React.FC = () => {
    const ref = useRef<any>();
    const theme = useSelector(getTheme);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    return (
        <Container>
            <Title>Most Sale Products</Title>
            <SliderButton>
                <ButtonCustom
                    theme={theme}
                    onClick={() => {
                        ref.current.slickPrev();
                    }}
                >
                    <CaretLeftOutlined />
                </ButtonCustom>
                <ButtonCustom
                    theme={theme}
                    onClick={() => {
                        ref.current.slickNext();
                    }}
                >
                    <CaretRightOutlined />
                </ButtonCustom>
            </SliderButton>
            <ProductSlider ref={ref} {...settings}>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
                <SliderItem>
                    <ProductCard />
                </SliderItem>
            </ProductSlider>
        </Container>
    );
};

export default ProductList;
