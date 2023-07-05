import { createContext } from "react";
import { useFavoriteMovies } from "../hooks/useFavoriteMovies";

export const FavoriteContext = createContext({
  favorites: [],
  handleFavorites: () => {},
});

const FavoriteContextProvider = ({ children }) => {
  const { favorites, handleFavorites } = useFavoriteMovies();

  const value = { favorites, handleFavorites };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;