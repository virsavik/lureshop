import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  products: [],
};

// Actions
export const addToCart = createAsyncThunk('cart/add_to_cart', async product => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(product);
    }, 200);
  });
});

export const removeFromCart = createAsyncThunk('cart/remove_from_cart', async productId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productId);
    }, 200);
  });
});

export const updateQuantity = createAsyncThunk(
  'cart/update_quantity',
  async (productId, quantity) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ productId, quantity });
      }, 200);
    });
  }
);

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        if (state.products.find(product => product.id === action.payload.id)) {
          state.products.find(product => product.id === action.payload.id).quantity += 1;
        } else {
          state.products.push({ ...action.payload, quantity: 1 });
        }
        state.loading = false;
      })
      .addCase(addToCart.pending, state => {
        state.loading = true;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.products = state.products.filter(p => p.id !== action.payload);
        state.loading = false;
      })
      .addCase(removeFromCart.pending, state => {
        state.loading = true;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.products.find(p => p.id === action.payload.productId).quantity =
          action.payload.quantity;
        state.loading = false;
      })
      .addCase(updateQuantity.pending, state => {
        state.loading = true;
      });
  },
});

export default cartSlice.reducer;
