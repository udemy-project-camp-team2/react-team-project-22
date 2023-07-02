import { useMemo, useState } from "react";

export const useSearch = (movies) => {
  const [searchMovies, setSearchMovies] = useState("");
  const onChange = (event) => {
    setSearchMovies(event.target.value);
  };

  const filteredMovies = useMemo(() => {
    if (!searchMovies || searchMovies.trim().length === 0) {
      return movies?.results;
    }

    const filtered = movies?.results?.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovies.toLowerCase()),
    );

    return filtered;
  }, [searchMovies, movies]);

  return { filteredMovies, searchMovies, onChange };
};
