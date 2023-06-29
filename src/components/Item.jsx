export const Item = ({nombre, cantidad, descripcion}) => {
    return (
        <li className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{cantidad}</h6>
                <p className="card-text">{descripcion}</p>
            </div>
        </li>
    );
}