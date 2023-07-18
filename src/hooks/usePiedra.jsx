import {useEffect, useState} from "react";

export function usePiedra(id) {
    const [piedra, setPiedra] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://648a2b645fa58521cab0f453.mockapi.io/pcjs/piedras/${id}`)
            .then(res => res.json())
                .then(data => setPiedra(data))
            .finally(() => setLoading(false));
    }, []);

    return {piedra, loading};
}