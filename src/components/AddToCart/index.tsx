import { useSelector } from "react-redux";
import { CustomButton } from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { getTheme } from "../../redux/selectors";


const AddToCart = () => {
    const theme = useSelector(getTheme)

    return(
        <CustomButton theme={theme}><FaCartPlus/>Add To Cart</CustomButton>
    )
}

export default AddToCart;