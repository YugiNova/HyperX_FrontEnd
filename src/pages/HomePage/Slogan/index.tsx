import { MdAssessment,MdAssuredWorkload,MdBrowseGallery } from "react-icons/md";
import { Container, Content, SloganItem, Title } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const Slogan:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <SloganItem theme={theme}>
                <MdAssessment/>
                <Title theme={theme}>Outstanding Support</Title>
                <Content theme={theme}>Mobile Optimized Design & Incredible Design/UI/UX, keep your store looking fresh and perfect.</Content>
            </SloganItem>
            <SloganItem theme={theme}>
                <MdAssuredWorkload/>
                <Title theme={theme}>Stunning Design</Title>
                <Content theme={theme}>Want to increase your sales just in the first visit. Come to us & you will see how miracle our flagship shopify themes are.</Content>
            </SloganItem>
            <SloganItem theme={theme}>
                <MdBrowseGallery/>
                <Title theme={theme}>Easy to Use and Implement</Title>
                <Content theme={theme}>We analyze, then support you the best methods for any necessary processes or features make your website operate stably and smoothly.</Content>
            </SloganItem>
        </Container>
    )
}

export default Slogan;