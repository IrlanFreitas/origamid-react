import { useCallback, useState } from 'react'

const useFetch = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, options) => {
    let json, response
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (response.ok === false) throw new Error(json.message);
    } catch (error) {
      json = null
      setError(error.message)
    } finally {
      setData(json)
      setLoading(false)
      // eslint-disable-next-line no-unsafe-finally
      return { response, json }
    }
  }, [])


  return { data, loading, error, request }
}

export default useFetch
