import { useSelector } from "react-redux";
import styled from "styled-components";
import { getTheme } from "../../../redux/selectors";
import { Contact, Container, License, Maps, Outro, Title } from "./styles";
import { AiFillFacebook, AiOutlineTwitter,AiFillYoutube} from "react-icons/ai";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import logo from '../../../assets/Logo.png'


const Footer:React.FC = () => {
    const theme = useSelector(getTheme);

    return(
        <Container theme={theme}>
            <Outro theme={theme}>
                <img src={logo}/>
                <p>The home and elements needed to create beautiful products.</p>
                <a href="#"><AiFillFacebook/></a>
                <a href="#"><AiOutlineTwitter/></a>
                <a href="#"><AiFillYoutube/></a>
            </Outro>
            <Contact theme={theme}>
                <Title>Talk To Us</Title>
                <p><MdLocationOn/>Battlefield, Suite C Springfield, MO 65807</p>
                <p><MdPhone/>111-222-3333</p>
                <p><MdEmail/>support@kalathemes.freshdesk.com</p>
            </Contact>
            <Maps theme={theme}>
                <Title>Ours Location</Title>
            </Maps>
            <License theme={theme}>
                Powered by Yugi Nova aka Nguyen Quoc Thang
            </License>
        </Container>
    )
}

export default Footer;
