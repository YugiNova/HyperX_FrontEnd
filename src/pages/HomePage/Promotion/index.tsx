import promote1 from "../../../assets/Promotions/promote1.webp"
import promote2 from "../../../assets/Promotions/promote2.webp"
import promote3 from "../../../assets/Promotions/promote3.webp"
import promote4 from "../../../assets/Promotions/promote4.webp"
import { Container, Promote, PromoteWrapper } from "./styles"

const Promotion:React.FC = () => {

    return(
        <Container>
            <PromoteWrapper><Promote src={promote1}/></PromoteWrapper>
            <PromoteWrapper><Promote src={promote2}/></PromoteWrapper>
            <PromoteWrapper><Promote src={promote3}/></PromoteWrapper>
            <PromoteWrapper><Promote src={promote4}/></PromoteWrapper>
        </Container>
    )
}

export default Promotion;