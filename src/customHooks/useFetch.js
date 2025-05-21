import { useState, useEffect } from 'react';
import { URL } from '../config';

export const useFetch = (dataSent, endpoint) => {
  const [isMounted, setIsMounted] = useState(true);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFromServer = async () => {
      setLoading(true)
      let options = {};
      let method = 'get'
      options["method"] = method
      if(dataSent != null) {
        method = "post"
        options["method"] = method
        options = {...options, body: JSON.stringify(dataSent)}
      }
      options.headers = { "Content-Type": "application/json" }
      console.log(options)
      try {
        const res = await fetch(`${URL}/api${endpoint}`, options)
        const resJson = await res.json();
        setLoading(false)
        setData(resJson)
        
      } catch (error) {
        setLoading(false)
        setError(true)
      }

    }

    if(isMounted) fetchFromServer();

    return () => setIsMounted(false) 

  }, [])

  return { data, loading, error }
}