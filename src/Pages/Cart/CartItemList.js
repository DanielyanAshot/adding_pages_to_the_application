import CartItem from "./CartItem";

import "./style/CartItemList.css";

function CartItemList ({data, onCartQuantityChange,removeItem}) {
    
  if(data[0]){  
    return (
        <div className = "CartItemList">
          {data.map((item) => <CartItem item = {item} key = {item.id} onCartQuantityChange = {onCartQuantityChange} removeItem = {removeItem}/>)}
        </div>
    )};
  
  return <div className = "emptyCart">The cart is empty</div>  
}

export default CartItemList;