import {useHistory} from 'react-router-dom';
import Context from '../../../Context';
import {useContext} from 'react';
import './SingleProduct.css';

const SingleProduct = ({product}) => {
    const addToCart = useContext(Context).addToCart;
    const router = useHistory();
   
    const goToProductPage = () => {
        router.push(`/Product/${product.id}`)
    }

    return(
        <div className = 'SingleProduct'>

            <img src = {product.image ? product.image : "/default-image.jpg"} className = "SingleProductImg" alt = {product.name} onClick = {goToProductPage}></img>
            
            <div className = 'info'>
              <div className = 'SingleProductName'>{product.name}</div>
            
              <button className = 'addToCartButton' onClick = {() => addToCart(product)}>Add to Cart</button>
            </div>
            
        </div>
    )
}

export default SingleProduct;