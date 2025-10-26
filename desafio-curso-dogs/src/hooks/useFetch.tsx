import React, { useCallback, useState } from "react";
import { apiUrl } from "../services/api";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string, options: any) => {
    let response, json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);

      json = await response?.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (err: any) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
    }

    return { response, json };
  }, []);

  return { data, error, loading, request };
};

export default useFetch;
