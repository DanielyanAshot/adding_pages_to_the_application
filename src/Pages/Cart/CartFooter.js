import "./style/CartFooter.css"

function CartFooter ({subtotal}) {
        
    return (
        <div className = "CartFooter">
            <span className = "subtotal">Subtotal</span>
            <span className = "subtotalValue">{"$" + subtotal.toLocaleString()}</span>
            <button className = "checkout">Checkout</button>
        </div>
    );
}

export default CartFooter;