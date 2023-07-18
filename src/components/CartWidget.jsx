import cartIcon from '../assets/cart.svg'

export const CartWidget = () => {
    return (
        <div className="cartContainer">
            <img src={cartIcon} className="img-fluid cartImg" style={{height: "50px"}}/>
            <p className="cartAmount">23</p>
        </div>
    );
}