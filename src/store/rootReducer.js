import { combineReducers } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoriteSlice";

export const rootReducer = combineReducers({
  favorite: favoriteSlice,
});
