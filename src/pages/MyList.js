import React, { Fragment } from "react";
import styles from "../styles/mylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { onRemove } from "../store/slices/favoriteSlice";

const MyList = () => {
  const favorites = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {favorites?.length === 0 ? (
        <p style={{ textAlign: "center" }}>No Favorites</p>
      ) : (
        <ul className={styles.fav__container}>
          {favorites?.map((fav) => (
            <li key={fav.id} className={styles.fav__lists}>
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/original${fav.backdrop_path}`}
                alt={fav.title}
              />
              <h3>{fav.title}</h3>
              <button onClick={() => dispatch(onRemove(fav.id))}>취소</button>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default MyList;
