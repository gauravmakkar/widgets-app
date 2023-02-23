import {useState} from "react";

const useFetch = ({load, onComplete}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetch = async () => {
    setLoading(true);
    try {
      const response = await load();
      onComplete(response);
    } catch (ex) {
      setError(true)
    } finally {
      setLoading(false);
    }
  }
  return {fetch, loading, error}
}

export default useFetch;
