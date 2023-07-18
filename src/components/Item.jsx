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
        // <li className="card m-2">
        //     <div className="card-body">
        //         <h5 className="card-title">{nombre}</h5>
        //         <h6 className="card-subtitle mb-2 text-body-secondary">{cantidad}</h6>
        //         <p className="card-text">{descripcion}</p>
        //     </div>
        // </li>
    );
}