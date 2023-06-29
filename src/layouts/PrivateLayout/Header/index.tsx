import { useSelector } from "react-redux"
import { Container, Title } from "./styles"
import { getTheme } from "../../../redux/selectors"


const Header:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}> 
            <Title>Header</Title>
        </Container>
    )
}

export default Header