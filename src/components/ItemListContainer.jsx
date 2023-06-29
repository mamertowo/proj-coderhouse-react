import {Item} from './Item'
import './itemListContainer.css'

export const ItemListContainer = ({nombre}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <ul className="listaItems">
                <Item nombre="Piedra Cool" cantidad={23} descripcion="Una piedra bastante cool"/>
                <Item nombre="Piedra Desagradable" cantidad={99} descripcion="No deberias comprar esta piedra"/>
                <Item nombre="Piedra Masiva" cantidad={2} descripcion="Esta piedra es demasiado grande"/>
            </ul>
        </div>
    );
}