import { useState, useEffect } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    // if (url === '' && !(new URL(url))) return

    async function doFetch() {
      try {
        setLoading(true);
        const response = await fetch(url);
        console.log('response', response)
        setData(await response.json());
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    doFetch();
  }, [url])

  return [loading, error, data]
}

export default useFetch
