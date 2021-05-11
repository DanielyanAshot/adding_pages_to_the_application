import {useContext} from "react";
import Context from '../../Context';
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartFooter from "./CartFooter";
import "./style/Cart.css";


function Cart() {
  
  const data = useContext(Context).Cart,
        removeFromCart = useContext(Context).removeFromCart,
        onCartQuantityChange = useContext(Context).onCartQuantityChange,
        subtotal = useContext(Context).subtotal;

  if(data){
    return (
        <div className="Cart">
          <CartHeader />
          <CartItemList data = {data} onCartQuantityChange = {onCartQuantityChange} removeItem = {removeFromCart}/>
          <CartFooter subtotal = {subtotal}/>
        </div>
    )};
  
  return (
    <div className = "loadingScreen">
      <div className = "loader"></div>
      <span className = "loading">Loading ...</span>
    </div>
  )
}

export default Cart;