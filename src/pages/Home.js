import React, { useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function movieas() {
      const response = await fetch(url);
      const movieas = await response.json();

      setMovies(movieas.results);
    }

    movieas();
  }, []);

  return (
    <div className={styles.movie_list}>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/${movie.id}`}>
              <img
                title={movie.title}
                id={movie.id}
                src={
                  movie.backdrop_path &&
                  `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                }
                alt="mo"
              />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Home;
