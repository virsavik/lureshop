import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProductsAsync } from '../../shared/mock-data';

const initialState = {
  products: [],
  loading: false,
  errorMessage: '',
  totalItems: 0,
};

// Actions

export const getAllProducts = createAsyncThunk('product/get_all_products', async () => {
  const response = await getAllProductsAsync();
  return response;
});

// Slice

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.totalItems = action.payload.length || 0;
        state.loading = false;
      })
      .addCase(getAllProducts.pending, state => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || 'Something went wrong';
      });
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
