import Header from './Pages/Header/Header';
import Navigation from './Navigation';
import {useState, useCallback, useEffect} from 'react';
import Context from './Context';
import {BrowserRouter} from 'react-router-dom';

function Main() {
  const [data, setData] = useState();
  const [Cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {fetch("product_list.json").then(response => response.json()).then((response) => {
      setData(response);
    }
  )}, []);

  const subtotalCalculator = useCallback (newData =>{
    return newData.reduce(function(aggr, item){
      return aggr + item.price.slice(1) * item.quantity;
    }, 0);
  }, []);

  const addToCart = useCallback(product => {
    if(Cart.some((item) => product.id === item.id)){
      const index = Cart.findIndex((item) => {
        return item.id === product.id;
      });
      Cart[index].quantity += 1;
      setCart(Cart);
      setSubtotal(subtotalCalculator(Cart));
    }
    else{
      product.quantity = 1;
      Cart.push(product);
      setCart(Cart);
      setSubtotal(subtotalCalculator(Cart));
    }
  }, [Cart, setCart, setSubtotal, subtotalCalculator]);

  
  const removeFromCart = useCallback(id => {
    const newCart = Cart.filter((item) => item.id !== id);
    setCart(newCart);
    setSubtotal(subtotalCalculator(newCart));
  }, [Cart, setCart, setSubtotal, subtotalCalculator]);

  const onCartQuantityChange = useCallback((quantity, id) => {
    const index = Cart.findIndex((item) => {
      return item.id === id;
    });
    Cart[index].quantity = quantity;
    setCart(Cart);
    setSubtotal(subtotalCalculator(Cart));
   }, [setCart,Cart, setSubtotal, subtotalCalculator]);

if (data){
  return (
    <BrowserRouter>
      <Context.Provider value = {{data, Cart, subtotal, addToCart, removeFromCart, onCartQuantityChange}}>
          <Header />
          <Navigation />
      </Context.Provider>
    </BrowserRouter>
)};

return (
  <div className = "loadingScreen">
    <div className = "loader"></div>
    <span className = "loading">Loading ...</span>
  </div>
);
}

export default Main;