import { useSelector } from "react-redux"
import logo from "../../../assets/Logo.png"
import { Logo, NavBar, NavItem,Container } from "./styles"
import { getTheme } from "../../../redux/selectors"

const Sidebar:React.FC = () => {
    const theme = useSelector(getTheme);

    return(
        <Container theme={theme}>
            <Logo theme={theme}><img src={logo}/></Logo>
            <NavBar>
                <NavItem theme={theme} to={"product"}>Product</NavItem>
                <NavItem theme={theme} to={"/"}>User</NavItem>
                <NavItem theme={theme} to={"/"}>Product</NavItem>
                <NavItem theme={theme} to={"/"}>Product</NavItem>
            </NavBar>
        </Container>
    )
}

export default Sidebar