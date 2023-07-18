import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useState} from 'react';

export const AmountPicker = ({max}) => {
    const [amount, setAmount] = useState(1);
    const add = () => {
        amount < max && setAmount(amount + 1);
    }
    const sub = () => {
        amount > 1 && setAmount(amount - 1);
    }
    return (
        <div>
            <ButtonGroup className="mb-3">
                <Button onClick={sub}>-</Button>
                <span className="px-5 py-2 bg-body-secondary">{amount}</span>
                <Button onClick={add}>+</Button>
            </ButtonGroup>
            <br />
            <Button>Agregar al carrito</Button>
        </div>
    );
}