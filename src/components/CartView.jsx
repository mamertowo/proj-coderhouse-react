import {useContext} from "react"
import {CartContext} from "../contexts/CartContext"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {CartItem} from "./CartItem"
import {Link} from "react-router-dom"

export const CartView = () => {
    const {cart, vaciar, precioTotal, cantidad, borrarItem} = useContext(CartContext);

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    {cart.map(p => {
                        return <CartItem key={p.id} item={p} funcDel={borrarItem} />
                    })}
                </Col>
                <Col xs={12} md={4} className="text-center text-md-start cartControl">
                    <p>
                        {cantidad()} piedras<br/>
                        Total: ${precioTotal()}
                    </p>
                    {
                        cantidad() > 0 &&
                            <>
                                <Link to="/checkout">
                                    <Button>Comprar</Button>
                                </Link>
                                <Button onClick={vaciar} variant="danger">Vaciar carrito</Button>
                            </>
                    }
                </Col>
            </Row>
        </Container>
    );
}