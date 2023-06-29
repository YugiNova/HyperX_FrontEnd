import { Badge, Drawer } from "antd";
import { useState } from "react";
import {
    ButtonWrapper,
    CheckOut,
    CloseButton,
    Container,
    CustomButton,
    CustomDrawer,
    DrawerContainer,
    Title,
    Total,
    ViewCart,
} from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import { CloseOutlined } from "@ant-design/icons";
import CartItem from "./CartItem";

const CartQuickView = () => {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useSelector(getTheme);

    const showDrawer = () => {
        setOpen(true);
    };

    const onExit = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Badge count={5} size="default">
                <CustomButton theme={theme} onClick={showDrawer}>
                    <FaShoppingCart />
                </CustomButton>
            </Badge>
            <CustomDrawer
                theme={theme}
                className="custom-drawer"
                title={<Title>Shopping Cart</Title>}
                open={open}
                onClose={onExit}
                closeIcon={<CloseButton theme={theme}><CloseOutlined /></CloseButton>}
            >
                <DrawerContainer>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <Total theme={theme}>
                        <h3>Total:</h3>
                        <h4>50.000.000</h4>
                    </Total>
                    <ButtonWrapper>
                        <ViewCart theme={theme} to={"/"}>View Cart</ViewCart>
                        <CheckOut theme={theme} to={"/"}>Check Out</CheckOut>
                    </ButtonWrapper>
                </DrawerContainer>
            </CustomDrawer>
        </Container>
    );
};

export default CartQuickView;
