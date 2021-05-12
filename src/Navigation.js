import {Switch, Route, Redirect} from 'react-router-dom';
import ProductList from './Pages/Products/ProductList/ProductList';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import Cart from './Pages/Cart/Cart';
import NotFound from './Pages/NotFound/NotFound';

const Navigation = () => {

    return(
            <Switch>
                
                <Route exact path = '/'>
                    <Redirect to = '/Products'/>
                </Route>

                <Route path = '/Products'>
                    <ProductList />
                </Route>

                <Route path = '/product/:id'>
                    <SingleProductPage />
                </Route>

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