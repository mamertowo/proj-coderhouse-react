import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {AmountPicker} from './AmountPicker';

export const ItemDetail = ({item, maxComprable, addFunc}) => {
    const {nombre, stock, precio, img} = item;
    const cantidadActual = stock - maxComprable;
    return (
        <Row>
            <Col className="itemImgContainer" xs={12} md={4}>
                <Image src={img} fluid />
            </Col>
            <Col xs={12} md={8}>
                <h2 className="itemTitulo">Piedra {nombre}</h2>
                <p className="itemDatos">
                    ${precio} <br/>
                    Stock: {stock} <br/>
                    {
                        cantidadActual > 0
                            && <span className="yaHay">Ya hay {cantidadActual} en el carrito</span>
                    }
                </p>
                <AmountPicker max={maxComprable} func={addFunc}>
                    Agregar al carrito
                </AmountPicker>
            </Col>
        </Row>
    );
}