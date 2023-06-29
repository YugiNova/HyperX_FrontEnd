import PublicLayout from "../../layouts/PublicLayout";
import Layout from "../../layouts/PublicLayout";
import PartnerList from "./PartnerList";
import ProductList from "./ProductList";
import Promotion from "./Promotion";
import Slider from "./Slider";
import Slogan from "./Slogan";


const HomePage:React.FC = () =>{

    return(
        <Layout>
            <Slider/>
            <Slogan/>
            <ProductList/>
            <Promotion/>
            <ProductList/>
            <PartnerList/>
        </Layout>
    )
}

export default HomePage;