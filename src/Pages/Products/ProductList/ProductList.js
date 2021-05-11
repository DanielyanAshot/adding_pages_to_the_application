import {useContext} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ProductList.css';
import Context from '../../../Context';

const ProductList = () => {
    
    const data = useContext(Context).data;

    return(
        <div className = 'ProductList'>
            {data.map((product) => <SingleProduct product = {product} key = {product.id}/>)}
        </div>
    );
}

export default ProductList;