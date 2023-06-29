import { Select } from "antd";
import { CustomSelect } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const ToggleTheme: React.FC = () => {
    const theme = useSelector(getTheme)

    const handleChange = () => {

    }

    return (
        <div>
            <CustomSelect
                theme={theme}
                defaultValue="Light"
                style={{ width: "auto" }}
                onChange={handleChange}
                options={[
                    { value: "light", label: "Light" },
                    { value: "dark", label: "Dark" },
                ]}
            />
        </div>
    );
};

export default ToggleTheme;
