import { FaExchangeAlt } from "react-icons/fa";
import { QuickButton } from "../styles"
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";


const Compare:React.FC = () => {
    const theme = useSelector(getTheme);

    return(
        <QuickButton theme={theme}><FaExchangeAlt/></QuickButton>
    )
}

export default Compare