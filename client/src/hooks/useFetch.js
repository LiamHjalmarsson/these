import { useEffect, useState } from "react"

const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    useEffect(() => {
        let fetchData = async () => {
            let rep = await fetch(url);
            let res = await rep.json();

            setData(res);

        }
        fetchData();
    }, [url]);

    window.scrollTo(0, 0);

    return { data }
}

export default useFetch;