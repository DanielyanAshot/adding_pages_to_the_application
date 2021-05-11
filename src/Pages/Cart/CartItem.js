import { useCallback } from "react";
import "./style/CartItem.css";

function CartItem ({item, onCartQuantityChange,removeItem}) {


    const inputChange = useCallback((evt) => {
      onCartQuantityChange(Math.max(0, Math.round(evt.target.value)), item.id);
    }, [onCartQuantityChange, item.id]);

    const buttonQuantityChanger = useCallback((evt) => {
      onCartQuantityChange(evt.target.innerHTML === "+" ? item.quantity + 1 : Math.max(0, item.quantity - 1), item.id);
    }, [onCartQuantityChange, item]);

    const removeCartItem = useCallback(() => {
      removeItem(item.id);
    }, [removeItem, item.id]);

    
    return (
        <div className = "CartItem">
          <div className = "img">
            <img src = {item.image ? item.image : "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"} className = "Image" alt = {item.name}></img>
          </div>
                   
          <div className = "productInfo">
           <span className = "productName">{item.name}</span>
           <div className = "productColor" style={{"backgroundColor":item.color}}></div>
           <div className = "quantityDiv">
             <button className = "quantityChange" onClick = {buttonQuantityChanger}>-</button>
             <input className = "productQuantity" type = "number" value = {item.quantity} onChange = {inputChange}></input>
             <button className = "quantityChange" onClick = {buttonQuantityChanger}>+</button>
           </div>
          </div>
          
          <div className = "price">
             <button className = "RemoveItemButton" onClick = {removeCartItem}></button>
             <p className = "productPrice">{"$" + (item.price.slice(1) * item.quantity).toLocaleString()}</p>
          </div>
        </div>
    );
}

export default CartItem;