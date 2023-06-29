import { Button, Dropdown, MenuProps } from "antd";
import { CustomDropdown, DropdownButton, DropdownItem } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../../redux/selectors";

const DropdownCategory = () => {
    const theme = useSelector(getTheme);

    interface MenuItem {
        menu: string,
        submenu: string[],
    }

    const menus:MenuItem[] = [
        {
            menu: "Laptop",
            submenu: ["Laptop 1", "Laptop 2", "Laptop 3"],
        },
        {
            menu: "PC",
            submenu: ["PC 1", "PC 2", "PC 3"],
        },
        {
            menu: "Keyboard",
            submenu: ["Keyboard 1", "Keyboard 2", "Keyboard 3"],
        },
        {
            menu: "Mouse",
            submenu: ["Mouse 1", "Mouse 2", "Mouse 3"],
        },
    ];

    return (
        <CustomDropdown theme={theme}>
            <DropdownButton to={"/"} theme={theme}>
                Category
            </DropdownButton>
            <div className="cover"></div>
            <ul>
                {menus.map((item) => {
                    return (
                        <DropdownItem className="menuitem" to={"/"}>
                            {item.menu}
                            <ul className="submenu">
                                {item.submenu.map(subitem => <DropdownItem className="menuitem" to={"/users"}>{subitem}</DropdownItem>)}
                            </ul>
                        </DropdownItem>
                    );
                })}

            
            </ul>
        </CustomDropdown>
    );
};

export default DropdownCategory;
