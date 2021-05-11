import  Context from '../../Context';
import {useContext} from 'react';
import './SingleProductPage.css';

const SingleProductPage = ({product}) => {
  const addToCart = useContext(Context).addToCart;
  
  return(
        <div className = "SingleProductPage">
          <div className = "productImage">
            <img src = {product.image ? product.image : "/default-image.jpg"} className = "SingleProductImg" alt = {product.name}></img>
          </div>
                   
          <div className = "productInfo">
            <span className = "productName">{product.name}</span>
            <div className = "productColor" style={{"backgroundColor":product.color}}></div>
            <p className = "productPrice">{product.price}</p>
          </div>
          
          <div className = "Button">
             <button onClick = {() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
    );
}

export default SingleProductPage;