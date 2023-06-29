import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { QuickButton } from "../styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";
import ModalQuickView from "../../ModalQuickView";
import { Modal } from "antd";

const Detail: React.FC = () => {
    const theme = useSelector(getTheme);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    return (
        <div>
            <QuickButton onClick={showModal} theme={theme}>
                <MdRemoveRedEye />
            </QuickButton>
            <ModalQuickView open={open} setOpen={setOpen} />
        </div>
    );
};

export default Detail;
