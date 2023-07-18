import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from './CartWidget'
import {Link} from 'react-router-dom';
import {useCategorias} from '../hooks/useCategorias';
import {firstUp} from '../util/firstUp';

export const Header = () => {
    const {categorias, loading} = useCategorias();
    return (
        <header>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">PIEDRAS 2</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-between">
                        <Nav>
                            <Link to="/" className="nav-link">Tienda</Link>
                            {
                                loading
                                ? ""
                                : categorias.map((el) => {
                                    return (
                                        <Link className="nav-link" key={el.id} to={`/category/${el.categoria}`}>{firstUp(el.categoria)}</Link>
                                    );
                                })
                            }
                        </Nav> 
                        <CartWidget /> {/*Arreglar en collapse*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}