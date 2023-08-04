import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useState} from 'react';

export const AmountPicker = ({children, max, func}) => {
    const [amount, setAmount] = useState(0);
    const add = () => {
        amount < max && setAmount(amount + 1);
    }
    const sub = () => {
        amount > 0 && setAmount(amount - 1);
    }
    const submit = () => {
        func(amount);
        setAmount(0);
    }
    return (
        <div>
            <ButtonGroup className="mb-3">
                <Button onClick={sub}>-</Button>
                <span className="px-5 py-2 bg-body-secondary">{amount}</span>
                <Button onClick={add}>+</Button>
            </ButtonGroup>
            <br />
            <Button onClick={submit}>{children}</Button>
        </div>
    );
}