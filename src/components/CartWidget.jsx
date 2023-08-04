import cartIcon from '../assets/cart.svg'
import {Link} from 'react-router-dom';
import {CartContext} from '../contexts/CartContext';
import {useContext} from 'react';

export const CartWidget = () => {
    const {cantidad} = useContext(CartContext);
    return (
        <Link to="/cart" className="cartContainer">
            <img src={cartIcon} className="img-fluid cartImg" style={{height: "50px"}}/>
            <p className="cartAmount">{cantidad()}</p>
        </Link>
    );
}