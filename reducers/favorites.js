import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter((e) => e.name !== action.payload.name);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
