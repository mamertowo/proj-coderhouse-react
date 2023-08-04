import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase/config";

export function usePiedra(id) {
    const [piedra, setPiedra] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // fetch(`https://648a2b645fa58521cab0f453.mockapi.io/pcjs/piedras/${id}`)
        //     .then(res => res.json())
        //         .then(data => setPiedra(data))
        //     .finally(() => setLoading(false));
        const piedraRef = doc(db, "piedras", id);
        getDoc(piedraRef)
            .then(p => {
                if (p.exists()) {
                    setPiedra({
                        id: p.id,
                        ...p.data()
                    });
                } else {
                    setPiedra({id: false});
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return {piedra, loading};
}