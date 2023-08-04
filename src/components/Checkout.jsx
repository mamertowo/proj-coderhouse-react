import {useContext, useState} from "react"
import {CartContext} from "../contexts/CartContext"
import {Navigate, Link} from "react-router-dom"
import {Formik, Form, Field, ErrorMessage} from "formik"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as Yup from 'yup'
import {db} from "../firebase/config"
import {addDoc, collection, documentId, getDocs, query, where, writeBatch} from "firebase/firestore"

const schema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Minimo 2 caracteres')
        .max(30, 'Maximo 30 caracteres')
        .required('Hay que completar este campo'),
    apellido: Yup.string()
        .min(2, 'Minimo 2 caracteres')
        .max(30, 'Maximo 30 caracteres')
        .required('Hay que completar este campo'),
    telefono: Yup.string()
        .min(8, 'Numero invalido')
        .max(18, 'Numero invalido')
        .required('Hay que completar este campo'),
    email: Yup.string()
        .email('Email invalido')
        .required('Hay que completar este campo')
});

export const Checkout = () => {
    const {cart, cantidad, precioTotal, vaciar} = useContext(CartContext);
    const [orderId, setOrderId] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        const order = {
            cliente: values,
            items: cart.map(p => ({
                id: p.id,
                nombre: p.nombre,
                precio: p.precio,
                cantidad: p.cantidad
            })),
            precioTotal: precioTotal(),
            fecha: new Date()
        }

        const batch = writeBatch(db);
        const piedrasRef = collection(db, "piedras");
        const ordersRef = collection(db, "orders");

        const q = query(piedrasRef, where(documentId(), "in", cart.map(p => p.id)));
        const aComprar = await getDocs(q);

        let error = false;
        aComprar.docs.forEach(comprando => {
            const enCart = cart.find(p => p.id === comprando.id);
            if (comprando.data().stock >= enCart.cantidad) {
                batch.update(comprando.ref, {
                    stock: comprando.data().stock - enCart.cantidad
                })
            } else {
                error = true;
            }
        });

        if (!error) {
            await batch.commit();
            const resId = await addDoc(ordersRef, order);
            setOrderId(resId.id);
        } else {
            //Vacio el carrito y listo, solucion rapida
            setOrderId("error");
        }
        vaciar();
        setLoading(false);
    }

    if (orderId) {
        return (
            <Container className="text-center">
                {
                    orderId === "error"
                        ? <h2 className="h1 text-danger">Hubo un error con la compra</h2>
                        : <>
                            <h2 className="h1">Gracias por su compra!</h2>
                            <p className="fs-2">
                                El id de su orden es:<br/>
                                <strong>{orderId}</strong>
                            </p>
                        </>
                }
                <Link to="/" className="fs-2">Volver al inicio</Link>
            </Container>
        );
    } else if (cantidad() === 0) {
        return <Navigate to="/"/>;
    }

    return (
        <Container>
                <h2 className="h1 mt-3">Checkout</h2>
                <p className="h3">{cantidad()} piedras, ${precioTotal()}</p>
                <Formik
                    initialValues={{
                        nombre: '',
                        apellido: '',
                        telefono: '',
                        email: ''
                    }}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                    validationSchema={schema}
                >
                    {() => (
                        <Form className="checkoutForm">
                            <Row className="fs-5">
                                <Col xs="12" md="6" className="checkoutCol">
                                    <label>Nombre</label>
                                    <Field type="text" name="nombre" placeholder="Jorge" className="checkoutField" />
                                    <ErrorMessage name="nombre" component="p" />
                                </Col>
                                <Col xs="12" md="6" className="checkoutCol">
                                    <label>Apellido</label>
                                    <Field type="text" name="apellido" placeholder="Egroj" className="checkoutField" />
                                    <ErrorMessage name="apellido" component="p" />
                                </Col>
                                <Col xs="12" md="6" className="checkoutCol">
                                    <label>Telefono</label>
                                    <Field type="tel" name="telefono" placeholder="1112345678" className="checkoutField" />
                                    <ErrorMessage name="telefono" component="p" />
                                </Col>
                                <Col xs="12" md="6" className="checkoutCol">
                                    <label>Email</label>
                                    <Field type="email" name="email" placeholder="jorge@gmail.com" className="checkoutField" />
                                    <ErrorMessage name="email" component="p" />
                                </Col>
                            </Row>
                            <Button type="submit" disabled={loading}>Finalizar compra</Button>
                        </Form>
                    )}
                </Formik>
        </Container>
    );
}

// const [values, setValues] = useState({
//     nombre: '',
//     apellido: ''
// });

// const handleValues = (e) => {
//     setValues({
//         ...values,
//         [e.target.name]: e.target.value
//     });
// }