import {useEffect, useState} from "react";
import {db} from "../firebase/config";
import {collection, getDocs} from "firebase/firestore";

export function useCategorias() {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
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