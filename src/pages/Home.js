import React from "react";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import { useFetchMoives } from "../hooks/useFetchMovies";
import { useSearch } from "../hooks/useSearch";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

function Home() {
    const {data:movies, loading,error} = useFetchMoives(url)
    const {onChange, searchMovies} = useSearch('')
    const filteredMovies = movies && movies.results.length > 0 && movies.results.filter((item) => item.title.toLowerCase().includes(searchMovies.trim().toLowerCase()) )

  return (
    <>
    <div>
        <input type="text" value={searchMovies} onChange={onChange}/>
    </div>
    {error && <div>{error}</div>}
    {loading && <div>loading...</div>}
    <div className={styles.movie_list}>
      {filteredMovies?.map((movie) => (
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
    </>
  );
}

export default Home;
