import { useEffect, useState } from "react";
import makeRequest from "../makeRequest";

const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await makeRequest.get(url)
                if(res) {
                    setData(res.data.data);
                }
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData();
    },[url]);
    return {loading, data, error}
}

export default useFetch;