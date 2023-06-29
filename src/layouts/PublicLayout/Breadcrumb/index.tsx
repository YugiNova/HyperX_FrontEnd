import { useLocation } from "react-router-dom";
import { BreadcrumbItem, CustomBreadcrumb } from "./styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const Breadcrumb = () => {
    const location = useLocation();
    const theme = useSelector(getTheme);

    useEffect(() => {
        console.log(location);
    }, [location]);

    const items = [
        {
            key: 1,
            title: <BreadcrumbItem theme={theme} to={"/"}>Home</BreadcrumbItem>,
        },
        {
            key: 2,
            title: <BreadcrumbItem theme={theme} to={"/"}>Category</BreadcrumbItem>,
        },
        {
            key: 3,
            title: <BreadcrumbItem theme={theme} to={"/"}>Product</BreadcrumbItem>,
        },
    ];

    return (
        <div>
            {location.pathname != "/" ? (
                <CustomBreadcrumb theme={theme} items={items} />
            ) : (
                <div></div>
            )}
        </div>
    );
};
export default Breadcrumb;
