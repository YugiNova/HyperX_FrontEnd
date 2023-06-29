import { Select } from "antd";
import { CustomSelect } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";


const ToggleCurrencies:React.FC = () => {
    const theme = useSelector(getTheme)

    const handleChange = () => {
        
    }

    return (
        <div>
            <CustomSelect
                theme={theme}
                defaultValue="VND"
                style={{ width: "auto" }}
                onChange={handleChange}
                options={[
                    { value: "vnd", label: "VND" },
                    { value: "usd", label: "USD" },
                ]}
            />
        </div>
    );
}

export default ToggleCurrencies