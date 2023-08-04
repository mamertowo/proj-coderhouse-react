import {useEffect, useState} from "react";
import {db} from "../firebase/config";
import {collection, getDocs} from "firebase/firestore";

export function useCategorias() {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // fetch("https://648a2b645fa58521cab0f453.mockapi.io/pcjs/categorias")
        //     .then(res => res.json())
        //         .then(data => setCategorias(data))
        //     .finally(() => setLoading(false));
        const categoriasRef = collection(db, "categorias");
        getDocs(categoriasRef)
            .then(resp => {
                setCategorias(resp.docs.map(c => ({
                    id: c.id,
                    ...c.data()
                })));
            })
            .finally(() => setLoading(false));
    }, []);

    return {categorias, loading};
}