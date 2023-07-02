import { useState, useEffect } from "react";

export const useFetchMoives = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function movieas() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error 발생");
        }
        const moviedata = await response.json();

        setData(moviedata);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    movieas();
  }, [url]);

  return { data, loading, error };
};
