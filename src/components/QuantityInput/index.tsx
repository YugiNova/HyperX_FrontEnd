import {useState} from "react";
import { QtyButton, Quantity } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";

const QuantityInput: React.FC = () => {
    const [qty, setQty] = useState<number|any>(1);
    const theme = useSelector(getTheme)

    return (
        <Quantity
            onChange={(value) => {
                setQty(value);
            }}
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
    );
};

export default QuantityInput;
