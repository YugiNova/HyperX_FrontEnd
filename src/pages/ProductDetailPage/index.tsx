import { ButtonWrapper, Container, CustomRate, FirstPrice, ImageWrapper, InfoWrapper, Name, Price, ProductCode, ProductImage, SalePrice, SmallDescription, TabsContainer, WhishList } from "./styles";
import Layout from "../../layouts/PublicLayout";
import QuantityInput from "../../components/QuantityInput";
import AddToCart from "../../components/AddToCart";
import product1 from "../../assets/Products/product1.webp"
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import InfoTabs from "./InfoTabs";

const ProductDetailPage: React.FC = () => {
    const theme = useSelector(getTheme)

    return (
        <Layout>
            <Container theme={theme}>
                <ImageWrapper>
                    <ProductImage src={product1}/>
                </ImageWrapper>
                <InfoWrapper>
                    <Name theme={theme}>Laptop ASUS Vivobook X1502ZA-BQ127W</Name>
                    <Price>
                        <SalePrice theme={theme}>14.000.000</SalePrice>
                        <FirstPrice theme={theme}>15.000.000</FirstPrice>
                    </Price>
                    <CustomRate theme={theme} allowHalf defaultValue={2.5}/>
                    <SmallDescription theme={theme}>Laptop Asus Vivobook X1502ZA-BQ127W chính là mẫu laptop cao cấp thuộc dòng Vivobook đến từ thương hiệu Asus không quá xa lạ với người dùng. Sở hữu kiểu dáng khá đơn giản gọn nhẹ bắt kịp với xu hướng cùng hiệu năng vượt trội trong tầm giá hứa hẹn sẽ làm hài lòng các bạn văn phòng hoặc học sinh - sinh viên.</SmallDescription>
                    <ButtonWrapper>
                        <QuantityInput/>
                        <AddToCart/>
                        <WhishList></WhishList>
                    </ButtonWrapper>
                    <ProductCode theme={theme}>
                        <p>Thương hiệu: <span>ASUS</span></p>
                        <p>SKU: <span>ASUS</span></p>
                        <p>Tags: <span>Laptop,ASUS,Vivobook</span></p>
                    </ProductCode>
                </InfoWrapper>
                <TabsContainer>
                    <InfoTabs/>
                </TabsContainer>
            </Container>
        </Layout>
    );
};

export default ProductDetailPage;
