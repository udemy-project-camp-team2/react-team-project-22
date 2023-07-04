import { useState, useEffect } from "react";

export const useFetchMoives = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function movieas() {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
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

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
