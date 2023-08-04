import Button from 'react-bootstrap/Button'

export const CartItem = ({item, funcDel}) => {
    const {id, nombre, precio, cantidad, img} = item;
    return (
        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
            <div className="cartItemImg">
                <img src={img} alt={nombre}/>
            </div>
            <p className="cartItemDesc">
                Piedra {nombre}<br/>
                Cantidad: {cantidad}<br/>
                Total: ${cantidad * precio}
            </p>
            <Button onClick={() => funcDel(id)} variant="danger">X</Button>
        </div>
    );
}