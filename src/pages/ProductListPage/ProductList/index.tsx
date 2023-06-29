import { Pagination } from "antd"
import ProductCard from "../../../components/ProductCard"
import { Container, CustomPagination, List } from "./styles"
import { useSelector } from "react-redux"
import { getTheme } from "../../../redux/selectors"


const ProductList:React.FC = () => {
    const theme = useSelector(getTheme)
    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    return(
        <Container>
            <List>
                {
                    items.map(item => {
                        return <ProductCard/>
                    })
                }
            </List>
            <CustomPagination theme={theme} defaultCurrent={1} total={items.length} />
        </Container>
    )
}

export default ProductList