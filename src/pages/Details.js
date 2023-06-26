import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from '../styles/detail.module.css'
import {Link} from 'react-router-dom'

const MovieDetalis = ({id,title,src}) => {
    const [detail,setDetail] = useState('');
    const {movieid} = useParams();
    const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

    console.log(movieid);

    useEffect(()=>{
        async function movie_detail () {
            const fetchUrl = await fetch(url);
            const detailInfo = await fetchUrl.json();

            setDetail(detailInfo)
        }
        
    movie_detail();
    },[])
    console.log(detail);

    return (
        <div className={styles.detail_page}>
            <span className={styles.back}>
                <Link to='/'>
                    &lt; Back More
                </Link>
            </span>
            <h2>
                {detail?.title}
            </h2>
            <img src={`https://image.tmdb.org/t/p/original${detail?.poster_path}`} alt={detail?.title} />
            
            <p className={styles.overview}>{detail?.overview}</p>
            <p>release date : {detail?.release_date}</p>
        </div>
    )
}
export default MovieDetalis;