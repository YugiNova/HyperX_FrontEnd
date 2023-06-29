import { useSelector } from "react-redux";
import { ButtonWrapper, Contact, Container } from "./styles";
import { getTheme } from "../../../redux/selectors";
import ToggleCurrencies from "./toggleCurrencies";
import ToggleTheme from "./toggleTheme";
import ToggleLanguages from "./toggleLanguages";


const SmallHeader = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <Contact theme={theme}>Contact us: 111-2222-33333</Contact>
            <ButtonWrapper theme={theme}>
                <ToggleCurrencies/>
                <ToggleLanguages/>
                <ToggleTheme/>
            </ButtonWrapper>
        </Container>
    )
}

export default SmallHeader;