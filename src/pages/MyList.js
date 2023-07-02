import React, { Fragment, useContext } from "react";
import styles from "../styles/mylist.module.css";
import { FavoriteContext } from "../context/FavoriteContext";

const MyList = () => {
  const { favorites, handleFavorites } = useContext(FavoriteContext);

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
              <button onClick={() => handleFavorites(fav)}>취소</button>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default MyList;
