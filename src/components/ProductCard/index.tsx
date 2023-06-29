import { useSelector } from "react-redux";
import product1 from "../../assets/Products/product1.webp";
import {
  Container,
  FirstPrice,
  Image,
  ImageWrapper,
  SalePrice,
  RateStar,
  Name,
  QuickButtonWrapper,
  CartWrapper,
} from "./styles";
import { getTheme } from "../../redux/selectors";
import { Badge } from "antd";
import AddToWhistList from "./AddToWhistList";
import Detail from "./Detail";
import Compare from "./Compare";
import AddToCart from "../AddToCart";

const ProductCard: React.FC = () => {
  const theme = useSelector(getTheme);

  const quickButtonWrapper = {
    rest: {
        right: "-10rem",
    },
    hover:{
        right: "0.75rem",
        transition: {
            staggerChildren: 0.2
          }
    }
  }

  const cartButton = {
    rest: {
        bottom: "-10rem",
    },
    hover:{
        bottom: "1rem"
    }
  }

  return (
    <Badge.Ribbon text="10%" placement="start" color={theme.primaryColor}>
      <Container theme={theme}  initial='rest' whileHover='hover' animate='rest'>
        <ImageWrapper theme={theme}>
          <Image src={product1} />
          <QuickButtonWrapper variants={quickButtonWrapper}>
            <AddToWhistList/>
            <Detail/>
            <Compare/>
          </QuickButtonWrapper>
          <CartWrapper variants={cartButton}>
            <AddToCart/>
          </CartWrapper>
        </ImageWrapper>
        <Name to={"/category/product"} theme={theme}>Moniteur portatif</Name>
        <RateStar allowHalf defaultValue={3.5} disabled />
        <SalePrice theme={theme}>14.000.000đ</SalePrice>
        <FirstPrice theme={theme}>15.000.000đ</FirstPrice>
      </Container>
    </Badge.Ribbon>
  );
};

export default ProductCard;
