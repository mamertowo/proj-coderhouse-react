import {useEffect, useState} from "react";

export function usePiedras() {
    const [piedras, setPiedras] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://648a2b645fa58521cab0f453.mockapi.io/pcjs/piedras")
            .then(res => res.json())
                .then(data => setPiedras(data))
            .finally(() => setLoading(false));
    }, []);

    return {piedras, loading};
}