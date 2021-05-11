import "./style/CartHeader.css"

function CartHeader () {
    return (
        <div className="CartHeader">
          <span className = "cart">Your Cart</span>
          <button className = "close">X</button>
        </div>
      );
}

export default CartHeader;