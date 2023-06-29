
import { useSelector } from 'react-redux';
import product1 from '../../../assets/Products/product1.webp'
import { Container, Name, Price, ProductImage ,ImageWrapper} from "./styles"
import { getTheme } from '../../../redux/selectors';

const CartItem:React.FC = () => {
    const theme = useSelector(getTheme);

    return(
        <Container>
            <ImageWrapper theme={theme}><ProductImage width={"100%"} src={product1}/></ImageWrapper>
            <Name to={"/"} theme={theme}>Android Smart Watch XAD0</Name>
            <Price theme={theme}>1 x 14.000.000</Price>
        </Container>
    )
}

export default CartItem