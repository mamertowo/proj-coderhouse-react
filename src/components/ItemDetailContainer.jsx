import {useParams} from "react-router-dom"
import {usePiedra} from "../hooks/usePiedra";
import Container from 'react-bootstrap/Container';
import {ItemDetail} from "./ItemDetail";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const {piedra, loading} = usePiedra(id);
    return (
        <Container className="detailContainer">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail nombre={piedra.nombre} precio={piedra.precio} stock={piedra.stock} imgSource={piedra.img} />
            }
        </Container>
    );
}