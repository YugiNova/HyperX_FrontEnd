import { FaHeart } from "react-icons/fa";
import { QuickButton } from "../styles"
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";


const AddToWhistList:React.FC = () => {
    const theme = useSelector(getTheme);

    return(
        <QuickButton theme={theme}><FaHeart/></QuickButton>
    )
}

export default AddToWhistList