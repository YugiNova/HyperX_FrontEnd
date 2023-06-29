import { SearchOutlined } from "@ant-design/icons";
import { Container, Input, SubmitButton } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";


const SearchBox:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <Input theme={theme} placeholder="Search for products"/>
            <SubmitButton theme={theme}><SearchOutlined /></SubmitButton>
        </Container>
    )
}

export default SearchBox;