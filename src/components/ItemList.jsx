import {Item} from './Item';

export const ItemList = ({nombre, productos}) => {
    return (
        <div>
            <h2 className="listaTitulo">{nombre}</h2>
            <ul className="listaItems">
                {productos.map((el) => {
                    if (el.stock > 0) {
                        //Importante agregar key
                        return <Item key={el.id} id={el.id} nombre={el.nombre} stock={el.stock} precio={el.precio} imgSource={el.img} />;
                    } else {
                        return false;
                    }
                })}
            </ul>
        </div>
    );
}