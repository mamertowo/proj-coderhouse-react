import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

export const Item = ({id, nombre, stock, precio, imgSource}) => {
    return (
        <Card>
            <Card.Img variant="top" src={imgSource} />
            <Card.Body>
                <Card.Title>Piedra {nombre}</Card.Title>
                <Card.Text>
                    ${precio} <br />
                    Stock: {stock}
                </Card.Text>
                <Link to={`/item/${id}`}>
                    <Button variant="primary">Detalle</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}