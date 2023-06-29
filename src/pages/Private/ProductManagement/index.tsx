import { Outlet } from "react-router-dom"
import { Container } from "./styles"
import { useSelector } from "react-redux"
import { getTheme } from "../../../redux/selectors"

const ProductManagement = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <Outlet/>
        </Container>
    )
}

export default ProductManagement