import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {AmountPicker} from './AmountPicker';

export const ItemDetail = ({nombre, precio, stock, imgSource}) => {
    return (
        <Row>
            <Col className="itemImgContainer" xs={12} md={4}>
                <Image src={imgSource} fluid />
            </Col>
            <Col xs={12} md={8}>
                <h2 className="itemTitulo">Piedra {nombre}</h2>
                <p className="itemDatos">
                    ${precio} <br />
                    Stock: {stock}
                </p>
                <AmountPicker max={stock} />
            </Col>
        </Row>
    );
}