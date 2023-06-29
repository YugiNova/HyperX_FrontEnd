import { Outlet } from "react-router-dom"
import { Container, ContentWrapper, HeaderWrapper, SidebarWrapper } from "./styles"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useSelector } from "react-redux"
import { getTheme } from "../../redux/selectors"


const PrivateLayout = () => {
    const theme = useSelector(getTheme)


    return(
        <Container theme={theme}>
            <SidebarWrapper><Sidebar/></SidebarWrapper>
            <HeaderWrapper><Header/></HeaderWrapper>
            <ContentWrapper>
                <Outlet/>
            </ContentWrapper>
        </Container>
    )
}

export default PrivateLayout