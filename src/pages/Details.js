import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/detail.module.css";
import { Link } from "react-router-dom";
import { useFetchMoives } from "../hooks/useFetchMovies";
import Loading from "../components/loading";

const MovieDetalis = () => {
  
  const { movieid } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;


  const {data:detail, loadingcase ,error} = useFetchMoives(url);
  console.log(detail);
  if(loadingcase) return <Loading />
  if(error) return <p>{error}</p>
  
  return (
    <div className={styles.detail_page}>
      <span className={styles.back}>
        <Link to="/">&lt; Back</Link>
      </span>
      
      <img
        src={`https://image.tmdb.org/t/p/original${detail?.poster_path}`}
        alt={detail?.title}
      />
      <h2>{detail?.title}</h2>
      <p className={styles.overview}>{detail?.overview}</p>
      <p className={styles.date}>{detail?.release_date}</p>
      <p className={styles.vote}><span className={styles.star}>★</span> {detail?.vote_average}</p>
    </div>
  );
};
export default MovieDetalis;
