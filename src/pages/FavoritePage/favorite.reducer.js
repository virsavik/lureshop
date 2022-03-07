import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

// Actions

// Slice

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addProductToFavorite(state, action) {
      state.products.push(action.payload);
    },
    removeProductFromFavorite(state, action) {
      state.products.filter(product => product.id !== action.payload);
    },
    reset() {
      return initialState;
    },
  },
});

export const { addProductToFavorite, removeProductFromFavorite, reset } = favoriteSlice.actions;

export default favoriteSlice.reducer;
