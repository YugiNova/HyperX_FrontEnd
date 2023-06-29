import {
    ButtonWrapper,
    QtyButton,
    CloseButton,
    Container,
    CustomRate,
    CustomeModal,
    FirstPrice,
    ImageWrapper,
    InfoContainer,
    Name,
    Price,
    ProductImage,
    Quantity,
    SalePrice,
} from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import { MdOutlineClose } from "react-icons/md";
import AddToCart from "../AddToCart";
import { Button, InputNumber, Rate } from "antd";
import product1 from "../../assets/Products/product1.webp";
import TableInfo from "../TableInfo";
import { useState,useEffect } from "react";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalQuickView: React.FC<Props> = ({ open, setOpen }) => {
    const theme = useSelector(getTheme);
    const [qty, setQty] = useState<number|any>(1);
    const onExit = () => {
        setOpen(false);
        console.log(open);
    };

    // useEffect(()=>{
    //     console.log(qty)
    // },[qty])

    return (
        <CustomeModal
            footer={null}
            closable={false}
            centered
            open={open}
            onCancel={onExit}
            width={"auto"}
            theme={theme}
        >
            <Container>
                <CloseButton onClick={onExit} theme={theme}>
                    <MdOutlineClose />
                </CloseButton>
                <ImageWrapper>
                    <ProductImage src={product1} />
                </ImageWrapper>
                <InfoContainer theme={theme}>
                    <Name theme={theme}>
                        Android Television Super Salon New DGT -256
                    </Name>
                    <Price>
                        <SalePrice theme={theme}>14.000.000</SalePrice>
                        <FirstPrice theme={theme}>15.000.000</FirstPrice>
                    </Price>
                    <CustomRate allowHalf defaultValue={4.5} />
                    <TableInfo />
                    <ButtonWrapper theme={theme}>
                        <Quantity
                            onChange={(value)=>{setQty(value)}}
                            value={qty}
                            addonBefore={
                                <QtyButton
                                    onClick={() => {
                                        setQty(qty - 1);
                                    }}
                                    theme={theme}
                                >
                                    -
                                </QtyButton>
                            }
                            addonAfter={
                                <QtyButton
                                    onClick={() => {
                                        setQty(qty + 1);
                                    }}
                                    theme={theme}
                                >
                                    +
                                </QtyButton>
                            }
                            controls={false}
                            theme={theme}
                            defaultValue={3}
                        />
                        <AddToCart />
                    </ButtonWrapper>
                </InfoContainer>
            </Container>
        </CustomeModal>
    );
};

export default ModalQuickView;
