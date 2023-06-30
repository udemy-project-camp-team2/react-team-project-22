import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/detail.module.css";
import { Link } from "react-router-dom";
import { useFetchMoives } from "../hooks/useFetchMovies";

const MovieDetalis = () => {
  
  const { movieid } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;


  const {data:detail, loading ,error} = useFetchMoives(url);

  if(loading) return <p>loading...</p>
  if(error) return <p>{error}</p>
  
  return (
    <div className={styles.detail_page}>
      <span className={styles.back}>
        <Link to="/">&lt; Back More</Link>
      </span>
      <h2>{detail?.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original${detail?.poster_path}`}
        alt={detail?.title}
      />

      <p className={styles.overview}>{detail?.overview}</p>
      <p>release date : {detail?.release_date}</p>
    </div>
  );
};
export default MovieDetalis;
