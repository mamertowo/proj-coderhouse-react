import {useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase/config";

export function usePiedras(id) {
    const [piedras, setPiedras] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // fetch("https://648a2b645fa58521cab0f453.mockapi.io/pcjs/piedras")
        //     .then(res => res.json())
        //         .then(data => setPiedras(data))
        //     .finally(() => setLoading(false));
        const piedrasRef = collection(db, "piedras");
        const q = id
            ? query(piedrasRef, where("categorias", "array-contains", id)) //where("stock", ">", 0)
            : piedrasRef; //No puedo pedir stock > 0 porque firestore solo me deja hacer queries en un field y categorias me combiene mas que stock
        getDocs(q)
            .then((resp) => {
                setPiedras(resp.docs.map(d => {
                    return {
                        id: d.id,
                        ...d.data()
                    }
                }));
            })
            .finally(() => setLoading(false));
    }, [id]);

    return {piedras, loading};
}