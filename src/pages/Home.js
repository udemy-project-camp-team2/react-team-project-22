import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useFetchMoives } from "../hooks/useFetchMovies";
import { useSearch } from "../hooks/useSearch";
import { usePagination } from "../hooks/usePagination";
import { useDispatch } from "react-redux";
import { onAdd } from "../store/slices/favoriteSlice";
import styles from "../styles/home.module.css";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

function Home() {
  const { data: movies, loading, error } = useFetchMoives(url);
  const { filteredMovies, onChange, searchMovies } = useSearch(movies);
  const { paginateHandler, limit, offset, page } = usePagination(searchMovies);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div>
        <input type="text" value={searchMovies} onChange={onChange} />
      </div>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}

      {filteredMovies?.length === 0 ? (
        <p style={{ textAlign: "center" }}>No Lists</p>
      ) : (
        <Fragment>
          <div className={styles.movie_list}>
            {filteredMovies?.slice(offset, offset + limit).map((movie) => (
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
                <button onClick={() => dispatch(onAdd(movie))}>좋아요</button>
              </div>
            ))}
          </div>
          <div className={styles.pagination__container}>
            {Array.from(
              { length: Math.ceil(filteredMovies?.length / limit) },
              (_, i) => i + 1,
            ).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => paginateHandler(item)}
                className={styles.pagination__buttons}
                aria-current={page === item ? "page" : null}
              >
                {item}
              </button>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
