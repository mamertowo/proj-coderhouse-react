import {useEffect, useState} from "react";
import { pedirDatos } from "../util/pedirDatos";

export const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        pedirDatos()
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }, []); //Tengo las cosas medio desordenadas pero deberia actualizar esto cuando cambian los params de la url

    return {productos, loading};
}