import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userAsync } from '../mock-data';

const initialState = {
  account: {},
  loading: false,
  success: null,
  errorMessage: null,
};

// Actions

export const loginWithGoogle = createAsyncThunk('user/login_with_google', async () => {
  const response = await userAsync();
  return response;
});

// Slice

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.account = action.payload;
    },
    reset() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.account = action.payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(loginWithGoogle.pending, state => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || 'Something went wrong';
      });
  },
});

export const { setUser, reset } = userSlice.actions;

export default userSlice.reducer;
