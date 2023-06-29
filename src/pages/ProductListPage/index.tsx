import Layout from '../../layouts/PublicLayout'
import ProductList from './ProductList'
import SortFilter from './SortFilter'

const ProductListPage:React.FC = () => {

    return(
        <Layout>
            <SortFilter/>
            <ProductList/>
        </Layout>
    )
}

export default ProductListPage