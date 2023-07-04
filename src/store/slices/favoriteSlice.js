import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    onAdd(state, action) {
      const existingMovie = state.find((item) => item.id === action.payload.id);

      if (!existingMovie) {
        return state.concat(action.payload);
      } else {
        return;
      }
    },
    onRemove(state, action) {
      return state.filter((fav) => fav.id !== action.payload);
    },
  },
});

export const { onAdd, onRemove } = favoriteSlice.actions;

export default favoriteSlice.reducer;
