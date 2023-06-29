import { Account, Cart, Container, Logo, NavItem, Navbar, SearchWrapper } from "./styles";
import logo from "../../../assets/Logo.png";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";
import SearchBox from "../../../components/SearchBox";
import CartQuickView from "../../../components/CartQuickView";
import DropdownCategory from "./DropdownCategory";

const Header:React.FC = () => {
    const theme = useSelector(getTheme);

    return(
        <Container theme={theme}>
            <Logo src={logo}/>
            <Navbar>
                <DropdownCategory/>
                <NavItem theme={theme} to={"/"}>Home</NavItem>
                <NavItem theme={theme} to={"/"}>Categories</NavItem>
                <NavItem theme={theme} to={"/"}>About</NavItem>
                <NavItem theme={theme} to={"/"}>Contact</NavItem>
            </Navbar>
            <SearchWrapper><SearchBox/></SearchWrapper>
            <Account><CartQuickView/></Account>
            <Cart><CartQuickView/></Cart>
        </Container>
    )
}

export default Header;