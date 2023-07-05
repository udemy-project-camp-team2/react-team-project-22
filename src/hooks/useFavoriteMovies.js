import { useReducer } from "react";

const initialState = [];

const ADD = "ADD";
const REMOVE = "REMOVE";

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return state.concat(action.payload);
    case REMOVE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export const useFavoriteMovies = () => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  const handleFavorites = (movie) => {
    const existingMovie = favorites.find((item) => item.id === movie.id);
    if (!existingMovie) {
      dispatch({ type: ADD, payload: movie });
    } else {
      dispatch({ type: REMOVE, payload: movie.id });
    }
  };

  return {
    favorites,
    handleFavorites,
  };
};