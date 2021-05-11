import {Switch, Route, Redirect} from 'react-router-dom';
import ProductList from './Pages/Products/ProductList/ProductList';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import Cart from './Pages/Cart/Cart';
import NotFound from './Pages/NotFound/NotFound';
import Context from './Context';
import {useContext} from 'react';

const Navigation = () => {
    
    const data = useContext(Context).data;
    
    

    return(
            <Switch>
                
                <Route exact path = '/'>
                    <Redirect to = '/Products'/>
                </Route>

                <Route path = '/Products'>
                    <ProductList />
                </Route>

                {data.map((product) => 
                    <Route path = {`/Product/${product.id}`} key = {product.id}>
                        <SingleProductPage product = {product}/>
                    </Route>
                )}

                <Route path = '/Cart'>
                    <Cart />
                </Route>

                <Route path = '*'>
                    <NotFound />
                </Route>
                
            </Switch>
    );
}

export default Navigation;