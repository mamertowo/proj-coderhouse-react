import {useParams} from "react-router-dom"
import {usePiedra} from "../hooks/usePiedra";
import Container from 'react-bootstrap/Container';
import {ItemDetail} from "./ItemDetail";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext";
import {Link} from "react-router-dom";

export const ItemDetailContainer = () => {
    const {agregarItem, maxComprable} = useContext(CartContext);
    const {id} = useParams();
    const {piedra, loading} = usePiedra(id);

    const addToCart = (amount) => {
        amount > 0 && agregarItem({
            ...piedra,
            cantidad: amount
        });
    }

    if (!loading && !piedra.id) {
        return (
            <Container className="text-center">
                <p className="h1 text-danger">Esta piedra no existe</p>
                <Link to="/" className="fs-2">Volver al inicio</Link>
            </Container>
        );
    }

    return (
        <Container className="detailContainer">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={piedra} maxComprable={maxComprable(piedra)} addFunc={addToCart} />
            }
        </Container>
    );
}