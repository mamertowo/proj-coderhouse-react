import {CartWidget} from './CartWidget'
import {useState} from 'react'

export const NavBar = () => {
    const [activa, setActiva] = useState(0);

    function leToca(pos) {
        return pos === activa ? "nav-link active" : "nav-link";
    }

    function activar(pos) {
        setActiva(pos);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">PIEDRAS 2</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{justifyContent: "space-between"}}>
                    <div className="navbar-nav">
                        <button className={leToca(0)} onClick={() => activar(0)}>Tienda</button>
                        <button className={leToca(1)} onClick={() => activar(1)}>Nosotros</button>
                    </div>
                    <CartWidget />
                </div>
             </div>
        </nav>
    );
}