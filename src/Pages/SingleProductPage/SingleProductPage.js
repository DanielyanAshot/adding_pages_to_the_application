import  Context from '../../Context';
import {useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';
import './SingleProductPage.css';

const SingleProductPage = () => {
  const addToCart = useContext(Context).addToCart;
  const data = useContext(Context).data;
  const id = useRouteMatch().params.id;
  const product = data.find((item) => item.id === +id);

  return(
        <div className = "SingleProductPage">
          <div className = "productImage">
            <img src = {product.image ? product.image : "/default-image.jpg"} className = "SingleProductImg" alt = {product.name}></img>
          </div>
                   
          <div className = "productInfo">
            <span className = "productName">{product.name}</span>
            <div className = "productColor" style={{"backgroundColor":product.color}}></div>
            <p className = "productDescription">{product.description}</p>
            <p className = "ProductPrice">{product.price}</p>
          </div>
          
          <div className = "Button">
             <button onClick = {() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
    );
}

export default SingleProductPage;