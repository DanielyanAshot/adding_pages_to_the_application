import './Header.css'
import {NavLink} from 'react-router-dom'
import Context from '../../Context'
import {useContext} from 'react'

const Header = () => {

    const Cart = useContext(Context).Cart;

    return (
        <div className = 'Header'>
              <NavLink to = '/Products' className = 'linksDiv' activeClassName = 'active'>
                  <div className = 'ProductsLink'>
                      Products
                  </div>
              </NavLink>
                        
              <NavLink to = '/Cart' className = 'linksDiv' activeClassName = 'active'>
                  <div className = 'CartLink'>
                      Cart
                      {Cart.length ? <span className = 'CartLength'>{Cart.length}</span>: ''}
                  </div>
              </NavLink>
        </div>
    )
}

export default Header;