import { Select } from "antd";
import { CustomSelect } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const ToggleLanguages:React.FC = () => {
    const theme = useSelector(getTheme)

    const handleChange = () => {
        
    }

    return (
        <div>
            <CustomSelect
                theme={theme}
                defaultValue="ENG"
                style={{ width: "auto"}}
                onChange={handleChange}
                options={[
                    { value: "eng", label: "ENG" },
                    { value: "vie", label: "VIE" },
                ]}
            />
        </div>
    );
}

export default ToggleLanguages